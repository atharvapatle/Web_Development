import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// (1) The registerController function is defined as an asynchronous function with two parameters: req and res. req contains the request data sent by the client, and res is used to send a response back to the client.
export const registerController = async (req, res) => {
  try {
    // The function extracts the required fields from the req.body object, which contains the form data submitted by the client.
    const { name, email, password, phone, address, answer } = req.body;
    // A series of validation checks are performed to ensure that all the required fields are present in the req.body object. If any required field is missing, the function sends an error message to the client and terminates execution.
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }
    //check user
    // The function checks whether a user with the same email already exists in the database by querying the userModel using the findOne method. If a user is found, the function sends a response indicating that the registration was unsuccessful
    // If no user is found with the same email, the function creates a new user object using the userModel schema and saves it to the database.
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    // The code is receiving a request from the user with information about the new user they want to register. This information includes the user's name, email, phone number, address, password, and an answer to a security question.

     //register user
    //  The password received in the request is then hashed using a function called "hashPassword".
     const hashedPassword = await hashPassword(password);
     //save
    //  The hashed password and other user information are then used to create a new user object using a user model. A user model is a blueprint that defines the structure of a user object in the application's database. In this case, the user model is created using the "new userModel" statement.

// The new user object is then saved to the database using the "save" method. This method is asynchronous, meaning that it returns a promise that resolves when the user object has been successfully saved to the database.
     const user = await new userModel({
       name,
       email,
       phone,
       address,
       password: hashedPassword,
       answer,
     }).save();
    //  If the registration is successful, the response will have a status code of 201, indicating that a new resource has been created, and the response body will be an object with the following properties:

    //  success: a boolean value set to true to indicate that the registration was successful.
    //  message: a string message that informs the user that the registration was successful.
    //  user: an object that contains the details of the newly registered user.
 
//  The res.status(201) sets the HTTP status code of the response to 201, indicating a successful registration. The res.send() method sends the response to the client with the specified response body.
     res.status(201).send({
       success: true,
       message: "User Register Successfully",
       user,
     });

    //  If there is an error during the registration process, the response will have a status code of 500, indicating an internal server error.

    // The try-catch block is used to handle any errors that may occur during the registration process. If an error occurs, it will be caught in the catch block, and the response will be sent with the error details. The console.log(error) statement logs the error to the server console for debugging purposes.
   } catch (error) {
     console.log(error);
     res.status(500).send({
       success: false,
       message: "Errro in Registeration",
       error,
     });
   }
 };

 //POST LOGIN
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      // JWT is used to securely transmit the user's identity between the client and the server, and to authorize the user to perform certain actions in the application.
      //token
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  
  
