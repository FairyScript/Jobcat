import React from 'react';
import { LogSubject,primaryPlayer } from '../api/Adapter';
import { filter, map } from 'rxjs/operators';
import { Buff } from '../api/Def';
import { BuffItem } from './BuffItem';
import { Subscription } from 'rxjs';
import { LogType } from '../resources/global';
import { teamBuff } from '../resources/skill';


const buff = LogSubject.pipe(
  filter(({ type }) => type === LogType.GainEffect || type === LogType.LoseEffect),
  map(val => new Buff(val.content)),
);

interface StateProps{
  subHandle: Subscription|undefined,
  items: any
}
class TeamBuffBar extends React.Component<any,StateProps> {
  constructor(props:any) {
    super(props);
    this.state = {
      subHandle: undefined,
      items: {}
    };
  }

  componentDidMount() {
    const handle = buff.pipe(filter(val => {
      return teamBuff[val.skillId] !== undefined && val.encounterId === primaryPlayer
    })).subscribe(data => {
      console.log(data);
      
      const items = this.state.items;
      const uid = `${data.combatantId}${data.skillId}`;
      switch (data.type) {
        case LogType.GainEffect:
          items[uid] = (
            <BuffItem key={Date.now()}
              name={data.skillName}
              duration={Date.now() + data.duration * 1000}
            />
          );
          break;

        case LogType.LoseEffect:
          delete items[uid];
          break;
      }
      //console.log(items);
      
      this.setState({ items });
    });

    this.setState({ subHandle: handle });
  }

  componentWillUnmount() {
    this.state.subHandle?.unsubscribe();
  }
  render() {
    return Object.values(this.state.items);
  }
}

export { TeamBuffBar };