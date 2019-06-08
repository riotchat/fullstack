import LoggerInternal from 'log74';

function Handle(string: string) {
  // TODO: push to a file or something
}

const Logger = new LoggerInternal(Handle);
export default Logger;