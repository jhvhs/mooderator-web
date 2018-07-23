import React, {Component} from 'react';
import './App.css';
import Question from "./components/Question";
import FancyButton from "./components/FancyButton";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Mooderator</h1>
                </header>
                <Question/>
                <FancyButton/>
                <FancyButton/>
            </div>
        );
    }
}

export default App;
