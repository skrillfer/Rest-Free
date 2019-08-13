import React from 'react';
import './nav-list.styles.scss';

const NavList = (props) =>(
    <ul className="navList"> 
        {props.children}
    </ul>
);

export default NavList;
