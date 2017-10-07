import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import Card from '../Card'

const ulStyle = {
  listStyle: 'none',
  margin: '0 10px 10px 10px',
  padding: '0'
}

const hrStyle = {
  borderColor: '#000'
}

const colColor = {0: '#F9E79F', 1: '#82E0AA', 2: '#85C1E9'}

class Board extends Component {
  addCard = () => {
    this.props.addCard(this.props.id, this.titleInput.value);
    this.titleInput.value = null;
  }

  render() {
    const colStyle = {
      padding: '10px',
      textAlign: 'center',
      height: '100%',
      backgroundColor: colColor[this.props.id]
    };
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
      <Col xs={4} style={colStyle}>
        <h1>{this.props.name}</h1>
        <hr style={hrStyle}/>
        <ul style={ulStyle}>
          {listCards}
        </ul>
        <label>
          Card Title:
          <input type="text" ref={input => this.titleInput = input} />
          <button onClick={this.addCard}>
            Add Card
          </button>
        </label>
      </Col>
    );
  }
}

Board.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  addCard: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
}

export default Board;
