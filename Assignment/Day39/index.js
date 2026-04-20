import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoute from "./router/authRoute.js"

dotenv.config()



const PORT = process.env.PORT || 3000

connectDB()

const app= express()

app.use(cors())

app.use(express.json())

app.use("/api/user",userRoute)

app.listen(PORT,()=>{
      console.log(`server running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/user