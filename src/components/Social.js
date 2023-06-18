import React from 'react';
import { social } from '../Data';

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, i) => {
        return (
          <li
            key={i}
            className='flex justify-center
        items-center text-accent
        '
          >
            <a
              className='text-base'
              rel='noreferrer '
              target='_blank'
              href={item.href}
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
