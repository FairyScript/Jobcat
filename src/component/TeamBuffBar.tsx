import React, { useEffect, useReducer } from 'react';
import { BuffItem } from './BuffItem';
import { Observable } from 'rxjs';
import { LogType } from '../resources/global';
import { Buff } from '../api/Def';

function reducer(state: { [key: string]: any }, data: Buff) {
  const uid = `${data.encounterId}${data.skillId}`;

  switch (data.type) {
    case LogType.GainEffect:
      return {
        ...state, [uid]: (
          <BuffItem key={Date.now()}
            name={data.skillName}
            duration={Date.now() + data.duration * 1000}
          />
        )
      };
    case LogType.LoseEffect: {
      delete state[uid];
      return Object.create(state);
    }
    default:
      throw new Error();
  }
}

interface BuffBarProps {
  label: string;
  source: Observable<Buff>;
}
const BuffBar: React.FC<BuffBarProps> = ({ label, source }) => {
  const [state, dispatch] = useReducer(reducer, {} as any);
  useEffect(() => {
    const handle = source.subscribe(data => {
      //console.log(data);

      dispatch(data);
      return () => handle.unsubscribe();
    });
  }, []);

  const tmp = Object.values(state);
  return tmp.length > 0 ? (
    <div>
      {label}
      {tmp}
    </div>
  )
    : null;
};

export { BuffBar };