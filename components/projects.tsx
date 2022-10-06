import React from 'react';
import { refs } from '../lib/data';

const Projects = (): JSX.Element => {
  return (
    <div
      ref={refs[4]}
      className='w-full lg:w-2/3 xl:w-1/2 text-white pt-16 md:pt-20 lg:pt-28 flex flex-col mx-auto space-y-10'
    >
      <div className='w-full grid grid-cols-1'>
        <div className='flex flex-col space-y-5 md:space-y-8'>
          <p className='text-3xl md:text-5xl font-bold uppercase text-center'>
            Some Latests Achievements
          </p>
          <p className='text-base text-gray-400 text-justify'>
            These are some of the projects I develop for some customers and
            simply for fun.
          </p>
          <p className='text-lg text-white text-justify'>
            For Developers, open source projects are a great way to practice and
            get things done. Open source projects provide flexibility and
            efficiency. Please view my GitHub profile. There you will find a
            variety of projects ranging from simple CSS animations to complete
            Management Systems in Java Swing and PHP and MySQL and more.
          </p>

          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/JohnBashombe'
            className='text-white underline hover:text-gray-300 y-3'
          >
            My GitHub Profile
          </a>
        </div>
      </div>

      <div className='flex flex-col space-y-8 w-full bg-transparent border border-white text-gray-200 p-5'>
        <div className='border-b border-white pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              Ensemble Pour La République ( Next JS - Next JS API - Firebase )
            </span>{' '}
            <br /> Developed For Fun
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            We are a team of developers focused on building the technology for
            democratic change in the Democratic Republic of Congo. We believe
            that a free and prosperous future is within our reach, so we’re
            working to help create it. <br />
            It is a platform where people can come together and discuss their
            ideas and thoughts. Members of the community have access to
            real-time documentation of events happening around them, as well as
            opportunities for direct engagement with each other and experts from
            all walks of life.
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://epr-rdc.vercel.app/'
            className='text-white underline hover:text-gray-300 y-3'
          >
            Open This Project
          </a>
        </div>
        <div className='border-b border-white pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              This Portfolio Website - Source Code (Next JS)
            </span>{' '}
            <br /> Developed For Personal Use
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            This website is an opened source project. You can download or fork
            it in your personal or commercial project and use it in your
            personal or commercial project without worrying about licencing.
            <br />
            This website is free to use. Contribute in any way you like;
            everything is open source.
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/JohnBashombe/personal-porfolio-website'
            className='text-white underline hover:text-gray-300 y-3'
          >
            Open On GitHub
          </a>
        </div>
        <div className='border-b border-white pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              Bill Management System Dashboard Template(Next JS)
            </span>{' '}
            <br /> Developed For Fun
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            This application helps the system admin to easily manage all the
            contents of this billing payment system. This application is
            particularly helpful for other system administration tools. The
            software development company should also provides the following
            features: Users Management, Data Migration, Project Management etc
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://skiiya-umeme.netlify.app/'
            className='text-white underline hover:text-gray-300 y-3'
          >
            Open This Project
          </a>
        </div>
        <div className='border-b border-white pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              Company Website Template(Next JS)
            </span>{' '}
            <br /> Developed For Fun
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            Our developer template is simply designed, easy to use and 100%
            responsive. This template comes with some ideas and suggestions that
            could help you in creating your website more professional.
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://masterpesa.netlify.app/'
            className='text-white underline hover:text-gray-300 y-3'
          >
            Open This Project
          </a>
        </div>
        <div className='border-b border-white pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              NFT Smart Contract(Solidity)
            </span>{' '}
            <br /> Developed For Fun
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            You can play with this NFT contract by sending any amount of ERC721
            tokens to the contract, transferring them through the
            balanceInjection method. Place an order in our store and check out!
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/JohnBashombe/NFT-in-solidity'
            className='text-white underline hover:text-gray-300 y-3'
          >
            Open On GitHub
          </a>
        </div>
        <div className='border-b border-white pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              Backend App for Masterpesa (PHP - Laravel 9)
            </span>{' '}
            <br /> Contractor
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            I worked as a contractor for this financial company based in
            Tanzania. I was responsible for building out the backend API using
            PHP (Laravel 9) and MySQL, with the goal of making it easier for
            their clients to submit quotes, view their quotes and account
            balances, among other things.
          </p>
        </div>
        <div className='pb-8'>
          <p className='text-sm font-normal'>
            <span className='font-bold uppercase text-base'>
              Dashboard Web App for Masterpesa (React JS)
            </span>{' '}
            <br /> Contractor
          </p>
          <p className='text-base pt-2 pb-4 font-light text-justify'>
            I have built a dashboard in React JS to help the system admin to
            easily manage all the transactions that are happening within their
            system. The dashboard can be customized according to the user's
            requirements and it implements all the features as per their need as
            well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
