import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index'
import SurveyDashboard from "./components/SurveyDashboard";

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
}

export default App;
