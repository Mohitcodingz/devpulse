import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function Repository() {
  const { owner, repo } = useParams();
  const [data, setData] = useState(null);
  // setData(`${owner}/${repo}`)
  useEffect(() => {
    async function fetchRepository() {
      const response = await fetch(`http://localhost:5000/api/repository/${owner}/${repo}`)
      const result = await response.json();
      setData(result);
    }
    fetchRepository();
  }, [owner, repo]);
  return (
    <div>
      <h1>Analyzing {owner}/{repo}</h1>
    </div>
  )
}
