import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
//rest object
//the functionality of "express" will be transferred to the "app"
const app=express();

//connect MongoDB
connectDB();

///middlewares
app.use(morgan("dev"));

//routes
app.use('./api/v1,auth',authRoutes);

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