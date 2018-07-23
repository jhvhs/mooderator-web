import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

it('renders without crashing', () => {
    const wrapper = shallow(<Question />);
    const welcome = <h1>is this a question?</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
});