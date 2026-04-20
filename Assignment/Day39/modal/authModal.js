import mongoose, { Schema } from "mongoose";

const userScheme = new mongoose.Schema({

    usedId:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    mobilenumber:{
         type:Number,
        required:true,
        trim:true
    },
    createdby:{
        type:String,
        default:"Active"
    },
    updatedby:{
        type:String,
        default:"Active"
    }


},{timestamps:true})


const usermodel = mongoose.model("userdata",userScheme)

export default usermodel