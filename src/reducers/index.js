import { combineReducers } from 'redux';
import cards from './cards';

const kanbanApp = combineReducers({
  cards
});

export default kanbanApp;
