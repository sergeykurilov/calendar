import React from 'react';
import {Logo} from "./Logo/Logo";
import {MenuList} from "./MenuList/MenuList";
import classes from "./header.module.scss"
import Link from 'next/link';

export const Header = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo/>
                </a>
            </Link>
            <MenuList/>
        </header>
    );
};

