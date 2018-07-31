import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SurveyDashboard from './components/SurveyDashboard';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<SurveyDashboard />)).toEqual(true);
});
