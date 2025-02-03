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


app.patch("/user",async(req,res)=>{
    const userId=req.body.userId;
    const update=req.body;
    try{
        const user=await User.findByIdAndUpdate(userId,update);
        res.send("User updated successfully");
    }catch(err){
        res.status(400).send("Error in updating user");
    }
});


app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
    try{
        const user=await User.findByIdAndDelete(userId);
        res.send("User deleted successfully");
}catch(err){
    res.status(400).send("Error in deleting user");
}});

app.get("/feed",async(req,res)=>{
    try{
        const users=await User.find({});
        res.send(users);
    }catch(err){
        res.status(400).send("Error in fetching users");
}});

connectDB().then(()=>{
    console.log("Database is connected");
    app.listen(7777,()=>{
        console.log("Server  is succesfully listening port 7777 ");
    })
}).catch((err)=>{
    console.log("Database is not connected");
});



