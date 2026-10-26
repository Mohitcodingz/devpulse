import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
    return (
        <div className='w-full h-20 flex justify-between items-center px-10 bg-blue-500 text-white text-[20px]'  >
            <div >
                <Link to='/'>DevPulse</Link>
            </div>
            <div className='flex gap-8'>
                <Link to='/'>Home</Link>
                <Link to='/AboutUS'>AboutUs</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </div>
    )
}
