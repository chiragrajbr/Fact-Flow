const express=require("express")
const route=require("../Server/Config/router")
const dbconnection=require("../Server/Config/dbconnection")
const cors = require("cors")
const bodyParser = require("body-parser")
const port=3003
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

dbconnection()
app.use(route)
app.listen(port,()=>{
    console.log(`server is running in the port ${port}`)
})
