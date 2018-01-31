import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kanbanApp from './reducers';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  boards: [
    { name: 'Todo',  id: 1 },
    { name: 'Doing', id: 2 },
    { name: 'Done',  id: 3 }
  ],
  cards: [
    { id: 1, boardId: 1, title: 'Sample Card A', timestamp: Date.now()},
    { id: 2, boardId: 2, title: 'Sample Card B', timestamp: Date.now()},
    { id: 3, boardId: 3, title: 'Sample Card C', timestamp: Date.now()}
  ]
};

let store = createStore(
  kanbanApp, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
