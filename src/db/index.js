import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";
const app=express();
const connectDB=async()=>{
    try {
       const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) ;
       console.log(`connection succesful and DB host : ${connectionInstance.connection.host}`);
    } catch (error) {
      console.log(`error while connecting db : ${error}`);
      process.exit(1);   
    }
}
export default connectDB;