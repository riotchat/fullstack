import LoggerInternal, { LogLevel } from 'log74';
import { resolve } from 'path';
import { exists, mkdir, WriteStream, createWriteStream } from 'fs';
import { promisify } from 'util';

import * as config from '../config';

const OUTPUT = resolve('logs');

var buffer: string[] = [],
	writeStream: WriteStream;

async function createHandle() {
  let shouldCreate = !await promisify(exists)(OUTPUT);
  if (shouldCreate) {
    await promisify(mkdir)(OUTPUT);
  }
  
  let fn = resolve(OUTPUT, `log-${+ new Date()}.txt`);
  writeStream = createWriteStream(fn, {flags: 'a'});
  
  while (buffer.length > 0) {
	Handle(buffer.shift());
  }
}

function Handle(string: string) {
  if (writeStream) {
    writeStream.write(string + '\n');
  } else {
    buffer.push(string);
  }
}

const Logger = new LoggerInternal(config.LOG_LEVEL, Handle);
export default Logger;

createHandle();

process.on('SIGTERM', () => {
  if (writeStream) {
    writeStream.close();
  }
});