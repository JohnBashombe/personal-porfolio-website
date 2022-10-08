import Home from './Home';
import About from './About';
import Skiils from './Skiils';
import Projects from './Projects';
import Experience from './Experience';
import React, { useState } from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  FaMedium,
  FaTwitterSquare,
} from 'react-icons/fa';

const Desktop = (): JSX.Element => {
  const [panel, setPanel] = useState<string>('home');
  return (
    <div className='hidden lg:flex flex-col justify-between space-y-16 bg-white contact-bg text-black font-gemunu min-h-screen overflow-y-hidden p-10'>
      <div className='flex justify-between items-center text-6xl font-bold text-black'>
        <div className='flex flex-col justify-start items-start font-bold text-3xl'>
          <p>Backend & Frontend</p>
          <p>Software Developer</p>
        </div>
        <p className='text-right'>
          Ntavigwa <br /> Bashombe
        </p>
      </div>
      <div className='grid grid-cols-12 gap-5'>
        <div className='flex justify-center items-center col-span-11'>
          {panel === 'home' ? (
            <Home />
          ) : panel === 'about' ? (
            <About />
          ) : panel === 'skills' ? (
            <Skiils />
          ) : panel === 'experience' ? (
            <Experience />
          ) : (
            <Projects />
          )}
        </div>
        <div className='col-span-1 flex justify-end'>
          <div className='flex flex-col space-y-14 min-w-fit h-fit py-16 items-center text-white justify-center bg-gradient-to-b from-red-900 to-green-900 shadow-2xl rounded-3xl w-fit'>
            <p
              onClick={() => setPanel('home')}
              className='min-w-fit rotate-90 hover:text-gray-400 cursor-pointer'
            >
              Home
            </p>
            <p
              onClick={() => setPanel('about')}
              className='min-w-fit rotate-90 hover:text-gray-400 cursor-pointer'
            >
              About Me
            </p>
            <p
              onClick={() => setPanel('skills')}
              className='min-w-fit rotate-90 hover:text-gray-400 cursor-pointer'
            >
              Skills
            </p>
            <p
              onClick={() => setPanel('experience')}
              className='min-w-fit rotate-90 hover:text-gray-400 cursor-pointer'
            >
              Experience
            </p>
            {/* <p
              onClick={() => setPanel('projects')}
              className='min-w-fit rotate-90 hover:text-gray-400 cursor-pointer'
            >
              Projects
            </p> */}
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        {/* <div className='flex flex-col justify-start items-start font-bold text-2xl'>
          <p>Backend Developer</p>
          <p>Front-End Developer</p>
        </div> */}
        <div className='flex justify-start items-center space-x-2'>
          <div className='flex justify-center items-center w-16 h-16 font-bold bg-gradient-to-b from-red-900 to-green-900 shadow-2xl text-white rounded-full animation classic cursor-pointer'>
            <p className='text-4xl'>4+</p>
          </div>
          <p className='text-xl'>Years</p>
        </div>
        <div className='flex text-6xl text-black space-x-2 pt-10 md:py-10'>
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
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://bashombe.medium.com/'
          >
            <FaMedium className='hover:cursor-pointer animation classic' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
