import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import App from './App'
import HomePage from './components/HomePage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
