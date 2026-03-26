import React, { useState } from 'react'
import ButtonContext from '../context/ButtonContext'

const ButtonProvider = ({children}) => {
  
  const [count,SetCount] = useState(0)

  const [theme,SetTheme] = useState(false)

  const [lan,SetLan] = useState('Hello')

  const handleChange =()=>(
    SetCount((prev)=>prev+1)
  )

  const changeTheme =()=>(
    SetTheme((prev)=>!prev)
  )

  const changeLan = ()=>{
    if(lan === 'Hello'){
      SetLan('vanakkam')
    }
    else{
      SetLan('Hello')
    }
  }

  return (
    <ButtonContext.Provider value={{count,handleChange,theme,SetTheme,changeTheme,lan,changeLan}}>
       {children}
    </ButtonContext.Provider>
  )
}

export default ButtonProvider