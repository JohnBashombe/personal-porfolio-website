import React from 'react';
import { NextPage } from 'next';
import Work from '../components/Work';
import { useRecoilValue } from 'recoil';
import Dream from '../components/Dream';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import TopBar from '../components/TopBar';
import { DrawerState } from '../lib/atoms';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Projects from '../components/projects';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the Home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home: NextPage = (): JSX.Element => {
  const { showDrawer } = useRecoilValue(DrawerState);
  return (
    <div className='flex flex-col w-full h-full min-h-screen bg-gray-900 awesome text-white font-signika'>
      {showDrawer ? (
        <Drawer />
      ) : (
        <>
          <TopBar />
          <div className='flex flex-col w-full px-10 md:px-16 xl:px-28 pb-20'>
            <Header />
            <AboutUs />
            <Dream />
            <Work />
            <Projects />
          </div>
          <Contact />
        </>
      )}
    </div>
  );
};

export default Home;
