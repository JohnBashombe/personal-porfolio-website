import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:space-x-10 lg:mt-40 px-10 md:px-16 lg:px-28 border-t-2 border-gray-500 py-10 md:py-20'>
      <div className='w-full lg:w-1/2 flex flex-col space-y-5 lg:space-y-8 text-gray-200 font-thin text-sm mt-16 lg:mt-0'>
        <p className='font-bold text-4xl lg:text-5xl'>Ntavigwa Bashombe</p>
        <div className='flex flex-col justify-start items-start'>
          <p>A design that pampers</p>
          <p>you like you're in a </p>
          <p>beautiful dreamland</p>
        </div>
        <p className='pt-6 lg:pt-16'>2022 &copy; Software Developer </p>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col space-y-8'>
        <div className='flex border-b-2 w-full border-gray-500 bg-transparent space-x-4 py-2 justify-end'>
          <input
            type='text'
            placeholder='Your email address'
            className='bg-transparent focus:outline-none w-full text-sm md:text-base'
          />
          <button className='text-sm font-bold text-black bg-white px-6 md:px-12 py-2 md:py-3'>
            Submit
          </button>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Footer;

const BottomNavigation = (): JSX.Element => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-3 gap-5 text-xs md:text-sm'>
      <div className='flex flex-col text-gray-500 font-medium space-y-2 w-full'>
        <p className='text-base md:text-xl text-white font-bold pb-2'>Menu</p>
        <p className='cursor-pointer hover:text-white'>Home</p>
        <p className='cursor-pointer hover:text-white'>Service</p>
        <p className='cursor-pointer hover:text-white'>Works</p>
        <p className='cursor-pointer hover:text-white'>Studio</p>
        <p className='cursor-pointer hover:text-white'>About Us</p>
      </div>
      <div className='flex flex-col text-gray-500 font-medium space-y-2 w-full'>
        <p className='text-base md:text-xl text-white font-bold pb-2'>Help</p>
        <p className='cursor-pointer hover:text-white'>Privacy and Policy</p>
        <p className='cursor-pointer hover:text-white'>Terms of Use</p>
      </div>
      <div className='flex flex-col text-gray-500 font-medium space-y-2 w-full'>
        <p className='text-base md:text-xl text-white font-bold pb-2'>Social</p>
        <p className='cursor-pointer hover:text-white'>Facebook</p>
        <p className='cursor-pointer hover:text-white'>Twitter</p>
        <p className='cursor-pointer hover:text-white'>Instagram</p>
      </div>
    </div>
  );
};
