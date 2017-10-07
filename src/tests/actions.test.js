import * as actions from '../actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
	it('should create an action to add a card', () => {
		const type = types.ADD_CARD;
		const id = 3;
		const boardId = 1;
		const text = 'Job A';
		const expectedAction = {
			type,
			id,
			boardId,
			text
		};
		expect(actions.addCard(boardId, text)).toEqual(expectedAction);
	});

	it('should create an action to move a card', () => {
		const type = types.MOVE_CARD;
		const id = 0;
		const direction = -1;
		const expectedAction = {
			type,
			id,
			direction
		};
		expect(actions.moveCard(id, direction)).toEqual(expectedAction);
	});

	it('should create an action to delete a card', () => {
		const type = types.DELETE_CARD;
		const id = 0;
		const expectedAction = {
			type,
			id
		};
		expect(actions.deleteCard(id)).toEqual(expectedAction);
	});
});
