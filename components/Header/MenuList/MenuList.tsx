import React, {useState} from 'react';
import Link from "next/link";
import classes from "./menuList.module.scss"


export const MenuList = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    return (
        <nav>
            <div className={classes.desktopMenu}>
                <Link href="/">
                    <a className={classes.listMenu}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={classes.listMenu}>About</a>
                </Link>
            </div>


            <div className={classes.mobileMenu}>
                <p className={classes.listMenu} onClick={toggling}>Menu</p>
                {isOpen && (
                    <div className={classes.overlay}>
                        <Link href="/">
                            <a className={classes.overlayMenu}>Home</a>
                        </Link>
                        <Link href="/about">
                            <a className={classes.overlayMenu}>About</a>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};
