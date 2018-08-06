import React from 'react';
import {shallow} from 'enzyme';
import Question from './Question';

it('renders without crashing', () => {
    const wrapper = shallow(<Question value={"is this a silly question?"}/>);
    const content = <h1>is this a silly question?</h1>;
    expect(wrapper.contains(content)).toEqual(true);
});