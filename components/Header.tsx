import React from 'react';
import Image from 'next/image';
import ntavigwa from '../assets/images/ntavigwa-bash.png';
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { refs } from '../lib/data';

const Header = (): JSX.Element => {
  return (
    <div ref={refs[0]} className='pb-16 pt-5 flex flex-col'>
      <div className='grid grid-cols-1 md:grid-cols-1 w-full'>
        <div className='w-full h-full bg-transparent flex flex-col justify-center items-center'>
          <div>
            <Image src={ntavigwa} width={400} height={400} />
          </div>
          <p className='text-base font-thin'>
            Hi, I'm <br />
            <span className='font-bold text-6xl'>Ntavigwa Bashombe</span>,
          </p>
          <p className='uppercase text-2xl py-5 font-light'>
            A Full Stack Software Developer
          </p>
          <p className='py-3 text-base font-light text-center'>
            I enjoy challenging and technically interesting software development
            projects. <br /> I love building anything from small side projects
            to complex themes and intents. My one interest is in improving
            myself.
          </p>
          <div className='flex text-6xl text-white space-x-2 py-10'>
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
