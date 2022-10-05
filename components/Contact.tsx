import React from 'react';

const Contact = (): JSX.Element => {
  return (
    <div className='px-10 md:px-0 mt-16 lg:mt-28 h-96 w-full bg-gray-200 text-black text-sm md:text-base space-y-8 flex flex-col justify-center items-center'>
      <p className='text-4xl md:text-6xl lg:text-7xl font-bold capitalize'>
        Get in Touch Today
      </p>
      <p>Contact Us Now and let us build your dream house.</p>
      <div className='bg-black text-sm font-bold px-12 py-5 text-white cursor-pointer'>
        Contact Now
      </div>
    </div>
  );
};

export default Contact;
