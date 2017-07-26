import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card'

function Board({}) {
  return (

  );
}

Board.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
}
