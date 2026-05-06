import express from "express"
import { registerdata,logindata, getDashBoardInfo } from "../controller/Authcontrol.js"
import { checktoken } from "../middleware/Authmiddleware.js"



const router = express.Router()

router.post('/login',logindata)

//http://localhost:5000/api/user/login

router.post('/register',registerdata)

//http://localhost:5000/api/user/register

router.get('/dashboard',checktoken,getDashBoardInfo)

//http://localhost:5000/api/user/dashboard



export default router