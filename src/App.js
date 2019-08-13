import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import NavList from './components/sidenav/nav-list/nav-list.component';
import Heading from  './components/sidenav/nav-list/heading/heading.component';
import SubHeading from './components/sidenav/nav-list/sub-heading/sub-heading.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
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
      <div>
        <Header currentUser={this.state.currentUser} />
        <NavList>
          <Heading title={'Reports'}/>
          <SubHeading  title={'Products'}>
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
        
        <Switch>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
