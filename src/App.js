import React, { Component } from 'react';
import './App.css';

const boards = {
  todo: [],
  doing: [],
  done: []
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards,
      cardCount: 0
    };
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
