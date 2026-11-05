import React, {useState}  from 'react'  

export default function Hero({setDataValue}) {

  const [input, setInput] = useState(''); 
  async function getInput() {
    try {
      const [owner, repo] = input.trim().split('/');
      if (!owner || !repo) {
        throw new Error('Please enter a valid owner/repo format')
      }
      const response = await fetch(`https://devpulse-ghsw.onrender.com/api/repository/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`)

      if (!response.ok) { 
        throw new Error('something went wrong!')
      }
      const data = await response.json();
      setDataValue(data);
    }
    catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className='w-full py-32 flex justify-center items-center flex-col bg-[var(--bg-base)] text-[var(--text-on-base)]'>
      <div>
        <h1 className='text-[50px] font-bold text-center mb-10'>
          Enter the GitHub Any <br />Repository and Analyze it.
        </h1>
      </div>
      <div className='flex items-center border border-[var(--border-soft)] rounded-[20px] bg-[var(--bg-panel)] overflow-hidden shadow-sm'>
        <input
          type="text"
          className='focus:outline-none p-5 w-[700px] bg-transparent text-[var(--text-on-base)] placeholder-[var(--text-muted)]'
          placeholder='Enter owner/repo' onChange={(e) => { setInput(e.target.value) }}
        />
        <button className='bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-on-heavy)] font-semibold px-8 py-5 transition-colors' onClick={getInput}>
          Analyze
        </button>
         
      </div>
    </div>
  )
}