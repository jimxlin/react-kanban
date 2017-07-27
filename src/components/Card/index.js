import React from 'react';
import PropTypes from 'prop-types';

const listStyle = {
  padding: '10px',
  backgroundColor: '#e6f2ff',
  borderStyle: 'solid',
  borderColor: '#0066ff',
  borderRadius: '5px',
  borderWidth: '1px',
  textAlign: 'left'
}

const titleStyle = {
  fontSize: '18px'
}

const bodyStyle = {
  fontSize: '14px'
}

const timestampStyle = {
  fontSize: '10px'
}

function Card({ boardId, id, title, body, timestamp }) {
  const

  const time = new Date(timestamp);
  return (
    <li style={listStyle}>
      <b style={titleStyle}>{title}</b>
      <p style={bodyStyle}>{body}</p>
      <i style={timestampStyle}>{time.toString()}</i>
    </li>
  );
}

Card.propTypes = {
  boardId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  // PropTypes.func.isRequired
}

export default Card;
