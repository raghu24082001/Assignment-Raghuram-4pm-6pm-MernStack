import newmodaldata from "../modal/userModal.js"


export const createdata = async (req,res)=>{
     try {
         const {usedId,username,mobilenumber} = req.body

         const datacreate = await newmodaldata.create({usedId,username,mobilenumber})

         res.status(201)
     } catch (error) {
          res.status(401).json({ error:"something is wrong"})
     }
}

export const getdata = async (req,res)=>{
     try {

         const datacreate = await newmodaldata.find()

         res.status(201).json(datacreate)
     } catch (error) {
          res.status(401).json({ error:"something is wrong"})
     }
}

export const getdatabyID = async (req,res)=>{
     try {
        console.log(req.params)
        const {userid} = req.params

        console.log(userid)

         const datacreate = await newmodaldata.findById(userid)

         console.log(datacreate)

         res.status(201).json({datacreate})
     } catch (error) {
          res.status(401).json({ error:"something is wrong"})
          console.log(error)
     }
}

