import React from 'react';
import './nav-list.styles.scss';

const NavList = (props) =>(
    <div className="row row--align-v-center row--align-h-center">
        <ul className="navList"> 
            {props.children}
        </ul>
    </div>
    
);

export default NavList;
