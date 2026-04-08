import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = http.createServer((req,res)=>{
      res.write("welcome")
      res.end()
})

app.listen(PORT,()=>{
    console.log(`port number : ${PORT}`)
})