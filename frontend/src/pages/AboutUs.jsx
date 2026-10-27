import React from 'react';

export default function AboutUs() {
  return (
    <section className='h-[800px] py-20 px-10 bg-[var(--bg-base)] text-[var(--text-on-base)] flex flex-col items-center'>
      
      {/* Header Section */}
      <div className='max-w-3xl text-center mb-16'>
        <h1 className='text-[50px] font-bold text-[var(--color-primary)] mb-6'>About DevPulse</h1>
        <p className='text-[20px] text-[var(--text-muted)]'>
          DevPulse helps developers understand GitHub repositories through clear statistics, meaningful insights, and actionable data metrics.
        </p>
      </div>

      {/* Content Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full'>
        
        {/* Mission Card */}
        <div className='bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-[20px] p-10 shadow-sm'>
          <h2 className='text-[28px] font-bold mb-4'>Our Mission</h2>
          <p className='text-[var(--text-muted)] leading-relaxed'>
            Our mission is to make repository activity, development progress, and open-source contributions easier to understand. We believe that transparent metrics empower developers to build better, collaborate faster, and maintain healthier open-source ecosystems.
          </p>
        </div>

        {/* Offerings Card */}
        <div className='bg-[var(--bg-panel)] border border-[var(--border-soft)] rounded-[20px] p-10 shadow-sm'>
          <h2 className='text-[28px] font-bold mb-4'>What We Offer</h2>
          <ul className='list-disc list-inside text-[var(--text-muted)] space-y-3'>
            <li>Deep repository statistics and insights</li>
            <li>Commit history and contributor activity tracking</li>
            <li>Repository health and community comparisons</li>
            <li>Seamless GitHub REST API integrations</li>
          </ul>
        </div>

      </div>
    </section>
  );
}