import React from 'react'
import Navbar from "../component/Navbar"
import { Routes, Route } from "react-router-dom"

import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default AppRoutes