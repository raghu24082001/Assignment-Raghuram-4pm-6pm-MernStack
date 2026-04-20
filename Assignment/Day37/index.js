import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authrouter from './router/authRouter.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/user",authrouter)

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

//http://localhost:5000/api/user