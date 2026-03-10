import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";


const Navbar2 = () => {
  return (
    <>
     <div class=' bg-red-500 px-10 text-xs'>
        <div class='bg-red-500 p-2 text-white flex gap-10'>
        <div class='flex items-center gap-1'><IoMdMenu /> <div>Menu</div></div>
        <div class='w-150 rounded bg-white text-black px-1 py-2 flex justify-between'>
            <div class='flex'>
                <div class='flex gap-20'> All Categories<select name="" id=""></select></div><span>|</span>
            </div>
            <div class='pr-2 text-base'><IoSearchOutline /></div>
        </div>
        
     </div>
     
     </div>
    </>
  )
}

export default Navbar2