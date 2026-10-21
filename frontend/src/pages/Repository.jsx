import React from 'react'
import { useParams } from 'react-router'

export default function Repository() {
  const {owner, repo}  = useParams
    return (
    <div>
        <h1>Analyzing {owner}/{repo}</h1>
    </div>
  )
}
