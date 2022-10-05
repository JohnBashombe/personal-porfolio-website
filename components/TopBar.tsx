/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Menu, refs } from '../lib/data';
import { ITopMenu } from '../lib/types';
import { CgMenuRight } from 'react-icons/cg';
import React, { MutableRefObject, useRef } from 'react';
import { DrawerState, TopMenuState } from '../lib/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const TopBar = (): JSX.Element => {
  const setDrawerState = useSetRecoilState(DrawerState);
  const setTopMenuState = useSetRecoilState<ITopMenu>(TopMenuState);
  const { menu }: ITopMenu = useRecoilValue<ITopMenu>(TopMenuState);
  const Home = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const About = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const Service = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const Works = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  refs[0] = Home;
  refs[1] = About;
  refs[2] = Service;
  refs[3] = Works;

  const scrollDown = (ref: MutableRefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div
      ref={refs[0]}
      className='flex justify-between items-center px-10 md:px-16 xl:px-28 py-10 '
    >
      <p className='font-bold text-4xl md:text-5xl cursor-pointer'>
        {/* Ntavigwa Bashombe */}
      </p>
      <div className='hidden lg:flex space-x-4 justify-center items-center w-full'>
        {Menu.map((value, index) => (
          <a
            key={index}
            href={value.href}
            onClick={() => {
              scrollDown(refs[index]);
              setTopMenuState({ menu: value.title });
            }}
            className={
              `py-2 cursor-pointer text-base md:text-lg animation classic ` +
              (menu === value.title
                ? 'border-b-4 border-white text-white font-bold '
                : 'border-none text-gray-400')
            }
          >
            {value.title}
          </a>
        ))}
      </div>
      <div className='hidden lg:block bg-transparent text-black text-base font-bold cursor-pointer animation classic infinite'>
        {/* <p>Contact Me</p> */}
      </div>
      <div className='lg:hidden flex justify-end items-center'>
        <CgMenuRight
          className='text-5xl md:text-5xl hover:text-gray-200'
          onClick={() => setDrawerState({ showDrawer: true })}
        />
      </div>
    </div>
  );
};

export default TopBar;
