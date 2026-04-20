import express from 'express'
import { cgetparams, controlbody } from '../controller/authcontrol.js'

const route = express.Router()

//http://localhost:5000/api/user/bodyuser

route.post('/bodyuser',controlbody)

route.get('/bodyparams/:userid',cgetparams)

//http://localhost:5000/api/user/bodyparams

export default route