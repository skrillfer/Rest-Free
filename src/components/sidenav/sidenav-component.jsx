import React from 'react';
import './sidenav.styles.scss';
const SideNav = ({children}) =>(
    <aside className="sidenav">
        {children}
    </aside>
);
export default SideNav;