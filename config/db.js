import mongoose from "mongoose";
import 'dotenv/config';

const connectionstring = process.env.MONGO_URL;



export const dbconnection = () =>{
    mongoose.connect(connectionstring).then(() => {
        console.log('database is connected');
    });
}