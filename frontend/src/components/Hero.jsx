import React from 'react'

export default function Hero() {
  return (
    // Replaced invalid h-100 with py-32 for proper vertical spacing
    <div className='w-full py-32 flex justify-center items-center flex-col bg-[var(--bg-base)] text-[var(--text-on-base)]'>
      <div>
        <h1 className='text-[50px] font-bold text-center mb-10'>
          Enter the GitHub Any <br/>Repository and Analyze it.
        </h1>
      </div>
      
      {/* Search Bar Wrapper: Added panel background, soft border, and shadow */}
      <div className='flex items-center border border-[var(--border-soft)] rounded-[20px] bg-[var(--bg-panel)] overflow-hidden shadow-sm'>
        <input 
          type="text" 
          className='focus:outline-none p-5 w-[700px] bg-transparent text-[var(--text-on-base)] placeholder-[var(--text-muted)]'
          placeholder='Enter owner/repo'
        />
        <button className='bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-on-heavy)] font-semibold px-8 py-5 transition-colors'>
          Analyze
        </button>
      </div>
    </div>
  )
}