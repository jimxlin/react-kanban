import * as types from '../constants/ActionTypes';

const cards = (state = [], action) => {
	switch (action.type) {
		case types.ADD_CARD:
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
