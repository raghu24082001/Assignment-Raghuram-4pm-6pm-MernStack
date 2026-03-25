import React from 'react'
import { useContext } from 'react'
import ButtonContext from './context/ButtonContext'


const About = () => {

  const {count,handleChange} = useContext(ButtonContext)
    
  return (
    <>
     <div className='bg-blue-300 p-5 text-center flex flex-col items-center gap-2 '>
        <div>{count}</div>
        <button onClick={handleChange} className='bg-black w-50 text-s text-white p-1 rounded'>Change</button>
     </div>
    </>
  )
}

export default About