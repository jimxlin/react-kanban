import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kanbanApp from './reducers';
import App from './App';

it('renders without crashing', () => {
  const initialState = {
    boards: [
      { name: 'Todo',  id: 0 },
      { name: 'Doing', id: 1 },
      { name: 'Done',  id: 2 }
    ],
    cards: [
      { id: 0, boardId: 0, title: 'Sample Card A', timestamp: Date.now()},
      { id: 1, boardId: 1, title: 'Sample Card B', timestamp: Date.now()},
      { id: 2, boardId: 2, title: 'Sample Card C', timestamp: Date.now()}
    ]
  };
  let store = createStore(kanbanApp, initialState);;

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
