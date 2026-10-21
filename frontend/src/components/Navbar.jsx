import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="navbarContainer">

      <div className="logo">DevPulse</div>
      <nav className="navbar">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/compare" >Compare</NavLink>
        <NavLink to="/about" >About</NavLink>
      </nav>
    </div>
  )
}
