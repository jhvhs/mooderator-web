import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FancyButton extends Component {
    render() {
        return (
            <div className="text-center mt-3 col-12 col-sm">
                <button className="btn btn-info btn-lg block col-12 font-weight-bold font-5xl" onClick={this.props.onClick}>{this.props.label}</button>
            </div>
        );
    }
}

FancyButton.propTypes = {
    label: PropTypes.string.isRequired
};

export default FancyButton;
