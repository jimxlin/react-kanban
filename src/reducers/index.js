import { combineReducers } from 'redux';
import cards from './cards';
import boards from './boards';

const kanbanApp = combineReducers({
  cards,
  boards
});

export default kanbanApp;
