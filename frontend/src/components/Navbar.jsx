import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className='w-full h-20 flex justify-between items-center px-10 bg-[var(--bg-panel)] border-b border-[var(--border-soft)] text-[var(--text-on-base)] text-[20px]'>
      <div className='font-bold text-[var(--color-primary)]'>
        <Link to='/'>DevPulse</Link>
      </div>
      <div className='flex gap-8'>
        <Link to='/' className='hover:text-[var(--color-primary)] transition-colors'>Home</Link>
        <Link to='/AboutUS' className='hover:text-[var(--color-primary)] transition-colors'>AboutUs</Link>
        <Link to='/Blog' className='hover:text-[var(--color-primary)] transition-colors'>Blog</Link>
      </div>
    </nav>
  )
}