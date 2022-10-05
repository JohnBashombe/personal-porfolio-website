/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { refs } from '../lib/data';

const AboutUs = (): JSX.Element => {
  return (
    <div
      ref={refs[1]}
      className='flex flex-col-reverse md:flex-row justify-start items-center md:space-x-10 pt-10 md:pt-28 w-full'
    >
      <div className='w-full md:w-1/2 flex flex-col text-white space-y-10 mt-10 md:mt-0'>
        <p className='uppercase text-4xl font-bold'>About Us</p>
        <p className='text-base text-gray-400 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti obcaecati ea provident ad aliquam illo dolorem omnis, iste
          eligendi odio error alias numquam qui, voluptatem impedit commodi,
          harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, nulla sapiente reiciendis ducimus, soluta praesentium
          voluptates quia quas quam, quod consequuntur voluptatibus.
        </p>
        <div className='bg-white text-black font-medium px-10 text-xs py-4 w-fit cursor-pointer'>
          <p>Contact Us</p>
        </div>
      </div>
      <div className='w-full md:w-1/2 bg-gray-200 h-80'></div>
    </div>
  );
};

export default AboutUs;
