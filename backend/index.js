import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

// Webサーバを立てる
app.listen(PORT, () => {
  console.log("サーバー起動");
  console.log(PORT);
});
// https://localhost:3000 にアクセスがあったら ssr() を返す
app.get("/", (_, res) => {
  //   res.send(ssr());
  res.json({ message: "Hello World!" });
  console.log("ee");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello W!" });
});
