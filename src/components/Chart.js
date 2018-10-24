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
                "date": "2018-08-31",
                "count": 10
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-08-31",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-08-31",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-03",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-03",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-04",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-04",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-04",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-05",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-05",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-05",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-06",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-06",
                "count": 5
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-07",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-07",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-10",
                "count": 7
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-10",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-11",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-11",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-12",
                "count": 10
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-13",
                "count": 23
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-13",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-13",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-14",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-14",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-17",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-17",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-18",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-18",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-19",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-19",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-20",
                "count": 5
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-20",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-21",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-21",
                "count": 5
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-21",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-24",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-24",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-09-25",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-25",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-26",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-26",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-27",
                "count": 8
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-27",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-09-28",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-09-30",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-10-01",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-01",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-10-01",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-02",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-10-03",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-03",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-04",
                "count": 16
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-05",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-08",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-10-08",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-10-08",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-09",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-10",
                "count": 5
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-10-10",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-11",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-12",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-15",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-10-15",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-16",
                "count": 3
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-10-16",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 91,
                "answer": "So so",
                "date": "2018-10-17",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-17",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-18",
                "count": 5
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-10-18",
                "count": 5
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-19",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-20",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-22",
                "count": 4
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-10-22",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-23",
                "count": 2
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 101,
                "answer": "Bad",
                "date": "2018-10-23",
                "count": 1
            },
            {
                "question": "How was your day in the office?",
                "questionId": 1,
                "answerId": 1,
                "answer": "Good",
                "date": "2018-10-24",
                "count": 1
            }
        ];

        let groupedData = _.mapValues(_.groupBy(data02, q => q.answer));
        console.log(groupedData);

        const series = [];

        Object.keys(groupedData).forEach((group) => {
            console.log(group);
            series.push({
                name: group,
                data: groupedData[group]
            })
        });

        return (
            <div className="Chart">
                <p>{data02[0].question}</p>
                <div className='line-chart-wrapper'>
                    <LineChart width={730} height={250} data={data02} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="date" type="category" allowDuplicatedCategory={false}/>
                        <YAxis/>
                        <Tooltip/>

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