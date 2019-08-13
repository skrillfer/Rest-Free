import React from 'react';
import './sidenav.styles.scss';
const SideNav = ({children}) =>(
    <aside class="sidenav">
        {children}
    </aside>
);
export default SideNav;