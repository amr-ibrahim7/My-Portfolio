import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2
            className='section-title
                before:content-testimonials relative 
                before:absolute before:opacity-40 before:-top-[2rem] before:-left-64
                before:hidden before:lg:block
                '
          >
            What other People say
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus id
            ducimus pariatur laboriosam temporibus quaerat soluta enim nam,
            dignissimos aspernatur.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
