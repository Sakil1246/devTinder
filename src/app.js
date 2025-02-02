const express=require("express");
const connectDB=require("./config/database");
const app=express();
const User=require("./model/user");
app.use(express.json());

app.post("/signup",async (req,res)=>{
    const user=new User(req.body);
    try{
        await user.save();
    res.send("User created successfully");
    }catch(err){
        res.status(400).send("Error in creating user");
    }
})

connectDB().then(()=>{
    console.log("Database is connected");
    app.listen(7777,()=>{
        console.log("Server  is succesfully listening port 7777 ");
    })
}).catch((err)=>{
    console.log("Database is not connected");
});



