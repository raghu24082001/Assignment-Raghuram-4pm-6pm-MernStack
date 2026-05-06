import jwt from "jsonwebtoken"

export const checktoken = (req,res,next)=>{
   
     try {

        const token = req.headers.authorization

        console.log(token)

        if(!token){
            return res.status(401).json({msg:"Invalid Token"})
        }

        const checkjwt = jwt.verify(token,process.env.JWT_SECURE)

        req.users = checkjwt
        
        next()
        
     } catch (error) {
        
         console.log('error',error);
        res.status(404).json({msg:"Your Token is broken kindly login again"})

     }


}