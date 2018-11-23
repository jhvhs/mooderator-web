import React, {Component} from 'react';
import Chart from './Chart';
import {connect} from 'react-redux';
import {fetchDailyStats} from "../actions";

const mapStateToProps = state => {
    return {
        dailyStats: state.dailyStats
    };
};

export class ChartDashboard extends Component {

    componentDidMount() {
        this.props.dispatch(fetchDailyStats());
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


