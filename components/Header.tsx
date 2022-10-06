import React from 'react';
import { refs } from '../lib/data';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

const Header = (): JSX.Element => {
  return (
    <div
      ref={refs[0]}
      className='md:pb-16 pt-5 flex flex-col w-full lg:w-2/3 xl:w-1/2 mx-auto'
    >
      <div className='grid grid-cols-1 md:grid-cols-1 w-full'>
        <div className='w-full h-full bg-transparent flex flex-col justify-center items-center'>
          <div className='bg-gradient-to-r from-gray-900 to-white w-full h-full md:w-80 md:h-80 rounded-full p-5 opacity-50'>
            <img
              src='https://ik.imagekit.io/ntavigwa/ntavigwa_-DwGZp0PQ.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1665011663665'
              alt='ntavigwa'
              className='w-full h-full rounded-full bg-transparent'
            />
          </div>
          <p className='text-base text-center md:text-left font-thin mt-10 md:mt-0'>
            Hi, I'm <br />
            <span className='font-bold text-5xl md:text-6xl'>
              Ntavigwa Bashombe
            </span>
            ,
          </p>
          <p className='uppercase text-center md:text-left text-xl md:text-2xl py-5 font-light'>
            A Full Stack Software Developer
          </p>
          <p className='py-3 text-base font-light text-center'>
            I enjoy challenging and technically interesting software development
            projects. <br /> I love building anything from small side projects
            to complex themes and intents. My one interest is in improving
            myself.
          </p>
          <div className='flex text-6xl text-white space-x-2 pt-10 md:py-10'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/JohnBashombe'
            >
              <FaGithubSquare className='hover:cursor-pointer animation classic' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/ntavigwa-bashombe/'
            >
              <FaLinkedin className='hover:cursor-pointer animation classic' />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/ntavigwa'
            >
              <FaTwitterSquare className='hover:cursor-pointer animation classic' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
