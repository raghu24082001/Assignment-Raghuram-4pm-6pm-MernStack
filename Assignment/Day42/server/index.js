import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import authRouter from "./router/authRouter.js"
import database from "./config/db.js"

dotenv.config()

const  app = express()

database()

app.use(cors())

app.use(express.json())

app.use("/api/auth",authRouter)


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/auth
