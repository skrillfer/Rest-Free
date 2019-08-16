import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import OrdersPage from './pages/restaurant-orders/restaurant-orders.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument,deleteRest,getAllRest } from './firebase/firebase.utils';

import GridContainer from './components/grid-container/grid-container.component';

import SideNav  from './components/sidenav/sidenav-component';
import NavList from './components/sidenav/nav-list/nav-list.component';
import Heading from  './components/sidenav/nav-list/heading/heading.component';
import SubHeading from './components/sidenav/nav-list/sub-heading/sub-heading.component';
import { FiCast } from "react-icons/fi";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    getAllRest().then(value=>{
        value.forEach(element => {
            if(element=="opimWyCY5tNKY7ZdQqsN"){
              console.log(element);
            }else{
              console.log('a eliminar');
            }
        });
    });
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      console.log(userAuth);
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <GridContainer>
        <Header currentUser={this.state.currentUser} />
        
        <SideNav>
          <NavList>
            <Heading title={'Reports'}/>
            <SubHeading  title={'Products'} icon={<FiCast/>}>
                  <li className="subList__item">medical</li>
                  <li className="subList__item">vision</li>
                  <li className="subList__item">dental</li>
            </SubHeading>
            
            <Heading title={'Kitchen'}/>
            <SubHeading  title={'Orders'}>
                  <li className="subList__item">In Kitchen</li>
                  <li className="subList__item">Delivered</li>
                  <li className="subList__item">Waiting</li>
            </SubHeading>
            
          </NavList>  
        </SideNav>
        <Switch>
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/orders' component={OrdersPage} />
        </Switch>
      </GridContainer>
    );
  }
}

export default App;
