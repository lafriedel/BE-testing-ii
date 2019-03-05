import React, { Component } from 'react';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  state = {
    balls: "",
    strikes: "0",
  }
  render() {
    return (
      <div className="App">
        <Display strikes={this.state.strikes} />
        <Dashboard />

      </div>
    );
  }
}

export default App;
