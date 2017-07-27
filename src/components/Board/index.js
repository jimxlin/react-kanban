import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import Card from '../Card'

const colStyle = {
  padding: '10px',
  textAlign: 'center'
}

const ulStyle = {
  listStyle: 'none',
  margin: '0 10px 10px 10px',
  padding: '0'
}

function Board({ id, name, cards }) {
  const listCards = cards.map(card =>
    <Card key={card.id.toString()}
      id={card.id}
      boardId={id}
      title={card.title}
      body={card.body}
      timestamp={card.timestamp}
    />
  );
  return (
    <Col xs={4} style={colStyle}>
      <h1>{name}</h1>
      <hr />
      <ul style={ulStyle}>
        {listCards}
      </ul>
    </Col>
  );
}

Board.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  // PropTypes.func.isRequired
}

export default Board;