import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './index';

describe('<Board />', () => {
	const testName = 'Test Name';
	const testBoard = (
		<Board id={1}
			name={testName}
			cards={[]}
			addCard={jest.fn()}
			moveCard={jest.fn()}
			deleteCard={jest.fn()}
		/>
	);

	it('Should render', () => {
		const renderedComponent = shallow(testBoard);
		expect(renderedComponent.exists()).toEqual(true);
	});

	it('Should render name', () => {
		const renderedComponent = shallow(testBoard);
		expect(renderedComponent.find('.board-name').first().text())
			.toEqual(testName);
	});

	it('Should render input and button to add a card', () => {
		const renderedComponent = shallow(testBoard);
		expect(renderedComponent.find('input').exists())
			.toEqual(true);
		expect(renderedComponent.find('.add-card-btn').exists())
			.toEqual(true);
	});
});
