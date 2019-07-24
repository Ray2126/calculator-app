import React, { Component } from "react";
import Button from "./button/button";

class Keypad extends Component {
  render() {
    return (
      <div className="keypad">
        {this.props.buttons.map(button => (
          <Button
            key={button.face}
            face={button.face}
            onPress={button.onPress}
            buttonType={button.buttonType}
          />
        ))}
      </div>
    );
  }
}

export default Keypad;
