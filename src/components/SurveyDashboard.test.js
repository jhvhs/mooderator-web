import React from 'react';
import {shallow} from 'enzyme';
import {SurveyDashboard} from "./SurveyDashboard";
import Question from "./Question";
import FancyButton from "./FancyButton";

describe('SurveyDashBoard component', () => {

    it('renders without crashing', () => {
        // fetch = jest.fn().mockImplementationOnce(() => new Promise(resolve => resolve(
        //     {
        //         json: () => Promise.resolve({question: "is this a silly question?"})
        //     }))
        // );

        const question = {question: "is this a silly question?"};

        const wrapper = shallow(<SurveyDashboard question={question}/>);

        expect(wrapper.contains(<Question value={'is this a silly question?'}/>)).toEqual(true);
        expect(wrapper.contains(<FancyButton label={'OK'}/>)).toEqual(true);
        expect(wrapper.contains(<FancyButton label={'NO'}/>)).toEqual(true);
    });

});



