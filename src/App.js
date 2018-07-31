import React, {Component} from 'react';
import './App.css';
import SurveyDashboard from "./components/SurveyDashboard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Mooderator</h1>
                </header>
                <SurveyDashboard />
            </div>
        );
    }
}

export default App;
