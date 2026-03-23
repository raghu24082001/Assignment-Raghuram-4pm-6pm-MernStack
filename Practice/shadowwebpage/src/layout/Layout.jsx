import React from 'react'


import { Outlet } from 'react-router-dom'
import Corrousel from '../components/Corrousel'

const Layout = () => {
  return (
    <>
    
    
    <Corrousel/>
    <Outlet/>
    </>
  )
}

export default Layout