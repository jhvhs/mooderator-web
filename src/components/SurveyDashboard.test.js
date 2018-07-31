import React from 'react';
import {shallow} from 'enzyme';
import SurveyDashboard from "./SurveyDashboard";
import Question from "./Question";
import FancyButton from "./FancyButton";

it('renders without crashing', () => {
    const wrapper = shallow(<SurveyDashboard />);
    expect(wrapper.contains(<Question />)).toEqual(true);
    expect(wrapper.contains(<FancyButton label={'OK'}/>)).toEqual(true);
    expect(wrapper.contains(<FancyButton label={'NO'}/>)).toEqual(true);
});


