import React, { Component } from 'react';
import Toggle from './compound-component/Toggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onToggle = on => console.log('toggle status is:', on);
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          01. Compound Component Demo
        </p>
        <Toggle onToggle={this.onToggle}>
          <Toggle.Button />
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
        </Toggle>
      </div>
    );
  }
}

export default App;
