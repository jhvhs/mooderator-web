import React, {Component} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import _ from 'lodash';


const SO_SO = "#fec621";
const BAD = "#ea4335";
const GOOD = "#51c0b1";

class Chart extends Component {
    render() {
        const data = this.props.dailyStats;
        const series = this.groupData(data);
        const colors = [GOOD, BAD, SO_SO];

        return (
            <div className="Chart">
                <p>{data && data.length > 0 ? data[0].question : ''}</p>
                {
                    data && data.length > 0 ? this.drawCharts(series, colors) : 'No stats collected'
                }
            </div>
        );
    }

    drawCharts(series, colors) {
        return series.map((s, index) => (
            <div key={`chart-${index}-`} className='line-chart-wrapper'>
                <LineChart width={700} height={250} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day" type={"category"} padding={{left: 30, right: 30}}
                           allowDuplicatedCategory={true}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>

                    <Line dataKey="results"
                          data={s.data}
                          name={s.name}
                          key={s.name}
                          stroke={colors[index]}
                          activeDot={{r: 3}}/>

                </LineChart>
                <br/>
                <br/>
            </div>
        ));
    }

    groupData(data) {
        const groupedData = _.mapValues(_.groupBy(data, q => q.answer));
        const series = [];
        Object.keys(groupedData).forEach((group) => {
            series.push({
                name: group,
                data: groupedData[group]
            });
        });
        return series
    }
}

export default Chart;