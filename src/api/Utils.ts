interface ParseResult{
  time: string,
  type: string,
  content: string[]
}
//解析LogLine
function ParseLogLine(text:string) {
  //logLine fotmat:"[10:32:31.916] FB:TCPNetworkMonitor: Starting RawSocket listener on [127.0.0.1]=> [127.0.0.1]."
  const time = text.slice(0, 14);
  const content = text.slice(15,-1).split(':');
  return { time, type: content[0], content } as ParseResult;
}

export { ParseResult,ParseLogLine}