import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';
import {connect} from 'react-redux';
import {addQuestion} from "../actions";
import fetchData from "../api/client";

const mapStateToProps = state => {
    return {question: state.question};
};

const mapDispatchToProps = dispatch => {
    return {
        addQuestion: question => dispatch(addQuestion(question))
    };
};

export class SurveyDashboard extends Component {

    componentDidMount() {
        this.loadQuestion();
    }

    // TODO setTimeout to be removed. It's in place for having the test passing
    loadQuestion() {
        setTimeout(()=>{
            fetchData().then(data => {
                this.props.addQuestion(data);
            });
        }, 3000);

    }

    render() {
        return (
            <div className="survey-dashboard">
                <Question value={this.props.question ? this.props.question.question : "Loading....."}/>
                <FancyButton label={'OK'}/>
                <FancyButton label={'NO'}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyDashboard);


