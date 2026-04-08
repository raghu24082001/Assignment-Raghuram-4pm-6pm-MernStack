import React, { useEffect, useState } from 'react'

const App = () => {

 const [receive,setReceive] = useState({
     name:'',
     email:'',
 })


const [data,setData] = useState([])

const [update,setUpdate] = useState(false)

useEffect(()=>{
  const storedata = JSON.parse(localStorage.getItem('required'))
  setData(storedata)
},[])

const handleChange =(e)=>{
    setReceive({...receive,[e.target.name]:e.target.value})
}

const handlesubmit = (item)=>{
 item.preventDefault()
if(update){
     const updatedvalue = data.map((e)=>{
           if(e.id === receive.id){
              return receive
           }
           else{
             return e
           }})
  setData(updatedvalue)
 localStorage.setItem('required', JSON.stringify(updatedvalue))

 setUpdate(!update)
}else{
   const data1 = {...receive,id:Date.now()}
 const data2 = [...data,data1]
 setData(data2)
 localStorage.setItem('required', JSON.stringify(data2))

}
 setReceive({
     name:'',
     email:'',
 })
}

const handleedit = (item)=>{
setReceive(item)

 setUpdate(!update)

}

const handledelete = (item)=>{
     
    const filterdata = data.filter((e)=>e.id !== item.id)
    setData(filterdata)  
    localStorage.setItem('required', JSON.stringify(filterdata))

}


  return (
    <>
      <div className="flex gap-2 m-4">
        <input
          type="text"
          className="border rounded p-1"
          name="name"
          value={receive.name}
          onChange={handleChange}
          
        />

        <input
          type="email"
          name="email"
          className="border rounded p-1"
          value={receive.email}
          onChange={handleChange}
        />

        <button
          className="border rounded p-1 bg-blue-500 text-white"
          onClick={handlesubmit}
        >
          {update ? 'update' : 'Submit'}
        </button>
      </div>

      <div>
          {data.map((e,i)=>(
            <ul key={i}>
                <li >{e.name}</li>
                <li>{e.email}</li>
                <button 
                className="border rounded p-1 bg-blue-500 text-white"
                onClick={()=>handledelete(e)}>Delete</button>

                <button 
                className="border rounded p-1 bg-blue-500 text-white"
                onClick={()=>handleedit(e)}>Edit</button>
            </ul>
          ))}
      </div>


    </>
  )
}

export default App