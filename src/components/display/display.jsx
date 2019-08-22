import React, { Component } from "react";
import "./display.css";

/**
 * Displays the string to the display
 */
class Display extends Component {
  render() {
    return <div className="Display">{this.props.display}</div>;
  }
}

export default Display;
