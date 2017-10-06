import reducer from '../reducers/cards';
import * as types from '../constants/ActionTypes';

describe ('cards reducer', () => {
	const id = 0;
	const boardId = 1;
	const text = 'Test text';
	const state = [
		{
			id,
			boardId,
			text
		}
	];

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toHaveLength(3);
	});

	it('should handle ADD_CARD', () => {
		const type = types.ADD_CARD;
		const state = [];
		const action = {
			type,
			id,
			boardId,
			text
		};
		expect(reducer(state, action)).toEqual([
			{
				id,
				boardId,
				text
			}
		]);
	});

	it('should handle MOVE_CARD', () => {
		const type = types.MOVE_CARD;
		const direction = -1;
		const action = {
			type,
			id,
			direction
		};
		expect(reducer(state, action)).toEqual([
			{
				id,
				boardId: boardId + direction,
				text
			}
		]);
	});

	it('should handle DELETE_CARD', () => {
		const type = types.DELETE_CARD;
		const action = {
			type,
			id
		};
		expect(reducer(state, action)).toEqual([]);
	});
});
