import React from 'react';
import classes from "../../../styles/components/Header/logo.module.scss"

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.yellowRectangle}>
                we
            </div>
            <p className={classes.words}>Rdevs</p>
        </div>
    );
};
