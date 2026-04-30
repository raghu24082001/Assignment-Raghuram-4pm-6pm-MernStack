import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import AuthRouter from "./router/AuthRouter.js"
import connectdata from "./config/db.js"

dotenv.config()

const app = express()

connectdata()

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use("/api/user",AuthRouter)

app.listen(PORT, ()=>{
    console.log(`sever running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/user