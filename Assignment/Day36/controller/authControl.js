export const authData = (req,res)=>{
   console.log(req)
   
   const {react} = req.body

   if(react ==='welcome'){
      res.status(200).json({answer:'received'})
   }

}


export const paramsData = (req,res)=>{
   console.log(req)
   
}

export const queryData = (req,res)=>{
   console.log(req)
   
}