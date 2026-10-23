import React, { useState } from 'react';
import './HomePage.css';
import Repository from './Repository';

export default function HomePage() {
  const [value, setValue] = useState('');
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleAnalyze = () => {
    const [owner, repo] = value.trim().split('/');

    if (!owner || !repo) {
      alert('Enter the repository as owner/repo');
      return;
    }

    setSelectedRepo({ owner, repo });
  };

  return (
    <div className="homepageContainer">
      <div className="homepageHeadline">
        <h1>Check Your GitHub Score & Open Source Impact</h1>
      </div>

      <div className="dataFields">
        <input
          type="text"
          placeholder="Enter Owner/repo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={handleAnalyze}>
          Analyze
        </button>
      </div>

      {/* Dashboard renders below the search bar */}
      {selectedRepo && (
        <Repository
          owner={selectedRepo.owner}
          repo={selectedRepo.repo}
        />
      )}
    </div>
  );
}