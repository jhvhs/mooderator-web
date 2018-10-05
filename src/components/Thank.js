import React, {Component} from "react";

export class Thank extends Component {
    render() {
        setTimeout(this.props.close, 2000);
        return (
            <div className="Thank App-logo">
                <h1>Thank you!</h1>
            </div>
        );
    }
}

export default Thank;