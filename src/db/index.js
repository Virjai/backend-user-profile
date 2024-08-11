import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB is connected at host: ${connectionInstance.connections[0].host}`);
        
    } catch (error) {
        console.error("ERROR: ", error);
        process.exit(1)
    }
}


export { connectDB }