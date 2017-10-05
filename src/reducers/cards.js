import * from '../actions/types';

const cards = (state = [], action) {
	switch (action.type) {
		case ADD_CARD:
			return [...state,
				{
					id: action.id,
					text: action.text
					boardId: action.boardId
				}
			];
		case MOVE_CARD:
			return state.map(card =>
				card.id === action.id
				? {...card, boardId: card.boardId + action.direction}
				: card
			);
		case DELETE_CARD:
			return state.filter(card =>
				card.id !== action.id
			);
		default:
			return state
	}
}

export default cards;
