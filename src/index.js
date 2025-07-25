// require('dotenv').config({path:'./env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({path:'./env'})
connectDB().then(
    app.listen(`${process.env.PORT}`,()=>{
      console.log(`App is runnning on : ${process.env.PORT}`);
    })
).catch((error)=>{
    console.log('error:',error);
    throw error;
});
/*
import express from "express";
import { DB_NAME } from "./constants";
const app=express();
(async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log(error);
        throw error;
    })
    app.listen(`${process.env.PORT}`,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
} catch (error) {
   console.error('error',error); 
   throw error;
}
})()
*/