import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Together from './components/Together'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />

      <Outlet />

      <Together />
      <Footer />
    </div>
  )
}

export default App
