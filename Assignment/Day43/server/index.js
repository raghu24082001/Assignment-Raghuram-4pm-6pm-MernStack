import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import database from "./config/db.js"
import routerdata from "./router/authRouter.js"

dotenv.config()

const app = express()

database()

app.use(cors())

app.use(express.json())

app.use("/api/user",routerdata)



const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/user

