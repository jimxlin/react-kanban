import * as types from '../constants/ActionTypes';

let nextCardId = 0;
export const addCard = (boardId, text) => {
	return {
		type: types.ADD_CARD,
		id: nextCardId++,
		boardId,
		text
	}
}

export const moveCard = (id, direction) => {
	return {
		type: types.MOVE_CARD,
		id,
		direction
	}
}

export const deleteCard = id => {
	return {
		type: types.DELETE_CARD,
		id
	}
}
