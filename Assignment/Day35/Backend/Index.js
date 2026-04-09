import dotenv from 'dotenv'
import http from 'http'
import {createfile,readnewfile,newappendfile,removefile} from './file.js'
import { showosdata } from './os.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const HOST = http.createServer((req,res)=>{
    res.write("welcome")
    res.end()
})


HOST.listen(PORT,()=>{
    console.log(`http://Localhost:${PORT}`)
})

//  createfile()

// readnewfile() 

// newappendfile()

// removefile()

// showosdata()