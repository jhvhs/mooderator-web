import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="card-body">
                    <span className={"display-2"}>{this.props.value}</span>
                </div>
            </div>

        );
    }
}

Question.propTypes = {
    value: PropTypes.string.isRequired
};

export default Question;
