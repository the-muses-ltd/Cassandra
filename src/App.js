import React from 'react';
import logo from './logo.svg';
import './App.css';
import { hashHistory } from 'react-router';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be Cassandra.
        </p>
        <button onClick={this.onClick(hashHistory.push("/addUser"))}>Add New user</button>
      </header>
    </div>
  );
}

export default App;
