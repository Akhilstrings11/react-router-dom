import React from 'react'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Components/Styling.css'
import NavBar from './Components/NavBar'
import PageNotFound from './Components/PageNotFound'
import UsersPage from './Components/UsersPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = { <HomePage />} />
        <Route path='/about' element = { <AboutPage />} />
        <Route path='/contact' element = { <ContactPage />} />
        <Route path='*' element = { <PageNotFound /> } />
        <Route path='/userPage' element = { <UsersPage /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
