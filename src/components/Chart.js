import React, {Component} from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import _ from 'lodash';

class Chart extends Component {
    render() {

        const data02 = [
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "dat": "2018-08-31",
                "count": 10
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "dat": "2018-12-31",
                "count": 101
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "So so",
                "dat": "2018-10-02",
                "count": 100
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Bad",
                "dat": "2018-12 -31",
                "count": 50
            }
        ];

        console.log(_.groupBy(data02, q => q.answer));

        const series = [
            {
                name: 'Good', data: [
                    {"dat": "2018-12-01", "count": 50},
                    {"dat": "2018-12-15", "count": 50},
                    {"dat": "2018-12-31", "count": 150},
                    {"dat": "2018-01-01", "count": 10}
                ]
            },
            {
                name: 'So so', data: [
                    {"dat": "2018-12-01", "count": 10},
                    {"dat": "2018-12-15", "count": 20},
                    {"dat": "2018-12-31", "count": 250}
                ]
            },
            {
                name: 'Bad', data: [
                    {"dat": "2018-12-01", "count": 100},
                    {"dat": "2018-12-15", "count": 50},
                    {"dat": "2018-12-31", "count": 40}
                ]
            },
        ];

        return (
            <div className="Chart">
                <p>A simple LineChart with fixed domain y-axis</p>
                <div className='line-chart-wrapper'>
                    <LineChart width={730} height={250} data={data02} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        {/*<XAxis dataKey="dat" label="Date" />*/}
                        <XAxis dataKey="dat" type="category" allowDuplicatedCategory={false}/>
                        <YAxis/>
                        <Tooltip/>
                        {/*<Line dataKey="count" stroke="#ff7300" />*/}

                        {series.map(s => (
                            <Line dataKey="count" data={s.data} name={s.name} key={s.name}/>
                        ))}

                    </LineChart>
                </div>

            </div>
        );
    }
}

export default Chart;