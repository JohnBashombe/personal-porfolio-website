import { MutableRefObject } from "react";

type IMenu = { title: string, href: string };

export const Menu: IMenu[] = [
    { title: 'Home', href: "/#home" },
    { title: 'About Me', href: "/#about" },
    { title: 'Skills', href: "/#skills"},
    { title: 'Works', href: "/#works" },
];

  export const refs: MutableRefObject<HTMLDivElement>[] = [];
