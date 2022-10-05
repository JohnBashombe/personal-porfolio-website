import { MutableRefObject } from "react";

type IMenu = { title: string, href: string };

export const Menu: IMenu[] = [
    { title: 'Home', href: "/#home" },
    { title: 'About Us', href: "/#about" },
    { title: 'Service', href: "/#service"},
    { title: 'Works', href: "/#works" },
];

  export const refs: MutableRefObject<HTMLDivElement>[] = [];
