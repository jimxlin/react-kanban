import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Card({}) {
  return (

  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.num.isRequired
}

export default Card;
