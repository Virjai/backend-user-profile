import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config( {
    path: "./.env"
} )


connectDB()
.then( () => {
    app.listen(process.env.PORT || 6000, () => {
        console.log(`MongoDB server is running at port: ${process.env.PORT}`);
    })
} )
.catch((error) => {
    console.log(`MongoDB connection failed: `, error); 
} )