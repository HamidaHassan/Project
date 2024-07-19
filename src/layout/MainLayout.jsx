import React from 'react'
import Dashboard from '../Component/Dashboard'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const MainLayout = () => {
  return (
    <>
    <Dashboard/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
