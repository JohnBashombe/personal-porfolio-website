/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import { Menu } from '../lib/data';
import { useRouter } from 'next/router';
import { ITopMenu } from '../lib/types';
import { FaTimes } from 'react-icons/fa';
import { DrawerState, TopMenuState } from '../lib/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Drawer = (): JSX.Element => {
  const setDrawerState = useSetRecoilState(DrawerState);
  const setTopMenuState = useSetRecoilState<ITopMenu>(TopMenuState);
  const { menu }: ITopMenu = useRecoilValue<ITopMenu>(TopMenuState);
  const router = useRouter();

  return (
    <div className='w-full h-full bg-black z-[99] text-white max-h-screen absolute overflow-y-auto no-scrollbars px-10 md:px-16 py-10'>
      <div className='flex flex-col w-full h-full justify-start items-end'>
        <FaTimes
          className='text-4xl md:text-5xl cursor-pointer'
          onClick={() => setDrawerState({ showDrawer: false })}
        />
        <div className='flex flex-col space-y-3 justify-center items-end my-10 px-2'>
          {Menu.map((value, index) => (
            <p
              key={index}
              onClick={() => {
                setDrawerState({ showDrawer: false });
                setTopMenuState({ menu: value.title });
                void router.push(value.href);
              }}
              className={
                `py-2 cursor-pointer text-lg ` +
                (menu === value.title
                  ? 'border-b-4 border-white text-white font-bold '
                  : 'border-none text-gray-400')
              }
            >
              {value.title}
            </p>
          ))}
        </div>
        <div
          onClick={() => setDrawerState({ showDrawer: false })}
          className='block py-5 px-14 bg-white text-black text-lg font-bold cursor-pointer'
        >
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
