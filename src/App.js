import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index'
import SurveyDashboard from "./components/SurveyDashboard";
import fetchData from './api/client';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Mooderator</h1>
                    </header>
                    <SurveyDashboard/>
                </div>
            </Provider>
        );
    }

    componentDidMount() {
        this.loadQuestion();
    }

    loadQuestion() {
        fetchData().then(data => {
           console.log('App -->', data)
        });
    }

}

export default App;
