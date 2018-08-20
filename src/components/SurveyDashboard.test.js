import React from 'react';
import {shallow} from 'enzyme';
import {SurveyDashboard} from "./SurveyDashboard";
import Question from "./Question";
import FancyButton from "./FancyButton";

describe('SurveyDashBoard component', () => {

    it('renders without crashing', () => {
        const mockDispatch = jest.fn();
        const question = {
            sentence: "is this a silly question?",
            answers: [{id: 1, value: 'yes'}, {id: 2, value: 'no'}]
        };

        const wrapper = shallow(<SurveyDashboard question={question} dispatch={mockDispatch}/>);

        expect(wrapper.contains(<Question value={'is this a silly question?'}/>)).toEqual(true);
        expect(wrapper.find(FancyButton).length).toEqual(2);
        expect(wrapper.find(FancyButton).get(0).props.label).toEqual("yes");
        expect(wrapper.find(FancyButton).get(1).props.label).toEqual("no");
        // TODO find a way for testing what is the function passed in onClick
        // expect(wrapper.find(FancyButton).get(0).props.onClick).toEqual(wrapper.instance().send);
        expect(mockDispatch.mock.calls.length).toBe(1);
    });

});



