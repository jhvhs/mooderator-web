import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';
import {connect} from 'react-redux';
import {fetchQuestion, submitResult} from "../actions";

const mapStateToProps = state => {
    return {question: state.question};
};


export class SurveyDashboard extends Component {

    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    render() {
        const buttons = this.props.question ? this.props.question.answers.map((answer, index) => {
            const result = {
                questionId: this.props.question.id,
                question: this.props.question.sentence,
                answer: answer.value
            };
            return <FancyButton label={answer.value} key={`answer-${index}`} onClick={this.send.bind(this, result)}/>;
        }) : [];

        return (
            <div className="SurveyDashboard">
                <div className="question-wrapper">
                    <Question value={this.props.question ? this.props.question.sentence : "Loading....."}/>
                </div>
                <div className="buttons">
                    {buttons}
                </div>
            </div>
        );
    }

    send(result) {
        this.props.dispatch(submitResult(result));
    }
}


export default connect(mapStateToProps)(SurveyDashboard);


