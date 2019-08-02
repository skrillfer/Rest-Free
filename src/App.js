import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import Firebase from './firebase-conexion/config';
import {getPropertyOfCollection,getAllOrdersWaiter} from './firebase-conexion/queries';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      elemnts:[]
    }
    this.dbContext = new Firebase();
  } 
  componentDidMount(){
    
    getAllOrdersWaiter(this.dbContext.db,"opimWyCY5tNKY7ZdQqsN");

    //this.getAllOrdersWaiter();
    
    /*getCollectionByCondition(
      this.dbContext.db,
      "items",
      {field:"name", operator:"==", value:"Coca Cola"}
    ).then(
      results=>{
        results=results.map((obj,index)=> ({ ...obj, id: index }));
        this.setState({elemnts:results})

      }
    );*/
  }

  getAllOrdersWaiter=()=>{
    getPropertyOfCollection(this.dbContext.db,"waiters","YmSHfgWhrbgRHYgxswGN","orders")
    .then(
      results => {
        return results;
      }
    );
    
  }

  getAllOrdersCookingWaiter(){
    
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

}
export default App;
