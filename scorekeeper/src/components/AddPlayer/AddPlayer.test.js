import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Add new player tests', () => {
	it('renders without crashing', () => {
		shallow(<AddPlayer/>);
	});

	it('should add new player name', () => {
		const onPlayerAdd = jest.fn();
		const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

		const nameInput = addPlayerComponent.find('input').first().getDOMNode();

		nameInput.value = 'Ania';
		const form = addPlayerComponent.find('form');
		form.simulate('submit');

		expect(onPlayerAdd).toBeCalledWith('Ania');
	});
});

