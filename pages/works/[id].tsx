import React from 'react';
import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import Footer from '../../components/Footer';
import Drawer from '../../components/Drawer';
import TopBar from '../../components/TopBar';
import { DrawerState } from '../../lib/atoms';
import Contact from '../../components/Contact';
/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the WorkDetails page
 * @returns {JSX.Element}: JSX Code for WorkDetails
 * @license MIT
 * @version 1.0.0
 */
const WorkDetails: NextPage = (): JSX.Element => {
  const { showDrawer } = useRecoilValue(DrawerState);
  return (
    <div className='flex flex-col w-full h-full min-h-screen bg-black text-white pb-20'>
      {showDrawer ? (
        <Drawer />
      ) : (
        <>
          <TopBar />
          <div className='flex flex-col w-full px-10 md:px-16 xl:px-28 pb-20'>
            <Slider />
            <Description />
          </div>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default WorkDetails;

const Slider = (): JSX.Element => {
  return (
    <div className='pt-10 md:py-10 flex flex-col'>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col uppercase text-4xl md:text-6xl lg:text-8xl font-bold w-full'>
          <p>Modern Market Concept</p>
        </div>
        <div className='w-full h-[500px] bg-gray-200'></div>
        <div className='flex w-full justify-center items-center space-x-4'>
          <div className='w-5 h-5 bg-gray-400 cursor-pointer hover:bg-white'></div>
          <div className='w-8 h-8 bg-white cursor-pointer hover:bg-white'></div>
          <div className='w-5 h-5 bg-gray-400 cursor-pointer hover:bg-white'></div>
        </div>
      </div>
    </div>
  );
};

const Description = (): JSX.Element => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-start items-center md:space-x-10 pt-10 w-full'>
      <div className='w-full xl:w-2/3 flex flex-col text-white space-y-5 mt-10 md:mt-0 text-base text-justify'>
        <p className='uppercase text-3xl font-bold'>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti obcaecati ea provident ad aliquam illo dolorem omnis, iste
          eligendi odio error alias numquam qui, voluptatem impedit commodi,
          harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit, nulla sapiente reiciendis ducimus, soluta praesentium
          voluptates quia quas quam, quod consequuntur voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti obcaecati ea provident ad aliquam illo dolorem omnis, iste
          eligendi odio error alias numquam qui, voluptatem impedit commodi,
          harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti obcaecati ea provident ad aliquam illo dolorem omnis, iste
          eligendi odio error alias numquam qui, voluptatem impedit commodi,
          harum a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
