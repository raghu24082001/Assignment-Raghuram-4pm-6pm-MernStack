import React from 'react'
import { useNavigate } from 'react-router-dom'

const Help = () => {

  const Navigate =useNavigate()
      
  function GotoNavigate(){
        const prompts = prompt('enter a number')
        if(prompts == 2){
          Navigate('/Usenavi')
        }else{
          Navigate('/')
        }
  }

  return (
    <>
     <div className='bg-yellow-300 h-50 flex items-center justify-center'>
        <button className='bg-black text-white rounded p-1' onClick={GotoNavigate}>GoNavigate</button>
    </div>
    </>
  )
}

export default Help