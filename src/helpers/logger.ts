import { createLogger, transports, format } from 'winston';
const { combine, printf, timestamp, colorize } = format;

function logFormat() {
  return printf((info) => {
    return `${info.timestamp} ${info.level}: ${info.stack || info.message}`;
  });
}

export const logger = createLogger({
    format: combine(colorize(), timestamp(), logFormat()),
    transports: [new transports.Console()],
});

