import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {

    const navigate = useNavigate()
 
    const [storedata,setStoreData] = useState({
        useremail:'',
        userpassword:''
    })
    
     
    const handlesubmit = async (e)=>{
        e.preventDefault()
        try {
             const senddata = await axios.post('http://localhost:5000/api/user/login',storedata)
             console.log(senddata.data.token)

             localStorage.setItem('jwttoken',senddata.data.token)
             setStoreData(
                {
               useremail:'',
               userpassword:''
                }
             )

             alert('sucefully login')
             navigate("/dashboard")
        } catch (error) {
             console.log(error.msg)
        }
    }

    const handlechange= (e)=>{
        setStoreData({...storedata,[e.target.name]:e.target.value})
    }

  return (
    <>
    <form action="" onSubmit={handlesubmit}>
        <input type="email" value={storedata.useremail} name='useremail' placeholder='enter a email' onChange={handlechange}/>
        <input type="password" value={storedata.userpassword} name='userpassword' placeholder='enter a email' onChange={handlechange}/>
        <input type="submit" value={"submit"}/>
    </form>
    </>
  )
}

export default Login