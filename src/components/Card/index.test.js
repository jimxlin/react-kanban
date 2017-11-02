import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './index';

describe('<Card />', () => {
	const testTitle = 'Test Title';
	const testTime = Date.now();
	const testCard = (
		<Card id={1}
			title={testTitle}
			timestamp={testTime}
			moveCard={jest.fn()}
			deleteCard={jest.fn()}
		/>
	);

	it('Should render', () => {
		const renderedComponent = shallow(testCard);
		expect(renderedComponent.exists()).toEqual(true);
	});

	it('Should render title and timestamp', () => {
		const cardTitle = 'Test Title';
		const renderedComponent = mount(testCard);
		expect(renderedComponent.find('.card-title').first().text())
			.toEqual(testTitle);
		expect(renderedComponent.find('.card-timestamp').first().text())
			.toEqual(Date(testTime));

		renderedComponent.unmount();
	});
});
