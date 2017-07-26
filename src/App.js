import React, { Component } from 'react';
import './App.css';

const boards = [
  {name: todo,  order: 0, cards: []},
  {name: doing, order: 1, cards: []},
  {name: done,  order: 2, cards: []}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: boards,
      cardCount: 0  // for creating card id
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
