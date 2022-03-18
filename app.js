// require('dotenv').config();

// const PORT = process.env.PORT
// console.log(process.env)

// const express = require("express")
// const app = express()

// app.get("/",(req,res)=>{
//     res.end("hello world")
// })

// app.listen(PORT,()=>{
//     console.log("サーバー起動")
//     console.log(PORT)
// })
// import express from 'express';
const express = require("express")
// import ssr from './src/ssr';
const ssr = require("./src/ssr")

const app = express();

// 3000番ポートでWebサーバを立てる
app.listen(PORT,()=>{
       console.log("サーバー起動")
       console.log(PORT)
      })
// https://localhost:3000 にアクセスがあったら ssr() を返す
app.get('/', (_, res) => {
  res.send(ssr());
  console.log("ee")
});