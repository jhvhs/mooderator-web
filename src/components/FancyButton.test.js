import React from 'react';
import {shallow} from 'enzyme';
import FancyButton from "./FancyButton";

it('renders without crashing', () => {
    const wrapper = shallow(<FancyButton />);
    const welcome = <button>I'm fancy</button>;
    expect(wrapper.contains(welcome)).toEqual(true);
});