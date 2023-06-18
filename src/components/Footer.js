import React from 'react';

import { social } from '../Data';

import Logo from '../assets/img/image.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          {/*  Social icons */}
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, i) => {
              const { href, icon } = item;
              return (
                <a
                  className='hover:text-accent-hover text-base'
                  href={href}
                  key={i}
                  target='_blank'
                  rel='noreferrer'
                >
                  {icon}
                </a>
              );
            })}
          </div>
          {/* Logo */}
          <div>
            <img className='w-[70px] justify-center' src={Logo} alt='' />
          </div>
          {/* Copyright */}
          <p>&copy; 2023 Amr Ibrahim. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
