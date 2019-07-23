import React, { Component } from "react";
import Button from "./button";

class Keypad extends Component {
  render() {
    return (
      <div>
        {this.props.buttons.map(button => (
          <Button face={button.face} onPress={button.onPress} />
        ))}
      </div>
    );
  }
}

export default Keypad;
