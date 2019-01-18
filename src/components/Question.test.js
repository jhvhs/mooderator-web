import React from 'react';
import {shallow} from 'enzyme';
import Question from './Question';

it('renders without crashing', () => {
    const text = "is this a silly question?";
    const wrapper = shallow(<Question value={text}/>);
    expect(wrapper.contains(text)).toEqual(true);
});