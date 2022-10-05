import React from 'react';
import { refs } from '../lib/data';
import { FaDotCircle } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPhp,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiGitlab,
  SiMongodb,
  SiSqlite,
  SiDocker,
  SiFigma,
  SiVercel,
  SiMysql,
  SiNetlify,
  SiVisualstudiocode,
} from 'react-icons/si';

const Dream = (): JSX.Element => {
  return (
    <div
      ref={refs[2]}
      className='flex flex-col pt-16 md:pt-28 space-y-10 w-full md:w-1/2 mx-auto'
    >
      <p className='font-bold pb-8 text-5xl text-white uppercase text-center'>
        Tools and Technologies
      </p>
      <div className='grid grid-cols-1 w-full gap-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 text-7xl text-white text-center w-full'>
          <SiTypescript className='animation classic' />
          <SiJavascript className='animation classic' />
          <SiJava className='animation classic' />
          <SiPhp className='animation classic' />
          <SiNodedotjs className='animation classic' />
          <SiNextdotjs className='animation classic' />
          <SiReact className='animation classic' />
          <SiFlutter className='animation classic' />
          <SiTailwindcss className='animation classic' />
          <SiGit className='animation classic' />
          <SiGithub className='animation classic' />
          <SiGitlab className='animation classic' />
          <SiMongodb className='animation classic' />
          <SiSqlite className='animation classic' />
          <SiDocker className='animation classic' />
          <SiFigma className='animation classic' />
          <SiVercel className='animation classic' />
          <SiMysql className='animation classic' />
          <SiNetlify className='animation classic' />
          <SiVisualstudiocode className='animation classic' />
        </div>
        <div className='flex flex-col space-y-8'>
          <p className='text-gray-400 text-justify text-base'>
            I usually work on a variety of projects and cover all domains from
            backend to frontend. <br /> On one hand you will have web-based
            apps, on the other hand perhaps you need to write logic for your
            application or connect a third party service to it.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            <Skills
              title='Programming Languages'
              data={['TypeScript, Javascript, PHP, Java, Dart']}
            />
            <Skills
              title='Backend Technologies'
              data={['Node JS, Laravel, Next JS API']}
            />
            <Skills
              title='Frontend Technologies'
              data={[
                'Next JS, React JS, Flutter, HTML 5, CSS 3, Figma, Tailwind CSS',
              ]}
            />
            <Skills
              title='Database Technologies'
              data={['MySQL, MySQLi, Firebase, Mongo DB']}
            />
            <Skills
              title='Operating Systems'
              data={['Linux(Ubuntu), Windows']}
            />
            <Skills
              title='Code Editors'
              data={['Visual Studio Code, Eclipse']}
            />
            <Skills title='Version Control' data={['GitHub, GitLab']} />
            <Skills title='Deployment' data={['Linux, Netlify, Vercel']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;

const Item = ({ title }: { title: string }) => {
  return (
    <div className='flex space-x-2 justify-start items-center text-base text-gray-400 w-full cursor-pointer'>
      <FaDotCircle />
      <p>{title}</p>
    </div>
  );
};

type ISkills = {
  title: string;
  data: string[];
};

const Skills = ({ title, data }: ISkills) => {
  return (
    <div className='flex flex-col space-y-4 w-full'>
      <p className='text-xl text-gray-100 font-bold'>{title}</p>
      <div className='grid grid-cols-1 gap-5 w-full'>
        {data.map((value, index) => (
          <Item key={index} title={value} />
        ))}
      </div>
    </div>
  );
};
