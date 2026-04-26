import express from "express"
import {registerdata,logindata} from "../controller/authControl.js"

const route = express.Router()

route.post('/register',registerdata)

//http://localhost:5000/api/user/register

route.post('/login',logindata)

//http://localhost:5000/api/user/login


export default route