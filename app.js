require('dotenv').config();

const PORT = process.env.PORT
console.log(process.env)

const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.end("hello world")
})

app.listen(PORT,()=>{
    console.log("サーバー起動")
    console.log(PORT)
})