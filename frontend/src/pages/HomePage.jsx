import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './HomePage.css'

export default function HomePage() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleAnalyze = () => {
    const [owner, repo] = value.trim().split('/');
    if (!owner || !repo) {
      alert('Owner and Repo fields are missing!');
      return;
    }
    navigate(`/repository/${owner}/${repo}`);
  }
  return (
    <div className='homepageContainer'>
      <div className="homepageHeadline">
        <h1>Check Your GitHub Score & Open Source Impact</h1>
      </div>
      <div className="dataFields">
        <input type="text" placeholder='Enter Owner/repo' value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAnalyze} >Analyze</button>
      </div>
    </div>
  )
}
