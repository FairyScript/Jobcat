import { Subject } from "rxjs";
import { LogType } from "./Def";

const LogSubject = new Subject<{type: string,content: string[]}>();
let primaryPlayer;
addOverlayListener('ChangePrimaryPlayer', (data: any) => {
  primaryPlayer = data.charID.toString(16).toUpperCase();
  console.log(primaryPlayer);
})

addOverlayListener('LogLine', (data: any) => {
  if (data.line[0] !== LogType.ACTInfo) {
    //console.log(Buff(data.line));
    console.log(data.line);

    LogSubject.next({
      type: data.line[0],
      content: data.line
    });
  }
});

startOverlayEvents();

export { LogSubject, primaryPlayer}
