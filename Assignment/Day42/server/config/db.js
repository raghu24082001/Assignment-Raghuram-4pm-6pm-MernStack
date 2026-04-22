import mongoose from "mongoose";

const database = async ()=>{
   try {

    const connection = await mongoose.connect(process.env.mongo_URI)
    console.log(connection.connection.host)
    
   } catch (error) {
      console.log("error",error)
   }
}

export default database