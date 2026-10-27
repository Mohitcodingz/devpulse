import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'
export default function App() {
  return (
    <div>
<<<<<<< HEAD
      <h1>Hello, World!</h1>
=======
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer/>
>>>>>>> 6f1126270f21224a17b36dcd2a4312a50caf934d
    </div>
  )
}