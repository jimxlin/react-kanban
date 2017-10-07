import * as types from '../constants/ActionTypes';

const cards = (state = [], action) => {
	switch (action.type) {
		case types.ADD_CARD:
      if (action.title === '' || action.title.match(/^\s+$/)) return state;
			return [...state,
				{
					id: action.id,
					boardId: action.boardId,
					title: action.title,
					timestamp: Date.now()
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
