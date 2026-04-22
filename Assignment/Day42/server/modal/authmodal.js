import mongoose from "mongoose";

const modaldata = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
},{timestamps:true})

const newmodaldata = mongoose.model("wheelsdata",modaldata)

export default newmodaldata