import React from 'react';
import './sub-list.styles.scss';
const SubList = (props)=>(   
    <ul className={`subList subList${props.Visibility?'--hidden':''}`}>
        {props.children}
    </ul>
)
export default SubList;