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

// Common model-based methods:

// Model.create()  -> create new document
// Model.find()    -> get multiple documents
// Model.findOne() -> get a single document
// Model.findById() -> get document by ID

// Model.updateOne()  -> update a single document
// Model.updateMany() -> update multiple documents

// Model.deleteOne()  -> delete a single document
// Model.deleteMany() -> delete multiple documents
// Model.findByIdAndDelete() -> delete by ID

// Model.findByIdAndUpdate() -> update by ID