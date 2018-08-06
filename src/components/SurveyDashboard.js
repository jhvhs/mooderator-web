import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {question: state.question};
};

export class SurveyDashboard extends Component {

    render() {
        return (
            <div className="survey-dashboard">
                <Question value={this.props.question ? this.props.question : "No question"}/>
                <FancyButton label={'OK'}/>
                <FancyButton label={'NO'}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SurveyDashboard);
