import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { CardList, BoardCol } from './styledComponents';
import Card from '../Card';

class Board extends Component {
  addCard = () => {
    this.props.addCard(this.props.id, this.titleInput.value);
    this.titleInput.value = null;
  };

  render() {
    const listCards = this.props.cards.map(card =>
      <Card key={card.id.toString()}
        boardId={card.boardId}
        id={card.id}
        title={card.title}
        timestamp={card.timestamp}
        moveCard={this.props.moveCard}
        deleteCard={this.props.deleteCard}
      />
    );
    return (
      <BoardCol xs={4} id={this.props.id} className={"board"}>
        <h1>{this.props.name}</h1>
        <hr style={{borderColor: '#000'}}/>
        <CardList>
          {listCards}
        </CardList>
        <label>
          Card Title: &nbsp;
          <input type="text" ref={input => this.titleInput = input} />
        </label>
        <Button onClick={this.addCard} className={"add-card-btn"}>
          Add Card
        </Button>
      </BoardCol>
    );
  }
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  addCard: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
}

export default Board;
