import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [data,storeData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handlechange = (e)=>{
      storeData({...data,[e.target.name]:e.target.value})
  }

  const handlesubmit = async (e)=>{
      e.preventDefault()
        try {
          const senddata = await axios.post("http://localhost:5000/api/auth/authcreate",data)
        } catch (error) {
           console.log(error.response)
        }
  }
 

  return (
    <>
     <form action="" className='w-60 flex flex-col gap-1 align-center justify-center' onSubmit={handlesubmit}>
         <input type="text" name='name' value={data.name} onChange={handlechange}/> 
         <input type="text" name='email' value={data.email} onChange={handlechange}/>
         <input type="text" name='password' value={data.password} onChange={handlechange}/>
         <input type="submit" value={"submit"} />
         
     </form>
    </>
  )
}

export default App