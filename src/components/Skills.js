import React from 'react';

// import Skills Data
import { skills } from '../Data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row'>
          {skills.map((skill, i) => {
            return (
              <div className='flex items-center justify-center' key={i}>
                <img className='w-[96px] ' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
