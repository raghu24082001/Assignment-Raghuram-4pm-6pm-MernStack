import express from 'express'
import { controlbody } from '../controller/authcontrol.js'

const route = express.Router()

//http://localhost:5000/api/user/bodyuser

route.post('/bodyuser',controlbody)

export default route