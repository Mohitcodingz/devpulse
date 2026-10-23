import React, { useState, useEffect } from 'react';
import './Repository.css'


export default function Repository({ owner, repo }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchRepository() {
      const response = await fetch(
        `http://localhost:5000/api/repository/${owner}/${repo}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch repository');
      }

      const result = await response.json();
      setData(result);
    }

    fetchRepository();
  }, [owner, repo]);

  if (!data) {
    return <p>Loading repository data...</p>;
  }

  return (
    <div className="repositoryDashboard">
      <h2>{owner}/{repo}</h2>

      <div className="statsGrid">
        <div className="statCard">
          <h3>Total Commits</h3>
          <p>{data.stats.totalCommits}</p>
        </div>

        <div className="statCard">
          <h3>Stars</h3>
          <p>{data.stats.stars}</p>
        </div>

        <div className="statCard">
          <h3>Forks</h3>
          <p>{data.stats.forks}</p>
        </div>
      </div>
    </div>
  );
}