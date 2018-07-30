import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FancyButton extends Component {
    render() {
        return (
            <div className="FancyButton">
                <button onClick={this.props.onClick}>{this.props.label}</button>
            </div>
        );
    }
}

FancyButton.propTypes = {
    label:PropTypes.string.isRequired
};

export default FancyButton;
