import React from 'react';
import PropTypes from 'prop-types';
import BoardContainer from '../../containers/BoardContainer';

const Wall = props => {
  const boards = props.boards.map(board =>
    <BoardContainer
      key={board.id.toString()}
      board={board}
    />
  );
  return (
    <div className="wall">
      {boards}
    </div>
  );
};

Wall.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object)
};

export default Wall;
