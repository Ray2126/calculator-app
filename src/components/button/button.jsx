import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className={this.props.buttonType.toString()}
          onClick={() => this.props.onPress(this.props.face)}
        >
          {this.props.face}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
