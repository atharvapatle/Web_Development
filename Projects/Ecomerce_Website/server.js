import express from "express"
import colors from "colors"
import dotenv from "dotenv"
dotenv.config();
//rest object
//the functionality of "express" will be transferred to the "app"
const app=express();

app.get('/' ,(req,res)=>{
res.send("Hello! Atharav is here");
res.end();
})

app.get('/contact' ,(req,res)=>{
res.send("My number is 9637224335");
res.end();
})

const PORT=process.env.PORT || 4500;
app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`);
});