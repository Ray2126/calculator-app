import React, { Component } from "react";
import "./display.css";

class Display extends Component {
  render() {
    return (
      <div className="Display">
        {" "}
        {console.log(this.props.display)}
        {this.props.display}
      </div>
    );
  }
}

export default Display;
