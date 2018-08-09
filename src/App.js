import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import SurveyDashboard from "./components/SurveyDashboard";
import configureStore from './store/index'
import banner from './banner.png';


const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={banner} alt="Mooderator"/>
                    </header>
                    <SurveyDashboard/>
                </div>
            </Provider>
        );
    }
}

export default App;
