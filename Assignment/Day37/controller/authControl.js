export const controlbody = (req,res)=>{
   console.log(req.body)
   res.status(200).json(req.body)
}

export const cgetparams = (req,res)=>{
   console.log(req.params)
   res.status(200).json(req.body)
}