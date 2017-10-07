import * as types from '../constants/ActionTypes';

let nextCardId = 3;
export const addCard = (boardId, title) => {
	return {
		type: types.ADD_CARD,
		id: nextCardId++,
		boardId,
		title
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
