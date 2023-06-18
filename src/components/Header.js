import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/image.svg';

import Nav from '../components/Nav';
import NavMobile from './NavMobile';
import Socials from './Social';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full
     text-white z-10 transition duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* Logo */}
        <a href='/' className='cursor-no-drop'>
          <img className='w-[80px] bg-none' src={Logo} alt='' />
        </a>
        {/* Nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* NavMobile */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
