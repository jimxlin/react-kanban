import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';

const sampleCards = [
  { id: 0, title: 'Sample card', body: 'Sample card body', timestamp: Date.now()},
  { id: 1, title: 'Sample card', body: 'Sample card body', timestamp: Date.now()},
  { id: 2, title: 'Sample card', body: 'Sample card body', timestamp: Date.now()},
]

const boards = [
  { name: 'Todo',  id: 0, cards: [sampleCards[0]] },
  { name: 'Doing', id: 1, cards: [sampleCards[1]] },
  { name: 'Done',  id: 2, cards: [sampleCards[2]] }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: boards,
      cardCount: 3  // for creating card id
    };
  }
  render() {
    const divBoards = this.state.boards.map(board =>
      <Board key={board.id}
        name={board.name}
        cards={board.cards}
      />
    );
    return (
      <div className="App">
        {divBoards}
      </div>
    );
  }
}

export default App;
