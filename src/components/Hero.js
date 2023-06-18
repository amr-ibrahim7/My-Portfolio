import React from 'react';
import { Link } from 'react-scroll';
//  import Image

import Work from '../assets/img/workk.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[100vh] flex
    items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32
    lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full '>
        <div className='flex items-center h-full pt-12 justify-around'>
          {/* Left */}
          <div
            className='flex-1 flex flex-col
        items-center lg:items-start
        '
          >
            {/* <p className="text-lg text-accent mb-[22px]">Hey, I'm Amr 👋</p> */}
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build <p className='text-accent inline'>&</p> Design <br />
              Web Interfaces
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              A freelance web designer and developer from Egy, I always make
              websites that have unique designs and also has a good performance
              rate.
            </p>
            <Link
              className='cursor-pointer btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'
              to='contact'
            >
              Work Anywhere
            </Link>
          </div>
          {/* Right */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img className='w-[440px] mr-22 mb-[-2.8rem]' src={Work} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
