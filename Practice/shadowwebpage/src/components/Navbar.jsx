import React from 'react'

import sathya from '../assets/sathya.webp'
import { TfiMobile } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoIosPerson } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <div class='px-10 text-black font-medium'>
        <div class=' p-2  text-xs flex justify-between items-center'>
        <div ><img src={sathya} alt="" width={70}/></div>

        <div class=' flex gap-6 pr-5'> 
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <NavLink to='/Contact' className={({isActive})=>isActive?'bg-red-200 rounded':'' }> Contact</NavLink>
            <NavLink to='/Help' className={({isActive})=>isActive?'bg-amber-200 rounded':'' }> Help</NavLink>
            
        </div>

        <div class='flex gap-5 text-sm'> 
            <div class='flex items-center'><TfiMobile /><div>+91 9359747979</div></div>
            <div><IoLocationOutline /></div>
            <div><IoIosPerson /></div>
            <div><TfiShoppingCart /></div>
        </div>
        <div>
          <Link to='/Login'>Login</Link>
        </div>
     </div>
     </div>

    </>
  )
}

export default Navbar