import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authroute from './routes/authRoute.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use("/app/auth" , authroute)

app.listen(PORT,()=>{
    console.log(`Sucessfully run at http://localhost:${PORT}`)
})  

//http://localhost:5000/app/auth

// A server is a system (software or hardware) that provides data or services to clients.
// In Express, the server listens for requests (from browsers or apps) and sends responses.

// CORS (Cross-Origin Resource Sharing) is a browser security feature.
// It controls whether a web page from one domain can access resources from another domain.
// In Express, cors middleware is used to allow or restrict these requests.

// express.json() is a middleware function.
// It parses incoming JSON data from client requests and stores it in req.body.
// Without it, you cannot directly access JSON data sent by the client.