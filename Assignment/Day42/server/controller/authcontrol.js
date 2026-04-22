import newmodaldata from "../modal/authmodal.js"
import bcrypt from "bcrypt"

export const createdata =  async (req,res)=>{
   try {
     
    const {name,email,password} = req.body

    const cryptpassword = await bcrypt.hash(password,10)

    const createdatabase = await newmodaldata.create({name,email,password:cryptpassword})

    res.status(200).json({msg:'added sucessful'})

   } catch (error) {
       
     console.log("error",error)
     res.status(404).json({msg:'something error'})
     process.exit(0)
      
   }
}