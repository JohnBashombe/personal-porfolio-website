import { refs } from '../lib/data';
import React, { MutableRefObject } from 'react';

const Contact = (): JSX.Element => {
  const scrollDown = (ref: MutableRefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='px-10 md:px-0 mt-16 lg:mt-28 py-20 md:py-40 w-full bg-transparent text-sm md:text-base space-y-8 flex flex-col justify-center items-center text-center md:text-left border-t border-white text-white'>
      <p className='text-4xl md:text-6xl lg:text-7xl font-bold capitalize'>
        Get in Touch Today
      </p>
      <p>Contact Me Now and let us build your dream idea.</p>
      <div
        onClick={() => scrollDown(refs[0])}
        className='bg-white w-full md:w-fit text-sm font-bold text-center md:text-left md:px-12 py-5 text-black cursor-pointer animation classic infinite'
      >
        Contact Me
      </div>
    </div>
  );
};

export default Contact;
