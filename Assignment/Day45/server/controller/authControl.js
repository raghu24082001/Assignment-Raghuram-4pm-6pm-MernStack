import newmodaldata from "../modal/authModal.js"
import bcrypt from "bcrypt"


export const registerdata =  async (req,res) =>{
    try {
        
        const {username,useremail,userpassword} = req.body

        const findemail = await newmodaldata.findOne({useremail})

        if(findemail){
            res.status(400).json({msg:"email already exit"})
            return
        }

        const hashpassword = await bcrypt.hash(userpassword,10)

        const datas = await newmodaldata.create({username,useremail,userpassword:hashpassword})

        res.status(201).json({msg:"register sucessfully",data:datas})

    } catch (error) {
        console.log(error)
        res.status(400).json({msg:"something error"})
    }
}

export const logindata =  async (req,res) =>{
    try {
        
        const {useremail,userpassword} = req.body

        const findemail = await newmodaldata.findOne({useremail})

       if(!findemail){
             res.status(400).json({msg:"enter correct email"})
             return
       }

      const isMatch = await bcrypt.compare(userpassword, findemail.userpassword)

        if (!isMatch) {
            return res.status(400).json({ msg: "enter correct password" })
        }

        res.status(201).json({msg:"login sucessfully"})

    } catch (error) {
        console.log(error)
        res.status(400).json({msg:"something error occured"})
    }
}