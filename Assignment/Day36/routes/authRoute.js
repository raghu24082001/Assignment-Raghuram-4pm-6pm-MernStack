import express from 'express'
import { authData ,paramsData,queryData } from '../controller/authControl.js'

const route = express.Router()

route.post("/user",authData)

route.get("/paramsuser/:userid",paramsData)

route.get("/query",queryData)

export default route

//http://localhost:5000/app/auth/user

//http://localhost:5000/app/auth/paramsuser/:userid

//http://localhost:5000/app/auth/query