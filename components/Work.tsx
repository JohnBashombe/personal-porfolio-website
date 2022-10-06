import React from 'react';
import { refs } from '../lib/data';

const Work = (): JSX.Element => {
  return (
    <div
      ref={refs[3]}
      className='w-full lg:w-2/3 xl:w-1/2 text-white pt-16 md:pt-20 lg:pt-28 flex flex-col mx-auto space-y-10'
    >
      <div className='w-full grid grid-cols-1'>
        <div className='flex flex-col space-y-5 md:space-y-8'>
          <p className='text-3xl md:text-5xl font-bold uppercase text-center'>
            Work Experience
          </p>
          <p className='text-base text-gray-400 text-justify'>
            I've worked on large software products and on small web and mobile
            applications
          </p>
        </div>
      </div>

      <div className='w-full bg-transparent border border-white text-white space-y-5 p-5 flex flex-col justify-start items-start cursor-pointer'>
        <p className='font-bold text-xl'>August 2022 - Present</p>
        <p className='text-base font-normal'>
          <span className='font-bold uppercase'>Cosllos-io</span> <br />{' '}
          Frontend Software Developer
        </p>
        <p className='text-base py-2 font-light text-justify'>
          I'm developing an educational web app for the company. I'm working on
          creating awesome features that will help people learn new things.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-black'>
        <div className='flex flex-col space-y-5 w-full h-full bg-transparent cursor-pointer p-5 border border-white text-white'>
          <p className='font-bold text-xl'>June 2021 - July 2022</p>
          <p className='text-base font-normal'>
            <span className='font-bold uppercase'>Umoja Digital Group</span>{' '}
            <br /> Senior Frontend Software Developer
          </p>
          <p className='text-base py-2 font-light text-justify'>
            I have worked on the company dashboard web app in{' '}
            <span className='font-bold'>React JS</span> to help the system
            admins and content admins easily manage all the contents within the
            database with so much ease. The navigation workflow is based on
            interactive components, which helps users to access every feature at
            a first look. <br /> My responsibilities included planning and
            development of the project.
          </p>
        </div>
        <div className='flex flex-col space-y-5 w-full h-full bg-transparent cursor-pointer p-5 border border-white text-white '>
          <p className='font-bold text-xl'>June 2021 - July 2022</p>
          <p className='text-base font-normal'>
            <span className='font-bold uppercase'>Umoja Digital Group</span>{' '}
            <br /> Senior Backend Software Developer
          </p>
          <p className='text-base py-2 font-light text-justify'>
            I have built a backend process in{' '}
            <span className='font-bold'>Node JS and Typescript</span> that
            provides a real time data integration platform for both the website
            and mobile applications through APIs. The platform's main goal is to
            empower users through innovative ways as well as turn the website
            into an interactive map system. I have also implemented a
            microservice REST API that is used by both the website and mobile
            backend to access data and retrieve it.
          </p>
        </div>
      </div>
      <div className='w-full h-full bg-transparent cursor-pointer space-y-5 text-white border border-white p-5'>
        <p className='font-bold text-xl'>Jan 2020 - December 2021</p>
        <p className='text-base font-normal'>
          <span className='font-bold uppercase'>Skiiya Sarl</span> <br />
          Full Stack Software Developer
        </p>
        <p className='text-base py-2 font-light text-justify'>
          I developed a lifestyle application for Android and iOS, which was
          designed to be used as a betting application. I develop a mobile
          application for both android and ios for Skiiya. It included multiple
          player profiles, wagering options, complex odds and settings.
        </p>
        <p className='text-base py-2 font-light text-justify'>
          I've been the lead iOS and Android Developer at Skiiya SARL, where I
          develop that platform that lets you make bets on your favorite sports
          teams, leagues and games. It's a platform where people and
          professional sports players go to make their most important wagers.
          People must be able to trust Skiiya, so as a developer, my main goal
          was to create an easy-to-use mobile application that could be trusted.
          The app was developed in{' '}
          <span className='font-bold'>Flutter and Firebase</span>.
        </p>
      </div>
    </div>
  );
};

export default Work;
