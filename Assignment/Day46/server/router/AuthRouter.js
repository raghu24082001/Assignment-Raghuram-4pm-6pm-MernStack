import express from "express"
import { createdata } from "../controller/Authcontrol.js"
import { middleware } from "../middleware/Authmiddleware.js"


const router = express.Router()

router.post('/create',middleware,createdata)

//http://localhost:5000/api/user/create


export default router