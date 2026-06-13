import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () =>{
    try{
         const conn = await mongoose.connect(process.env.MONGO_URL)
         console.log(`MongoDB connected: ${conn.connection.host} `)
    }
    catch(error){
       console.log(error)
       process.exit(1)
    }
}