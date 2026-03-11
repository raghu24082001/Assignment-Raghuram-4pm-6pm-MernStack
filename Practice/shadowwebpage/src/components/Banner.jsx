import React from 'react'
import Banners from '../assets/Banner.webp'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Help from './Help'


const Banner = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Help' element={<Help/>}/>
     </Routes>
    
    </>
  )
}

export default Banner