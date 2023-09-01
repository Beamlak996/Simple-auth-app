import mongoose from "mongoose";

export const connectMongoDB = async ()=>{
    try {
        const mongodb_uri = process.env.MONGODB_URI;
        if(typeof mongodb_uri !== 'undefined'){
            await mongoose.connect(mongodb_uri);
        } else{
            console.log("The MONGODB_URI environment variable is not defined.");
        }
    } catch (error) {
        console.log(error)
    }
}