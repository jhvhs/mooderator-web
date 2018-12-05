import React, {Component} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import _ from 'lodash';


class Chart extends Component {
    render() {

        const data = this.props.dailyStats;
        const series = this.groupData(data);

        const SO_SO = "yellow";
        const BAD = "red";
        const GOOD = "green";
        const colors = [GOOD, BAD, SO_SO];

        return (
            <div className="Chart">
                <p>{data ? data[0].question : ''}</p>
                <div className='line-chart-wrapper'>
                    <LineChart width={1000} height={250} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="day" type={"category"} padding={{left: 30, right: 30}} allowDuplicatedCategory={false}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>

                        {series.map((s, index) => (
                            <Line dataKey="results"
                                  data={s.data} name={s.name}
                                  key={s.name}
                                  stroke={colors[index]}
                                  activeDot={{r: 4}}/>
                        ))}
                    </LineChart>
                </div>
            </div>
        );
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

        return series;
    }
}

export default Chart;