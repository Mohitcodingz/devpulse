import React from 'react';

export default function Statics() {
  return (
    // Replaced hardcoded h-[550px] with py-24 for flexible vertical spacing
    // Used --bg-box-soft so this section slightly contrasts with the Hero's --bg-base
    <section className='w-full py-24 bg-[var(--bg-box-soft)] text-[var(--text-on-base)]'>

      <div className='flex justify-center items-center flex-col text-center'>
        <h2 className='text-[50px] font-bold mb-2'>Repository Statistics</h2>
        <p className='text-[var(--text-muted)]'>Get a quick overview of your repository's performance.</p>
      </div>

      <div className='flex flex-row gap-15 items-center justify-center pt-16'>
        
        {/* Stat Circle 1 */}
        <div className='bg-[var(--bg-panel)] border border-[var(--border-soft)] shadow-sm w-[200px] h-[200px] flex justify-center items-center flex-col rounded-full hover:border-[var(--color-primary)] hover:shadow-md transition-all'>
          <h3 className='text-[18px] text-[var(--text-muted)]'>Total Stars</h3>
          <p className='text-[36px] font-bold text-[var(--color-primary)]'>0</p>
        </div>

        {/* Stat Circle 2 */}
        <div className='bg-[var(--bg-panel)] border border-[var(--border-soft)] shadow-sm w-[200px] h-[200px] flex justify-center items-center flex-col rounded-full hover:border-[var(--color-primary)] hover:shadow-md transition-all'>
          <h3 className='text-[18px] text-[var(--text-muted)]'>Total Forks</h3>
          <p className='text-[36px] font-bold text-[var(--color-primary)]'>0</p>
        </div>

        {/* Stat Circle 3 */}
        <div className='bg-[var(--bg-panel)] border border-[var(--border-soft)] shadow-sm w-[200px] h-[200px] flex justify-center items-center flex-col rounded-full hover:border-[var(--color-primary)] hover:shadow-md transition-all'>
          <h3 className='text-[18px] text-[var(--text-muted)]'>Total Commits</h3>
          <p className='text-[36px] font-bold text-[var(--color-primary)]'>0</p>
        </div>

        {/* Stat Circle 4 */}
        <div className='bg-[var(--bg-panel)] border border-[var(--border-soft)] shadow-sm w-[200px] h-[200px] flex justify-center items-center flex-col rounded-full hover:border-[var(--color-primary)] hover:shadow-md transition-all'>
          <h3 className='text-[18px] text-[var(--text-muted)]'>Total Contributors</h3>
          <p className='text-[36px] font-bold text-[var(--color-primary)]'>0</p>
        </div>
      </div>
    </section>
  );
}