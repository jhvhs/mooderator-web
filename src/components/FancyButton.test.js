import React from 'react';
import {shallow} from 'enzyme';
import FancyButton from "./FancyButton";

it('renders without crashing', () => {
    const wrapper = shallow(<FancyButton label={"I'm a fancy button"}/>);
    const welcome = <button>I'm a fancy button</button>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

it('should invoke function when clicked', (done) => {
    const clickFn = () => {
        done()
    };

    const wrapper = shallow(<FancyButton label={"I'm a fancy button"} onClick={clickFn}/>);
    wrapper.find('button').simulate('click');
});

