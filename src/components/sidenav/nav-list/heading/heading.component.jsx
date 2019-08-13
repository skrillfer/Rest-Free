import React from 'react';
import './heading.styles.scss';
const Heading = ({title}) =>(
    <li className="__heading">{title}<i className="far fa-file-alt"></i></li>
);
export default Heading;