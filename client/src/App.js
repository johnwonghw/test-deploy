import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    stuff: 'd'
  }

  getInfo = () => {
    // Get the passwords and store them in state
    fetch('/api/match-list')
      .then(res => res.json())
      .then(res => {
        this.setState({ stuff: res.halo })
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          {this.state.stuff}
          
        <div onClick={this.getInfo}>click here</div>
        </header>
      </div>
    );
  }
}

export default App;
