import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';

class SurveyDashboard extends Component {
    render() {
        return (
            <div className="survey-dashboard">
                <Question value={"is this a silly question?"}/>
                <FancyButton label={'OK'} />
                <FancyButton label={'NO'} />
            </div>
        );
    }
}

export default SurveyDashboard;
