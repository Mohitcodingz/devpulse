import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    // Used Flexbox to create a clean, horizontal 3-column layout
    <footer className='w-full py-12 px-10 bg-[var(--bg-panel)] border-t border-[var(--border-soft)] text-[var(--text-on-base)] flex justify-between'>
      
      <div className='max-w-xs'>
        <h2 className='text-xl font-bold text-[var(--color-primary)] mb-2'>DevPulse</h2>
        <p className='text-[var(--text-muted)]'>
          Understand your GitHub repository and open-source impact.
        </p>
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='font-bold mb-2'>Quick Links</h3>
        <Link to="/" className='text-[var(--text-muted)] hover:text-[var(--color-primary)]'>Home</Link>
        <Link to="/AboutUS" className='text-[var(--text-muted)] hover:text-[var(--color-primary)]'>About Us</Link>
        <Link to="/Blog" className='text-[var(--text-muted)] hover:text-[var(--color-primary)]'>Blog</Link>
      </div>

      <div className='flex flex-col items-end justify-start'>
        <p className='text-[var(--text-muted)]'>Built for developers, by developers.</p>
        <p className='text-[var(--text-muted)] text-sm'>© 2026 DevPulse. All rights reserved.</p>
      </div>

    </footer>
  );
}