import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='homepageContainer'>
      <div className="homepageHeadline">
        <h1>Check Your GitHub Score & Open Source Impact</h1>
      </div>
      <div className="dataFields">
      <input type="text" placeholder='Enter Owner/repo' />
      <button>Analyze</button>
      </div>
    </div>
  )
}
