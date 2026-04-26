import React, { useState } from 'react'
import axios from "axios"

const Register = () => {

    const [data,setData] = useState({
        username:'',
        useremail:'',
        userpassword:''
    })

    const handlechange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e)=>{
       e.preventDefault()
       try {

        const conn = await axios.post('http://localhost:5000/api/user/register',data)

        setData({
        username:'',
        useremail:'',
        userpassword:''
    })

    
          
       } catch (error) {
          console.log(error.msg)
       }

    }


  return (
    <>
       <form action="" onSubmit={handlesubmit} >
             <input type="text" name='username' value={data.username} onChange={handlechange} />
             <input type="email" name='useremail' value={data.useremail} onChange={handlechange} />
             <input type="password" name='userpassword' value={data.userpassword} onChange={handlechange} />
             <input type="submit"  value={"submit"}/>
       </form>
    </>
  )
}

export default Register