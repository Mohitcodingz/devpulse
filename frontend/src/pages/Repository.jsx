import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'

export default function Repository() {
  const { owner, repo } = useParams();
  const [data, setData] = useState(null);
  // setData(`${owner}/${repo}`)
  useEffect(()=>{

  },[])
  return (
    <div>
      <h1>Analyzing {owner}/{repo}</h1>
    </div>
  )
}
