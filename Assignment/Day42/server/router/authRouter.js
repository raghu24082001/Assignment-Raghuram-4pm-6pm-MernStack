import express from "express"
import { createdata } from "../controller/authcontrol.js"

const route = express.Router()


route.post("/authcreate",createdata)

//http://localhost:5000/api/auth/authcreate


export default route