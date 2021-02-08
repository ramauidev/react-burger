import React from 'react';

import buregerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={buregerLogo} alt="BurgerLogo" / >
    </div>
);

export default logo;