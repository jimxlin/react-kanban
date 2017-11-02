import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardListItem, CardTitle, Timestamp, MoveCardWrapper } from './styledComponents';

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
      <CardListItem id={'card'+this.props.id} className={"card"}>
        <a href="#delete" className={"delete-card-btn"} style={{float: 'right'}}
          onClick={this.deleteCard}>
          [X]
        </a>
        <CardTitle className={"card-title"}>{this.props.title}</CardTitle>
        <Timestamp className={"card-timestamp"}>{time.toString()}</Timestamp>
        <MoveCardWrapper>
          {this.props.boardId > 0 &&
            <a href="#moveLeft" className={"move-card-left-btn"} style={{float: 'left'}}
              onClick={this.moveCardLeft}>
              [move left]
            </a>
          }
          {this.props.boardId < 2 &&
            <a href="#moveRight" className={"move-card-right-btn"} style={{float: 'right'}}
              onClick={this.moveCardRight}>
              [move right]
            </a>
          }
        </MoveCardWrapper>
      </CardListItem>
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
