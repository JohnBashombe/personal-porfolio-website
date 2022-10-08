import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const Skiils = (): JSX.Element => {
  return (
    <div className='flex flex-col w-2/3 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16'>
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
        <Skills title='Operating Systems' data={['Linux(Ubuntu), Windows']} />
        <Skills title='Code Editors' data={['Visual Studio Code, Eclipse']} />
        <Skills title='Version Control' data={['Git, GitHub, GitLab']} />
        <Skills
          title='Deployment'
          data={['Linux, Netlify, Vercel, Firebase, Hostinger']}
        />
        <Skills title='Browsers' data={['Google Chrome, Firefox']} />
      </div>
    </div>
  );
};

export default Skiils;

const Item = ({ title }: { title: string }) => {
  return (
    <div className='flex space-x-2 justify-center md:justify-start items-center text-lg text-gray-600 w-full cursor-pointer'>
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
    <div className='flex flex-col justify-center items-center md:justify-start md:items-start space-y-4 w-full'>
      <p className='text-2xl text-black font-bold'>{title}</p>
      <div className='grid grid-cols-1 gap-5 w-full'>
        {data.map((value, index) => (
          <Item key={index} title={value} />
        ))}
      </div>
    </div>
  );
};
