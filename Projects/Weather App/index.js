const http=require('http');
const fs=require('fs');
var requests=require("requests");

const homeFile=fs.readFileSync("home.html","utf-8");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        
    }
})