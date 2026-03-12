import React from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import { Outlet } from 'react-router-dom'
import Corrousel from '../components/Corrousel'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <Corrousel/>
    <Outlet/>
    </>
  )
}

export default Layout