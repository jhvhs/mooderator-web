import React, {Component} from 'react';
import Chart from './Chart';
import {connect} from 'react-redux';
import queryString from 'query-string'
import {fetchDailyStats} from "../actions";

const mapStateToProps = state => {
    return {
        dailyStats: state.dailyStats
    };
};

export class ChartDashboard extends Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const questionId = values.questionId ? values.questionId : 'latest';
        this.props.dispatch(fetchDailyStats(questionId));
    }

    render() {
        return (
            <div className="ChartDashboard">
                <Chart dailyStats={this.props.dailyStats}/>
            </div>
        );
    }

}

export default connect(mapStateToProps)(ChartDashboard);


