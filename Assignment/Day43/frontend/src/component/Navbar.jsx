import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div className='bg-red-700 flex gap-2'>
        <Link to='/'>Login</Link>
        <Link to='/register'>Register</Link>
       </div>
    </>
  )
}

export default Navbar