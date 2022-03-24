import path from "path";
// const ROG_ROOT_DIR =
//   process.env.ROG_ROOT_DIR || path.join(__dirname, "../logs");
const dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(dirname);

export const config = {
  appenders: {
    ConsoleLogAppender: {
      type: "console",
    },
    ApplicationLogAppender: {
      type: "datefile",
      filename: path.join,
    },
  },
  categories: {
    default: {
      appenders: ["ConsoleLogAppender"],
      level: "ALL",
    },
  },
};
