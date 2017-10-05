import * from './types';

let nextCardId = 0;
export const addCard = (boardId, text) => {
	return {
		type: ADD_CARD,
		id: nextCardId++,
		boardId,
		text
	}
}

export const moveCard = (id, direction) => {
	return {
		type: MOVE_CARD,
		id,
		direction
	}
}

export const deleteCard = id => {
	return {
		type: DELETE_CARD,
		id
	}
}
