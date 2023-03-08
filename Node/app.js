//  JSON is array of an object
const http = require('http');
const fs=require('fs');

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./userapi.json","utf-8");
    const objData=JSON.parse(data);
  
  if(req.url==='/'){
    res.end("Welcome Home My Boy");
  }else if (req.url==='/about'){
    res.end("This is about page");
  }else if(req.url==='/contacts'){
    res.end("These are our contacts");
  }
    else if(req.url==='/userapi'){
    
    console.log(data);
    res.end("H");
    
  }else res.end("Error 404!");


  
})

server.listen(5000)