import React from 'react';
import './App.css';

import BoardContainer from './containers/BoardContainer';

const App = () => {
	const boardState = [
    { name: 'Todo',  id: 0 },
    { name: 'Doing', id: 1 },
    { name: 'Done',  id: 2 }
  ];
	// const boards = store.getState().boards.map(board =>
	const boards = boardState.map(board =>
    <BoardContainer
			key={board.id.toString()}
      id={board.id}
    />
	);
	return (
		<div className="App">
			{boards}
		</div>
	);
};

export default App;
