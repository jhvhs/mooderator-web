import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import SurveyDashboard from './components/SurveyDashboard';
import fetchData from "./api/client";

// TODO review this test. It smells very badly!!!!
it('renders without crashing', () => {
    fetch = jest.fn().mockImplementationOnce(() => new Promise(resolve => resolve(
        {
            json: () => Promise.resolve({"foo": "bar"})
        }))
    );
    // expect(fetchData()).resolves.toEqual({"foo": "bar"});

    const wrapper = shallow(<App/>);
    expect(wrapper.contains(<SurveyDashboard/>)).toEqual(true);
});
