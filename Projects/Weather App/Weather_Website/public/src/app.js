const express =require('express');
const path=require('path')
const app=express();
const port=process.env.PORT || 4000;

const st_path=path.join(__dirname,"../public")

app.use(express.static(st_path));

app.get("/",(req,res)=>{
    res.send("Welcome to Atharva Channel");
    
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
    
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page");
    
})
app.get("*",(req,res)=>{
    res.send("Error 404");
    
})

app.listen(4000,()=>{
    console.log(`Listening to ${port} port`);
})
    
;