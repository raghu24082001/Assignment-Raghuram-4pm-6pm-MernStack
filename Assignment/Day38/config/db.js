import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.mongo_URL)
        console.log(`running on ${conn.connection.host}`)
        process.exit(0)
    
    }catch(error){
      
    }
}

export default connectDB