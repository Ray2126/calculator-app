import React, { Component } from "react";

class Display extends Component {
  render() {
    return (this.props.displayed = this.props.displayed + this.props.onAppend);
  }
}

export default Display;
