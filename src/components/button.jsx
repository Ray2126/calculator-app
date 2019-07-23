import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onPress(this.props.face)}
          className="btn btn-secondary btn-sm"
        >
          {this.props.face}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
