import React, { useEffect, useState, useCallback, useRef } from 'react';
import { LogSubject } from '../api/Adapter';
import { filter } from 'rxjs/operators';
import { LogType, Buff } from '../api/Def';


const buff = LogSubject.pipe(
  filter(val => [LogType.GainEffect, LogType.LoseEffect].indexOf(val.type) !== -1),
);

class TeamBuffBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subHandle: undefined,
      items: {}
    };
  }

  componentDidMount() {
    this.state.subHandle = buff.subscribe(val => {

      const data = new Buff(val.content);
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
    })
  }

  componentWillUnmount() {
    this.state.subHandle.unsubscribe();
  }
  render() {
    return Object.values(this.state.items);
  }
}

function BuffItem({ name, duration, dispose }) {
  const [countDown, setCD] = useState(duration);
  const refresh = () => {
    const t = duration - Date.now();
    t>=0 && setCD(t);
    requestAnimationFrame(refresh);
  };

  useEffect(() => {
    const handle = requestAnimationFrame(refresh);

    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <div>
      {name}
      {countDown}
    </div>
  )
}
export { TeamBuffBar };