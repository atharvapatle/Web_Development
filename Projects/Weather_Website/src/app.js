const express =require('express');
const app=express();
const port=process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("Welcome to Atharva Channel");
    
})
app.get("*",(req,res)=>{
    res.send("Error 404");
    
})

app.listen(4000,()=>{
    console.log(`Listening to ${port} port`);
})
    
;