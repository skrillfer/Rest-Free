import React from 'react';

const SubList = ({children})=>(
    <ul className="subList subList--hidden">
        {children}
    </ul>
);

export default SubList;