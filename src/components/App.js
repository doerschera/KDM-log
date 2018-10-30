import React, { Component } from 'react';
import SurvivorList from './SurvivorList';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SurvivorList />
      </div>
    );
  }
}

export default App;
