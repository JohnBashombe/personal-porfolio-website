/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useRouter } from 'next/router';
import { FaDotCircle } from 'react-icons/fa';
import { refs } from '../lib/data';

const Dream = (): JSX.Element => {
  const router = useRouter();
  return (
    <div
      ref={refs[2]}
      className='pt-16 md:pt-28 grid grid-cols-1 lg:grid-cols-2 gap-10'
    >
      <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-2'>
        <div
          onClick={() => void router.push('/works/1')}
          className='w-full lg:w-[70%] bg-gray-200 h-96 cursor-pointer'
        ></div>
        <div
          onClick={() => void router.push('/works/1')}
          className='w-full lg:w-[30%] bg-gray-200 h-96 cursor-pointer'
        ></div>
      </div>
      <div className='flex flex-col space-y-6'>
        <p className='font-bold text-4xl text-white uppercase'>
          We build your dream building
        </p>
        <p className='text-gray-400 text-justify text-base'>
          Why you should choose us, because we have many advantages over other
          places such as
        </p>

        <div className='flex flex-col font-bold text-base space-y-4'>
          <Item title='Affrodable Cost' />
          <Item title='Highly Experienced' />
          <Item title='Full Project Delivery' />
          <Item title='Customable Modern Design' />
          <Item title='Best Interior Choice' />
        </div>

        <div className='bg-white text-black font-medium px-10 text-xs py-4 w-fit cursor-pointer'>
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
};

export default Dream;

const Item = ({ title }: { title: string }) => {
  return (
    <div className='flex space-x-4 justify-start items-center'>
      <FaDotCircle />
      <p>{title}</p>
    </div>
  );
};
