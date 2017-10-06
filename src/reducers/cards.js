import * as types from '../constants/ActionTypes';

const initialState = [
  { id: 0, boardId: 0, text: 'Sample card A', timestamp: Date.now()},
  { id: 1, boardId: 1, text: 'Sample card B', timestamp: Date.now()},
  { id: 2, boardId: 2, text: 'Sample card C', timestamp: Date.now()}
]

const cards = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_CARD:
      if (action.text === '' || action.text.match(/^\s+$/) return state;
			return [...state,
				{
					id: action.id,
					boardId: action.boardId,
					text: action.text
				}
			];
		case types.MOVE_CARD:
			return state.map(card =>
				card.id === action.id
				? {...card, boardId: card.boardId + action.direction}
				: card
			);
		case types.DELETE_CARD:
			return state.filter(card =>
				card.id !== action.id
			);
		default:
			return state
	}
}

export default cards;
