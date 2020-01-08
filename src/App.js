import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
 super();

 this.state = {
   monsters: [
   {
    name: 'Frankenstein', 
    id: 'fda2111'
   },
   {
   
    name: 'Dracula',
    id: 'fda2117'
   },
   {
   
    name: 'James',
    id: 'fda217777711'
   },
   {
   
    name: 'Ghost'
   }
  ]
 }; 
}   

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response));
}
  render() {

    return (
      <div className="App">
        { this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)}
      </div>
    );
  }
  }


export default App;
