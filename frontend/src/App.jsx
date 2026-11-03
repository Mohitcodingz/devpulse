import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
export default function App() {
  const [homePageValue, setHomePage] = useState('')
  useEffect(() => {
    const getBackend = async () => {
      const response = await fetch('http://localhost:5000/');
      const data = await response.text();
      setHomePage(data);
      console.log('working')
    }
    getBackend()
  }, [])
  return (
    <div>
      <Navbar /> 
         <p>Backend says: {homePageValue}</p>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}