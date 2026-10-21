import React from 'react'
import { NavLink } from 'react-router'
export default function Navbar() {
  return (
    <nav>
     <NavLink to="/">Home</NavLink>
      <NavLink to="/compare">Compare</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}
