import express from "express"
import { createdata, getdata, getdatabyID } from "../controller/authControl.js"

const routes = express()

routes.post('/create',createdata)

//http://localhost:5000/api/user/create

routes.get('/getdata',getdata)

//http://localhost:5000/api/user/getdata

routes.get('/getdatabyid/:userid',getdatabyID)

//http://localhost:5000/api/user/getdatabyid/:userid

export default routes