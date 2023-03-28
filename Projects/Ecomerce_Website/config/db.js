import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv"

const connectDB=async ()=>{
    try{
         const conn=await mongoose.connect(process.env.MONGO_URL);
         console.log(`Connecting to Database ${conn.connection.host}`.bgYellow.red.bold);
    } catch(error){
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
}

export default connectDB;
