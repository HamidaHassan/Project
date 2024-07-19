/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import MainLayout from './layout/MainLayout'
import Register from './Component/Register'
import Famersinformation from './Component/Famersinformation'
import AddFamer from './Component/add Famer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='register'element={<Register/>}/>
      <Route path='farmersinformation' element={<Famersinformation/>}/>
      <Route path='/Dashboard'element={<MainLayout/>}>
      <Route path='add famer' element={<AddFamer/>}/>
     
      
      </Route>


     
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
