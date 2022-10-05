/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LOCATIONicons from '../assets/images/LOCATION.svg';

const NotFound = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-center items-center space-y-8 py-10 font-signika bg-gray-900 awesome text-white'>
      <Image
        className='w-full h-full'
        width={300}
        height={300}
        src={LOCATIONicons}
        alt='not found'
      />
      <p className='font-bold text-3xl'>Page Not Found</p>
      <p
        onClick={() => void router.push('/')}
        className='text-sm font-bold hover:underline cursor-pointer hover:text-gray-200'
      >
        Go Back to Home Page
      </p>
    </div>
  );
};

export default NotFound;
