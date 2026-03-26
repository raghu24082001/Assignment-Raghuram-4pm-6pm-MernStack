import React, { useContext } from 'react'
import ButtonContext from '../../context/ButtonContext'

const Home = () => {

   const {count,handleChange,theme} = useContext(ButtonContext)

  return (
    <>
     <div className={theme ? 'bg-red-800 p-5 text-center flex flex-col items-center gap-2 ' :'bg-red-300 p-5 text-center flex flex-col items-center gap-2 '}>
        <div>{count}</div>
        <button onClick={handleChange} className='bg-black w-50 text-s text-white p-1 rounded'>Change</button>
     </div>
    </>
  )
}

export default Home