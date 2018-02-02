import React, { Component } from 'react';
import './App.css';
import Users from './Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Users</h1>
        </header>
        <Users />
      </div>
    );
  }
}

export default App;
