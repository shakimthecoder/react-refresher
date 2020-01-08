import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
 super();

 this.state = {
   string: 'Shakim is a millionaire'
 };
}
    
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => this.setState({ string: 'Shakim is rich' })}>
            Shakim is amazing
            </button>
        </header>
      </div>
    );
  }
  }


export default App;
