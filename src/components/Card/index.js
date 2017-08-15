import React from 'react';
import PropTypes from 'prop-types';

const listStyle = {
  marginBottom: '15px',
  padding: '10px 10px 30px 10px',
  backgroundColor: '#FDFEFE',
  borderStyle: 'solid',
  borderColor: '#000',
  borderRadius: '5px',
  borderWidth: '1px',
  textAlign: 'left'
}

const titleStyle = {
  fontSize: '18px'
}

const timestampStyle = {
  fontSize: '10px',
}

const moveDivStyle = {
  paddingTop: '5px',
  marginTop: '5px',
  borderTopStyle: 'solid',
  borderTopWidth: '1px'
}

function Card({ boardId, id, title, body, timestamp, moveCard, deleteCard }) {
  const time = new Date(timestamp);
  return (
    <li style={listStyle} id={id}>
      <a href="#" style={{float: 'right'}}
        onClick={() => deleteCard(id)}
        >[X]</a>
      <b style={titleStyle}>{title}</b>
      <br />
      <i style={timestampStyle}>{time.toString()}</i>
      <br />
      <div style={moveDivStyle}>
        {boardId > 0 &&
          <a href="#" style={{float: 'left'}}
            onClick={() => moveCard(id, -1)}>
            [move left]
          </a>
        }
        {boardId < 2 &&
          <a href="#" style={{float: 'right'}}
            onClick={() => moveCard(id, 1)}>
            [move right]
          </a>
        }
      </div>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
}

export default Card;
