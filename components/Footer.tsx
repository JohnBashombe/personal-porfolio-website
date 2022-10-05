import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:space-x-10 lg:mt-40 px-10 md:px-16 lg:px-28 border-t-2 border-gray-500 py-10 md:py-20'>
      <div className='w-full lg:w-1/2 flex flex-col space-y-5 lg:space-y-8 text-gray-200 font-thin text-sm mt-16 lg:mt-0'>
        <p className='font-bold text-2xl lg:text-3xl'>Ntavigwa Bashombe</p>
        <p className='pt-6 lg:pt-16'>
          {new Date().getFullYear()} &copy; Software Developer
        </p>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col'>
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
        <p className='text-base md:text-xl text-white font-bold pb-2'>Guides</p>
        <p className='cursor-pointer hover:text-white'>Home</p>
        <p className='cursor-pointer hover:text-white'>Service</p>
        <p className='cursor-pointer hover:text-white'>Works</p>
        <p className='cursor-pointer hover:text-white'>About Us</p>
      </div>
      <div className='flex flex-col text-gray-500 font-medium space-y-2 w-full'>
        <p className='text-base md:text-xl text-white font-bold pb-2'>
          Source Code
        </p>
      </div>
      <div className='flex flex-col text-gray-500 font-medium space-y-2 w-full'>
        <p className='text-base md:text-xl text-white font-bold pb-2'>Social</p>
        <p className='cursor-pointer hover:text-white'>Gmail</p>
        <p className='cursor-pointer hover:text-white'>Linkedin</p>
        <p className='cursor-pointer hover:text-white'>GitHub</p>
        <p className='cursor-pointer hover:text-white'>GitLab</p>
      </div>
    </div>
  );
};
