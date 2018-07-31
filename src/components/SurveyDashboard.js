import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import FancyButton from './FancyButton';

class SurveyDashboard extends Component {
    render() {
        return (
            <div className="survey-dashboard">
                <Question />
                <FancyButton label={'OK'} />
                <FancyButton label={'NO'} />
            </div>
        );
    }
}

export default SurveyDashboard;
