import React, { useState } from 'react'
import ButtonContext from '../context/ButtonContext'

const ButtonProvider = ({children}) => {
  
  const [count,SetCount] = useState(0)

  const handleChange =()=>(
    SetCount((prev)=>prev+1)
  )

  return (
    <ButtonContext.Provider value={{count,handleChange}}>
       {children}
    </ButtonContext.Provider>
  )
}

export default ButtonProvider