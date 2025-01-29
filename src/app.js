const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello  Sakil");
})
app.get("/test",(req,res)=>{
    res.send("Hello test");
})

app.listen(7777,()=>{
    console.log("Server  is succesfully listening port 7777 ");
})

