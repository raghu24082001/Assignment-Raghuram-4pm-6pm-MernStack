import mongoose from "mongoose";

const connectDB = async ()=>{

    try{
       const conn = await mongoose.connect(process.env.mongo_URI)
       console.log(`running in ${conn.connection.host}`)
    }catch(error){
        console.log("something error",error)
    }
}

export default connectDB