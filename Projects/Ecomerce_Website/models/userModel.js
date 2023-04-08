// A userModel in a MERN project is a schema or model that defines the structure of a user document in the MongoDB database. It is usually created using a library like Mongoose and contains properties that define the data stored in a user document.

//  The userModel also defines various methods and middleware that can be used to interact with the database, such as methods for creating, updating, and deleting user documents, as well as middleware for handling validation and authentication.

// Overall, the userModel is important in defining the structure and behavior of the user data in the application's database.

import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    }
},{timestamps:true}
)

export default mongoose.model('user',userSchema);
