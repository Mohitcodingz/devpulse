import React from 'react';

export default function Blog() {
  return (
    <section className='h-[800px] py-20 px-10 bg-[var(--bg-base)] text-[var(--text-on-base)] flex flex-col items-center'>
      
      {/* Header Section */}
      <div className='max-w-3xl text-center mb-16'>
        <h1 className='text-[50px] font-bold text-[var(--color-primary)] mb-6'>DevPulse Blog</h1>
        <p className='text-[20px] text-[var(--text-muted)]'>
          Explore articles, tips, and insights about GitHub, open-source development, and developer productivity.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full'>
        
        <article className='bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-[20px] p-8 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all'>
          <div>
            <h2 className='text-[24px] font-bold mb-4'>Understanding GitHub Repository Statistics</h2>
            <p className='text-[var(--text-muted)] mb-6'>
              Learn how stars, forks, commits, and contributors help you understand a repository's true impact and health.
            </p>
          </div>
          <span className='text-[14px] font-bold text-[var(--color-primary)] bg-[var(--bg-box-soft)] px-4 py-2 rounded-full self-start'>
            Coming soon
          </span>
        </article>

        <article className='bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-[20px] p-8 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all'>
          <div>
            <h2 className='text-[24px] font-bold mb-4'>How to Evaluate Repository Activity</h2>
            <p className='text-[var(--text-muted)] mb-6'>
              Discover ways to understand commit history velocity, contributor activity, and long-term project maintenance.
            </p>
          </div>
          <span className='text-[14px] font-bold text-[var(--color-primary)] bg-[var(--bg-box-soft)] px-4 py-2 rounded-full self-start'>
            Coming soon
          </span>
        </article>

        <article className='bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-[20px] p-8 shadow-sm flex flex-col justify-between hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all'>
          <div>
            <h2 className='text-[24px] font-bold mb-4'>A Beginner's Guide to Open Source</h2>
            <p className='text-[var(--text-muted)] mb-6'>
              Learn how repositories work and how new developers can start contributing to major open-source projects confidently.
            </p>
          </div>
          <span className='text-[14px] font-bold text-[var(--color-primary)] bg-[var(--bg-box-soft)] px-4 py-2 rounded-full self-start'>
            Coming soon
          </span>
        </article>

      </div>
    </section>
  );
}