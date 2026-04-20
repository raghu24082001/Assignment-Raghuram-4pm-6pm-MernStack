import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import gaetData from "./config/db.js"
import dataroute from "./route/authRoute.js"

dotenv.config()

const PORT = process.env.PORT || 3000

gaetData()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/user",dataroute)

app.listen(PORT,()=>{
    console.log(`running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/user