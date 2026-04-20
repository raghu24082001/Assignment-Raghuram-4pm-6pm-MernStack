import express from"express"
import {createData} from "../controller/authControl.js"

const routes = express.Router()

//http://localhost:5000/api/user/create

routes.post("/create",createData)

export default routes