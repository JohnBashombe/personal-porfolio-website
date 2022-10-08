import React, { useState } from 'react';

const Experience = (): JSX.Element => {
  const experiences = [
    {
      title: 'Cosllos-io (2022)',
      start_date: 'August 2022',
      end_date: 'Present',
      role: 'Front-end Software Developer',
      description: [
        "I'm working on creating awesome features for a upcoming product that will help people learn new things online.",
      ],
    },
    {
      title: 'Umoja Digital Group (2021)',
      start_date: 'June 2021',
      end_date: 'July 2022',
      role: 'Front-end Software Developer',
      description: [
        'I have worked on the company dashboard web app in React JS to help the system admins and content admins easily manage all the contents within the database with so much ease. The navigation workflow is based on interactive components, which helps users to access every feature at a first look. <br /> My responsibilities included planning and development of the project.',
      ],
    },
    {
      title: 'Umoja Digital Group (2021)',
      start_date: 'June 2021',
      end_date: 'July 2022',
      role: 'Backend Software Developer',
      description: [
        "I have built a backend process in Node JS and Typescript that provides a real time data integration platform for both the website and mobile applications through APIs. The platform's main goal is top empower users through innovative ways as well as turn the website into an interactive map system. I have also implemented a microservice REST API that is used by both the website and mobile backend to access data and retrieve it.",
      ],
    },
    {
      title: 'Skiiya Sarl (2020)',
      start_date: 'January 2020',
      end_date: 'December 2021',
      role: 'Front-end Developer',
      description: [
        'I developed a lifestyle application for Android and iOS, which was designed to be used as a betting application. I develop a mobile application for both android and ios for Skiiya. It included multiple player profiles, wagering options, complex odds and settings.',
      ],
    },
    {
      title: 'Skiiya Sarl (2020)',
      start_date: 'January 2020',
      end_date: 'December 2021',
      role: 'Backend Developer',
      description: [
        "I've been the lead iOS and Android Developer at Skiiya SARL, where I develop that platform that lets you make bets on your favorite sports teams, leagues and games. It's a platform where people and professional sports players go to make their most important wagers. People must be able to trust Skiiya, so as a developer, my main goal was to create an easy-to-use mobile application that could be trusted. The app was developed in Flutter and Firebase.",
      ],
    },
  ];
  const [tab, setTab] = useState<number>(0);

  return (
    <div className='w-full xl:w-2/3 overflow-y-auto h-full max-h-[500px]'>
      <div className='flex space-x-8 pb-10 text-xl font-bold'>
        {experiences.map((experience, index) => {
          return (
            <div
              onClick={() => setTab(index)}
              className={
                `pb-1 cursor-pointer hover:text-gray-400  ` +
                (tab === index ? 'border-b-2 border-black' : 'border-none')
              }
            >
              <p>{experience.title}</p>
            </div>
          );
        })}
      </div>

      <div className='w-full bg-transparent border border-black text-black space-y-2 p-5 flex flex-col justify-start items-start cursor-pointer'>
        <p className='font-bold text-lg uppercase'>
          {experiences[tab].start_date} - {experiences[tab].end_date}
        </p>
        <p className='text-lg font-normal pb-5'>
          <span className='font-bold uppercase'>{experiences[tab].title}</span>{' '}
          <br /> {experiences[tab].role}
        </p>
        {experiences[tab].description.map((value, index) => (
          <p key={index} className='text-xl font-light text-justify'>
            {value}
          </p>
        ))}
      </div>

      {/* <div className='w-full h-full bg-transparent cursor-pointer space-y-5 text-white border border-white p-5'>
        <p className='font-bold text-2xl'>Jan 2020 - December 2021</p>
        <p className='text-lg font-normal'>
          <span className='font-bold uppercase'>Skiiya Sarl</span> <br />
          Full Stack Software Developer
        </p>
        <p className='text-lg py-2 font-light text-justify'>
          I developed a lifestyle application for Android and iOS, which was
          designed to be used as a betting application. I develop a mobile
          application for both android and ios for Skiiya. It included multiple
          player profiles, wagering options, complex odds and settings.
        </p>
        <p className='text-lg py-2 font-light text-justify'>
          I've been the lead iOS and Android Developer at Skiiya SARL, where I
          develop that platform that lets you make bets on your favorite sports
          teams, leagues and games. It's a platform where people and
          professional sports players go to make their most important wagers.
          People must be able to trust Skiiya, so as a developer, my main goal
          was to create an easy-to-use mobile application that could be trusted.
          The app was developed in{' '}
          <span className='font-bold'>Flutter and Firebase</span>.
        </p>
      </div> */}
    </div>
  );
};

export default Experience;
