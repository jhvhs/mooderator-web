import React, {Component} from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, Legend} from 'recharts';
import _ from 'lodash';


class Chart extends Component {
    render() {

        const data = this.props.dailyStats;
        const series = this.groupData(data);

        const colors = ["#8884d8", "#82ca9d", "yellow"];

        return (
            <div className="Chart">
                <p>{data ? data[0].question : ''}</p>
                <div className='line-chart-wrapper'>
                    <LineChart width={1000} height={250} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="day" allowDuplicatedCategory={false}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>

                        {series.map((s, index) => (
                            <Line type="monotone"
                                  dataKey="results"
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
        let groupedData = _.mapValues(_.groupBy(data, q => q.answer));

        const series = [];

        Object.keys(groupedData).forEach((group) => {

            series.push({
                name: group,
                data: groupedData[group]
            })
        });
        console.log(series);
        return series;
    }
}

export default Chart;