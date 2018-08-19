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
        let buttons = [];

        if (this.props.question) {
            this.props.question.answers.forEach((answer)=>{
               buttons.push(<FancyButton label={answer.value}/>)
            });
        }

        return (
            <div className="survey-dashboard">
                <Question value={this.props.question ? this.props.question.sentence : "Loading....."}/>

                {buttons}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SurveyDashboard);


