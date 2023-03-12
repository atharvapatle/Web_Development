// In this example, we create an Express app and define a route for the GET method. The route is defined using the app.get() method, which takes two arguments: the route path (in this case, /) and a callback function that will be executed when a client makes a request to that path.

// The callback function takes two arguments: req (short for request) and res (short for response). The req object contains information about the client's request, while the res object is used to send a response back to the client.

// In this example, the callback function simply sends the string "Hello World!" back to the client using the res.send() method.

// Finally, we start the server using the app.listen() method, which listens for incoming requests on port 3000. When a client makes a request to the root path, the server will respond with "Hello World!".

const path=require('path');
const express=require('express');
const app=express();

const staticPath=path.join(__dirname,'../public');
// to use html,css files // for static content
// app.use(express.static(staticPath));
//to set view engine
app.set('view engine',"hbs");

//dynamic coontent with hbs
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/about",(req,res)=>{
    res.send("Welcome to about page!");
});

app.listen(3000,()=>{
    console.log("Listening at port 3000! ");
})