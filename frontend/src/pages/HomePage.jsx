
import { useState } from 'react'
import Hero from '../components/Hero'
import Statics from '../components/Statics'

export default function HomePage() {
const [dataValue, setDataValue] = useState(null)

  return (
    <div>
      <Hero setDataValue={setDataValue}/>
      <Statics
        name={dataValue?.repository?.owner?.login}
        star={dataValue?.repository?.stargazers_count}
        forks={dataValue?.repository?.forks_count}
        issues={dataValue?.repository?.open_issues_count}
        url={dataValue?.repository?.html_url}
      />
    </div>
  )
}
