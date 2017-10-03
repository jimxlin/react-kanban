import React, { Component } from 'react';
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

class Card extends Component {
  moveCardLeft = () => {
    this.props.moveCard(this.props.id, -1)
  }
  moveCardRight = () => {
    this.props.moveCard(this.props.id, 1)
  }
  deleteCard = () => {
    this.props.deleteCard(this.props.id)
  }
  render() {
    const time = new Date(this.props.timestamp);
    return (
      <li style={listStyle} id={this.props.id}>
        <a href="#delete" style={{float: 'right'}}
          onClick={this.deleteCard}>
          [X]
        </a>
        <b style={titleStyle}>{this.props.title}</b>
        <br />
        <i style={timestampStyle}>{time.toString()}</i>
        <br />
        <div style={moveDivStyle}>
          {this.props.boardId > 0 &&
            <a href="#moveLeft" style={{float: 'left'}}
              onClick={this.moveCardLeft}>
              [move left]
            </a>
          }
          {this.props.boardId < 2 &&
            <a href="#moveRight" style={{float: 'right'}}
              onClick={this.moveCardRight}>
              [move right]
            </a>
          }
        </div>
      </li>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
}

export default Card;
