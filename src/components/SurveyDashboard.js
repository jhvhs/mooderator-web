import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';

class SurveyDashboard extends Component {

    constructor() {
        super();

        this.state = {
            question: "is this a silly question?"
        };
    }

    render() {
        return (
            <div className="survey-dashboard">
                <Question value={this.state.question}/>
                <FancyButton label={'OK'}/>
                <FancyButton label={'NO'}/>
            </div>
        );
    }
}

export default SurveyDashboard;
