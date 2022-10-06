import { MutableRefObject } from "react";

type IMenu = { title: string, href: string };

export const Menu: IMenu[] = [
    { title: 'Home', href: "/#home" },
    { title: 'About Me', href: "/#about" },
    { title: 'Skills', href: "/#skills"},
    { title: 'Experience', href: "/#experience" },
    { title: 'Achievements', href: "/#achievements" },
];

  export const refs: MutableRefObject<HTMLDivElement>[] = [];
