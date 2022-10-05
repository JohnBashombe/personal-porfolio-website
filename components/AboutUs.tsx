/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { refs } from '../lib/data';

const AboutUs = (): JSX.Element => {
  return (
    <div
      ref={refs[1]}
      className='flex flex-col justify-start items-center space-y-10 pt-10 w-full'
    >
      <div className='w-full md:w-1/2 flex flex-col text-white space-y-10 mt-10 md:mt-0'>
        <p className='uppercase text-5xl font-bold text-center'>About Me</p>
        <p className='text-base text-white text-justify'>
          I am a Alumni at{' '}
          <b>Faculty of Science & Technology in Computer Science ( 3 Years )</b>{' '}
          at International University of East Africa. All of my projects are
          built with the goal to make software more accessible to people who
          could not use it before. I am a competitive programmer, always eager
          to learn more and explore new technologies. <br /> I have{' '}
          <b>about 4 years of experience</b> in Java, JavaScript, Typescript,
          Next JS, React PHP, SQL, Firebase, JS, Node JS, MySQL, and quite
          enough knowledge in Rust, Dart, Solidity, MongoDB and Linux.
        </p>
      </div>
      <div className='flex flex-col space-y-8 justify-center items-center w-full md:w-1/2 bg-transparent h-full pt-10'>
        <img
          className='w-auto h-fit'
          src='https://ik.imagekit.io/ntavigwa/iuea_Zytey4hKD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664944658960'
          alt='IUEA'
        />
        <a
          href='https://iuea.ac.ug/Graduation/sitepad-data/uploads//2022/06/GradLists-2019.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white font-bold hover:underline hover:text-gray-400 animation classic text-base'
        >
          Click here to verify
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
