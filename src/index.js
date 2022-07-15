import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import App from './App'
import HomePage from './components/HomePage'
import PortfolioContainer from './components/PortfolioContainer'
import PortfolioPage from './components/PortfolioPage'
import PortfolioDetail from './components/PortfolioDetail'
import ContactPage from './components/ContactPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='portfolio' element={<PortfolioContainer />}>
            <Route index element={<PortfolioPage />} />
            <Route path=':projectName' element={<PortfolioDetail />} />
          </Route>
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
