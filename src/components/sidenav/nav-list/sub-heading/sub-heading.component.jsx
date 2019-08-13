import React,{useState} from 'react';
import './sub-heading.styles.scss';
import SubList  from '../sub-list/sub-list.component';

const SubHeading = ({title,icon,children}) =>{
  const [visibility, setVisibility] = useState(true);
  return(
      <React.Fragment>
        <div className= {`__subheading row row--align-v-center${visibility?'':' __subheading--open'}`}
             onClick={()=>{setVisibility(!visibility); }} >
          {icon?<span>{icon}</span>
          :null}
          <span className="__subheading-title">{title}</span>
        </div>

        <SubList Visibility={visibility}>
          {children}
        </SubList>
        
      </React.Fragment>
  )
};

export default SubHeading;