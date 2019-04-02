import React from 'react';
import {shallow} from 'enzyme';
import Chart from "./Chart";

describe('Chart component', () => {

    it('renders without crashing if there is no data', () => {
        const wrapper = shallow(<Chart dailyStats={[]}/>);
        expect(wrapper.contains('No stats collected')).toEqual(true);
    });

});



