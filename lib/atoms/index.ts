import { atom } from 'recoil';
import { Menu } from '../data';
import { IDrawer, ITopMenu } from '../types';

export const DrawerState = atom<IDrawer>({
    key: 'drawerState',
    default: { showDrawer: false }
})

export const TopMenuState = atom<ITopMenu>({
    key: 'topMenuState',
    default: { menu: Menu[0].title }
})
