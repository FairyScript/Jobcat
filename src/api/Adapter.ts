import { Subject } from "rxjs";
import { LogType } from "../resources/global";
import { filter, map } from "rxjs/operators";
import { Buff } from "./Def";
import { teamBuff,selfBuff, enemyDebuffBySelf } from "../resources/skill";

export const LogSubject = new Subject<{type: number,content: string[]}>();
export let primaryPlayer:number;
addOverlayListener('ChangePrimaryPlayer', (data: any) => {
  primaryPlayer = data.charID;
  console.log(primaryPlayer);
})

addOverlayListener('LogLine', (data: any) => {
  const opcode = Number(data.line[0]);
  if (opcode !== LogType.ACTInfo) {
    console.log(data.line);

    LogSubject.next({
      type: opcode,
      content: data.line
    });
  }
});

startOverlayEvents();

//RxJs
export const buffSub = LogSubject.pipe(
  filter(({ type }) => type === LogType.GainEffect || type === LogType.LoseEffect),
  map(val => new Buff(val.content)),
);

export const teamBuffSub = buffSub.pipe(filter(val => teamBuff[val.skillId] !== undefined && val.encounterId === primaryPlayer));

export const selfBuffSub = buffSub.pipe(filter(val => selfBuff[val.skillId] !== undefined && val.encounterId === primaryPlayer));

export const dotSub = buffSub.pipe(filter(val => enemyDebuffBySelf[val.skillId] !== undefined && val.combatantId === primaryPlayer));
