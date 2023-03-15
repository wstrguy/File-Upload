const logger = require("pino");

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
        
    },
    // include: "level,time",
  },
});

module.exports = log;