import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';
import {connect} from 'react-redux';
import {fetchQuestion} from "../actions";

const mapStateToProps = state => {
    return {question: state.question};
};


export class SurveyDashboard extends Component {

    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    render() {
        return (
            <div className="survey-dashboard">
                <Question value={this.props.question ? this.props.question.sentence : "Loading....."}/>
                <FancyButton label={'OK'}/>
                <FancyButton label={'NO'}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SurveyDashboard);


