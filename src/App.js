import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';

const sampleCards = [
  { id: 0, boardId: 0, title: 'Sample card A', timestamp: Date.now()},
  { id: 1, boardId: 1, title: 'Sample card B', timestamp: Date.now()},
  { id: 2, boardId: 2, title: 'Sample card C', timestamp: Date.now()},
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

  handleCreateCard = (boardId, inputRef) => {
    const title = inputRef.value;
    inputRef.value = '';
    if (title == '' || title.search(/\A\s+\Z/)) return;
    this.setState(prevState => ({
      cards: [...prevState.cards, {
        id: prevState.cardCount,
        boardId: boardId,
        title: title,
        timestamp: Date.now()
      }],
      cardCount: prevState.cardCount + 1
    }));
  }

  handleDeleteCard = (cardId) => {
    this.setState(prevState => ({
      cards: prevState.cards.filter(card => card.id !== cardId)
    }));
  }

  handleMoveCard = (cardId, direction) => {
    this.setState(prevState => ({
      cards: prevState.cards.map(card =>
        card.id === cardId
        ? { ...card, boardId: card.boardId + direction }
        : card
      )
    }));
  }

  render() {
    const divBoards = this.state.boards.map(board =>
      <Board key={board.id.toString()}
        id={board.id}
        name={board.name}
        cards={this.state.cards.filter(card =>
          card.boardId === board.id
        )}
        moveCard={this.handleMoveCard}
        deleteCard={this.handleDeleteCard}
        createCard={this.handleCreateCard}
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
