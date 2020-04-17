import { Subject } from "rxjs";
import { LogType } from "../resources/global";

const LogSubject = new Subject<{type: number,content: string[]}>();
let primaryPlayer:number;
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

export { LogSubject, primaryPlayer}
