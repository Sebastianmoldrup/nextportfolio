'use client';
import { useState } from 'react';

export default function Navigation() {
  const [active, setActive] = useState(false);
  const links = ['hjem', 'om', 'prosjekter', 'kontakt'];
  console.log(active);

  return (
    <nav className='flex justify-between text-xl py-6 px-10'>
      {/* Name */}
      <h3 className='font-bold'>Sebastian</h3>

      {/* Desktop menu list */}
      <ul className='md:flex gap-x-4 font-semibold hidden'>
        {links.map((link, index) => (
          <li key={index} className='capitalize hover:cursor-pointer'>
            <a href={'#' + link}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Show menu */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.5em'
        height='1.5em'
        viewBox='0 0 24 24'
        className='hover:cursor-pointer'
        onClick={() => setActive(true)}
      >
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2.5'
          d='M3 6h18M3 12h18M3 18h18'
        />
      </svg>

      {/* Menu */}
      <div
        className={
          active
            ? 'absolute top-0 left-0 w-screen h-screen bg-white show'
            : 'absolute top-0 left-0 w-screen h-screen hide'
        }
      >
        <div className='flex justify-center items-center w-full h-full py-6 px-10 gap-y-10'>
          {/* Hide menu */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            viewBox='0 0 24 24'
            className='absolute hover:cursor-pointer top-6 right-14'
            onClick={() => setActive(false)}
          >
            <path
              fill='currentColor'
              d='m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2zm16-7v2H11V6zm0 10v2H11v-2z'
            />
          </svg>
          {/* Mobile menu list */}
          <ul className='flex flex-col gap-y-4 font-semibold text-center'>
            {links.map((link, index) => (
              <li
                key={index}
                className='capitalize hover:cursor-pointer hover:scale-110'
              >
                <a href={'#' + link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
