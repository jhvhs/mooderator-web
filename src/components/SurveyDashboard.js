import React, {Component} from 'react';
import Question from './Question';
import FancyButton from './FancyButton';
import Thank from './Thank';
import {connect} from 'react-redux';
import {close, fetchQuestion, submitResult} from "../actions";

const mapStateToProps = state => {
    return {
        question: state.question,
        hasDataSent: state.hasDataSent,
    };
};

export class SurveyDashboard extends Component {

    constructor(props) {
        super(props);

        this.closeThanksPanel = this.closeThanksPanel.bind(this);
    }

    componentDidMount() {
        setInterval(() => this.props.dispatch(fetchQuestion()), 30 * 60 * 1000);
    }

    render() {
        const buttons = this.props.question ? this.props.question.answers.map((answer, index) => {
            const result = {
                questionId: this.props.question.id,
                question: this.props.question.sentence,
                answer: answer.value,
                answerId: answer.id
            };
            return <FancyButton label={answer.value} key={`answer-${index}`} onClick={this.send.bind(this, result)}/>;
        }) : [];

        const thanks = <div><Thank close={this.closeThanksPanel}/></div>;

        return (
            <div className="SurveyDashboard">
                <div className="question-wrapper">
                    <Question value={this.props.question ? this.props.question.sentence : "Loading....."}/>
                </div>
                <div className="buttons">
                    {this.props.hasDataSent ? thanks : buttons}
                </div>

            </div>
        );
    }

    send(result) {
        this.props.dispatch(submitResult(result));
    }

    closeThanksPanel() {
        this.props.dispatch(close());
    }
}


export default connect(mapStateToProps)(SurveyDashboard);


