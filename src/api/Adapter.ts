import { Subject } from "rxjs";
import { ParseLogLine, ParseResult } from "./Utils";
const testUrl = 'ws://127.0.0.1:10501/OnLogLineRead';
const LogSubject = new Subject<ParseResult>();
let ws: WebSocket;

function ConnectWs(url = testUrl) {
  try {
    ws = new WebSocket(url);

    ws.onmessage = message => {
      //pingpong
      if (message.data === '.') {
        ws.send('.');
      }
      else {
        const { type, msgtype, msg } = JSON.parse(message.data)
        if (type === 'broadcast' && msgtype === 'Chat') {
          const log = ParseLogLine(msg);
          if (log.type !== 'FB') {//bypass system info
            LogSubject.next(log);
          }
        }
      }
    }
  } catch (error) {
    console.warn(error);
    setTimeout(() => ConnectWs(url), 3000);
  }
}

ConnectWs(testUrl);

export {LogSubject}
