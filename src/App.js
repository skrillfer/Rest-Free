import React from 'react';
import './App.css';
import Firebase from 'firebase';
import {CardList} from './components/card-list/card-list.component.jsx';
import config from './firebase-conexion/config';
import {showItems} from './firebase-conexion/queries';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      elemnts:[]
    }
    this.firebaseApp=Firebase.initializeApp(config);
    this.db = this.firebaseApp.firestore();
  } 
  componentDidMount(){
    
    let self= this;
    showItems(this.db).then(result=>{ self.setState({elemnts:result})});
    
  }
  render(){
    const {elemnts}= this.state;
    return (
      <div className="App">
        <h1>Rest Free</h1>
        <h3>Items</h3>
        <CardList monsters={elemnts}></CardList>
      </div>
    );
  }

  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }
}
export default App;
