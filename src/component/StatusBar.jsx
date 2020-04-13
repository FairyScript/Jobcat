import React, { useEffect } from 'react';
import { LogSubject } from '../api/Adapter';
import { filter } from 'rxjs/operators';
import { LogType, Effect } from '../api/Def';


function StatusBar() {
  useEffect(() => {
    const sub = LogSubject.pipe(
      filter(val=>[LogType.GainEffect,LogType.LoseEffect].indexOf(val.type) !== -1)
    );
    
    sub.subscribe(data => {
      const detail = new Effect(data.content);
      console.log(detail.rawText);
      
    });
  }, []);
  return null;
}

export {StatusBar};