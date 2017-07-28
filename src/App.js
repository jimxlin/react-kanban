import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';

const sampleCards = [
  { id: 0, boardId: 0, title: 'Sample card A', body: 'Sample card body', timestamp: Date.now()},
  { id: 1, boardId: 1, title: 'Sample card B', body: 'Sample card body', timestamp: Date.now()},
  { id: 2, boardId: 2, title: 'Sample card C', body: 'Sample card body', timestamp: Date.now()},
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
      cards: sampleCards,
      cardCount: 3  // for creating card id
    };
  }

  handleCreateCard(event) {

  }

  handleMoveCard(event) {

  }

  handleDeleteCard(event) {

  }

  // this doesn't work?
  handleMoveLeft = (cardId) => {
    this.setState(prevState => {
      var ary = prevState.cards.map(card =>
        card.id === cardId
        ? {...card, boardId: card.boardId--}
        : card
      )
      return {
        cards: ary 
      }
    });
  }

  handleMoveRight = (cardId) => {
    this.setState(prevState => (
      prevState.cards.map(card =>
        card.id === cardId
        ? {...card, boardId: card.boardId++}
        : card
      )
    ));
  }

  render() {
    const divBoards = this.state.boards.map(board =>
      <Board key={board.id.toString()}
        id={board.id}
        name={board.name}
        cards={this.state.cards.filter(card =>
          card.boardId === board.id
        )}
        moveLeft={this.handleMoveLeft}
        moveRight={this.handleMoveRight}
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
