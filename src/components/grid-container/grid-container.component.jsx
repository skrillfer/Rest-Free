import React from 'react';
import './grid-container.styles.scss';
const GridContainer = ({children}) =>(
    <div className="grid">
        {children}
    </div>
)

export default GridContainer;