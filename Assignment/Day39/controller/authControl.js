 import usermodel from "../modal/authModal.js"
 
 export const createData = async (req,res)=>{
    
    try {
         const {usedId,username,mobilenumber} = req.body
         const create = await usermodel.create({usedId,username,mobilenumber})
         res.status(201).json({msg:'sucessfully added'})
    } catch (error) {
        
    }
}

