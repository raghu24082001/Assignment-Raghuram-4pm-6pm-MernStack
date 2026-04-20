import express from 'express'
import {movieCreate, moviegetbyParams } from '../controller/authcontrol.js'

const route = express.Router()

//http://localhost:5000/api/user/getdatafrombody

route.post('/getdatafrombody',movieCreate)

route.get('/getdatabyparams/:usedid',moviegetbyParams)

//http://localhost:5000/api/user/getdatabyparams/

export default route