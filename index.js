const express = require("express");
const database = require('./src/database/connection')
const router = require("./src/routes/routes")

const app = express()
app.use(express.json())
app.use(router)

app.listen(4000,()=>{
    console.log("Aplicacação rodando em 4000")
})
app.get('/',(request,response)=>{
    response.send("Hello world")
 })