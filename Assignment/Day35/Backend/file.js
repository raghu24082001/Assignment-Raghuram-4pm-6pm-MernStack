import fs from 'fs'

 export const createfile= ()=>{
    
    fs.writeFile('data.txt', 'first data',(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log('Succefully created a file')
    })
}

 export const readnewfile= ()=>{
    
    fs.readFile('data.txt', "utf8",(err,data)=>{
        if(err){
            console.log(err)
            return
        }

        console.log(data)
    })
}

 export const newappendfile= ()=>{
    
    fs.appendFile('data.txt', 'first data',(err)=>{
        if(err){
            console.log(err)
            return
        }

        console.log('added a file')
    })
}

 export const removefile= ()=>{
    
    fs.unlink('data.txt',()=>{
        

        console.log('removed a file')
    })
}
