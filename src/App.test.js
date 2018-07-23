import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Question from './components/Question';
import FancyButton from "./components/FancyButton";

it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Question />)).toEqual(true);
    expect(wrapper.find(FancyButton).length).toEqual(2);
});