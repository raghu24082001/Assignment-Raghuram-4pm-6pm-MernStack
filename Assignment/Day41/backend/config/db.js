import mongoose from "mongoose";

const gaetData = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.mongo_URI)
        console.log(conn.connection.host)
    } catch (error) {
        
    }
}

export default gaetData