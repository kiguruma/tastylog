import log4js from "log4js";
import { config } from "../../config/log4js.config.js";

log4js.configure(config);

export const loggerConsole = log4js.getLogger();
