import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import ChartDashboard from "./components/ChartDashboard";
import SurveyDashboard from "./components/SurveyDashboard";
import configureStore from './store/index'
import banner from './banner.png';
import {BrowserRouter as Router, Route} from "react-router-dom";


const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <div className="App">
                    <header className="App-header">
                        <img src={banner} alt="Mooderator"/>
                    </header>
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
