import React, {Component} from 'react';

import './App.scss';
import {Provider} from 'react-redux';
import ChartDashboard from "./components/ChartDashboard";
import SurveyDashboard from "./components/SurveyDashboard";
import configureStore from './store/index'
import {BrowserRouter as Router, Route} from "react-router-dom";


const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <div>
                            <Route exact path="/" component={SurveyDashboard} />
                            <Route path="/stats" component={ChartDashboard} />
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
