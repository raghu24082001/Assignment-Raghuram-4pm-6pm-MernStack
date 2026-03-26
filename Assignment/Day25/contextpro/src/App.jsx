import React, { useContext } from 'react'

import Home from './Components/pages/Home'
import About from './Components/pages/About'
import ButtonContext from './context/ButtonContext'


const App = () => {

 const {theme,SetTheme,changeTheme} = useContext(ButtonContext)
  return (
    <>
     <button className='bg-black text-white p-1 rounded' onClick={changeTheme}> {theme ? 'Light': 'Dark'} </button>
     <br />
     <br />
     <Home/>
     <About/>
    </>
  )
}

export default App