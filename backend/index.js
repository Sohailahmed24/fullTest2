
const express=require("express");


const app=express()

app.get("/",(req,res)=>{
       res.send("Test2 server is ready")
})


const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})