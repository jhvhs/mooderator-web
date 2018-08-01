import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        return (
            <div className="question">
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}

Question.propTypes = {
    value: PropTypes.string.isRequired
};

export default Question;
