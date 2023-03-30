import './App.css';
import React, { Component } from 'react'
import Counters from './Components/Counters';
import Navbar from './Components/navbar';

class App extends Component{
  state = { 
    counters:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ]
 };

 handleClick = c => {
   // console.log(c);
   // take the existing counters
    const counters = [...this.state.counters];
    // get the index value of the button clicked
    const index = counters.indexOf(c);
    // increment corresponding value
    counters[index] = {...c};
    counters[index].value++;
    // update the state using setState
    this.setState({counters: counters})
 }

 handleReset = () => {
    const counter = this.state.counters.map(c => {
        c.value =0;
        return c;
    });
    this.setState({counters: counter});
 }

 handleDelete = (cId) => {
    console.log("event called");
    //we do not alter the existing counters array, instead we create a new array with the
    //filtered value and update the existing counters array using set state
    const counters = this.state.counters.filter(c => c.id !== cId);
    this.setState({counters: counters})
 }
 render(){
   return (
    <div className="App">
      <Navbar 
      totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onClick={this.handleClick}
      onDelete={this.handleDelete}/>
    </div>
  );
 }
 
}

export default App;
