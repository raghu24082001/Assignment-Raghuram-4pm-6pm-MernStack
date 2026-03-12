import React from 'react'
import Banners from '../assets/Banner.webp'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Help from './Help'
import Usenavigator from './usenavigator'
import Login from './Login'
import Layout from '../layout/Layout'


const Banner = () => {
  return (
    <>
     <Routes >
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Usenavi' element={<Usenavigator/>}/>
        </Route>
        <Route path='/Login' element={<Login/>}/>
     </Routes>
    
    </>
  )
}

export default Banner