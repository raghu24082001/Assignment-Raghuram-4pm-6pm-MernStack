import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [data,setData] = useState({
        useremail:'',
        userpassword:''
    })

    const Navigate = useNavigate()

    const handlechange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e)=>{
       e.preventDefault()
       try {

        const conn = await axios.post('http://localhost:5000/api/user/login',data)

        setData({
    
        useremail:'',
        userpassword:''
    })
    Navigate('/dashboard')

          
       } catch (error) {
          console.log(error.response)

       }

    }


  return (
    <>
       <form action="" onSubmit={handlesubmit} >
             <input type="email" name='useremail' value={data.useremail} onChange={handlechange} />
             <input type="password" name='userpassword' value={data.userpassword} onChange={handlechange} />
             <input type="submit"  value={"submit"}/>
       </form>
    </>
  )
}

export default Login