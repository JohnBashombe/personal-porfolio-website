/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Drawer from '../../components/Drawer';
import TopBar from '../../components/TopBar';
import { DrawerState } from '../../lib/atoms';
import Contact from '../../components/Contact';
import AboutUs from '../../components/AboutUs';
import Dream from '../../components/Dream';
import Work from '../../components/Work';
import { refs } from '../../lib/data';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the Works page
 * @returns {JSX.Element}: JSX Code for Works
 * @license MIT
 * @version 1.0.0
 */
const Works: NextPage = (): JSX.Element => {
  const { showDrawer } = useRecoilValue(DrawerState);
  return (
    <div className='flex flex-col w-full h-full min-h-screen bg-black text-white pb-20'>
      {showDrawer ? (
        <Drawer />
      ) : (
        <>
          <TopBar />
          <div
            ref={refs[0]}
            className='flex flex-col w-full px-10 md:px-16 xl:px-28 pt-10'
          >
            <div className='flex flex-col uppercase text-4xl md:text-6xl lg:text-8xl font-bold my-2'>
              <p>All Works</p>
            </div>
            <MyWorks />
            <div className='w-full flex justify-center items-center py-10'>
              <button className='px-16 hover:bg-gray-200 bg-white text-black text-base font-bold py-4'>
                Load More
              </button>
            </div>
          </div>
          <div className='flex flex-col w-full px-10 md:px-16 xl:px-28 pb-20'>
            <AboutUs />
            <Dream />
            <Work />
          </div>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Works;

const MyWorks = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
      {new Array(4).fill('').map((_, key) => (
        <div
          key={key}
          onClick={() => void router.push(`/works/${key}`)}
          className='w-full bg-gray-200 h-96 cursor-pointer'
        ></div>
      ))}
    </div>
  );
};
