import React from 'react';

const About = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center text-2xl text-justify w-2/3 mx-auto'>
      <p>
        I am a Alumni at{' '}
        <b>Faculty of Science & Technology in Computer Science ( 3 Years )</b>{' '}
        at International University of East Africa. All of my projects are built
        with the goal to make software more accessible to people who could not
        use it before. I am a competitive programmer, always eager to learn more
        and explore new technologies. <br /> I have{' '}
        <b>about 4 years of experience</b> in Java, JavaScript, Typescript, Next
        JS, React PHP, SQL, Firebase, JS, Node JS, MySQL, and quite enough
        knowledge in Rust, Dart, Solidity, MongoDB and Linux.
      </p>
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
          className='text-white font-bold hover:underline hover:text-gray-400 text-sm md:text-base'
        >
          Click here to verify
        </a>
      </div>
    </div>
  );
};

export default About;
