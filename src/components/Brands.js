import React from 'react';

// import Brands data
import { brands } from '../Data';

const Brands = () => {
  return (
    <section
      className='min-h-[146px]
    bg-tertiary flex items-center'
    >
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {brands.map((brand, i) => {
          return (
            <a key={i} href={brand.href} target='_blank' rel='noreferrer'>
              <img className='cursor-pointer' src={brand.img} alt='' />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
