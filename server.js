const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("My Backend API is Running 🚀");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});