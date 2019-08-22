import React, { Component } from "react";
import "./button.css";

/**
 * Each button in calculator is an instance of this component
 */
class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          /** The type of button e.g. number. This makes it so the style of different buttons can be changed in CSS */
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
