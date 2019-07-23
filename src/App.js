import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Keypad from "./components/keypad";
import Display from "./components/display";

class App extends Component {
  state = {
    display: "",
    operationIndexCounter: 0,
    operationIndex: 0
  };
  render() {
    const buttons = [
      { face: "0", onPress: this.handleNumberPress },
      { face: "1", onPress: this.handleNumberPress },
      { face: "2", onPress: this.handleNumberPress },
      { face: "3", onPress: this.handleNumberPress },
      { face: "4", onPress: this.handleNumberPress },
      { face: "5", onPress: this.handleNumberPress },
      { face: "6", onPress: this.handleNumberPress },
      { face: "7", onPress: this.handleNumberPress },
      { face: "8", onPress: this.handleNumberPress },
      { face: "9", onPress: this.handleNumberPress },
      { face: "*", onPress: this.handleOperationPress },
      { face: "-", onPress: this.handleOperationPress },
      { face: "+", onPress: this.handleOperationPress },
      { face: "/", onPress: this.handleOperationPress },
      { face: "=", onPress: this.handleEqualsPress },
      { face: "CLR", onPress: this.handleClearPress }
    ];

    return (
      <div className="Display">
        {this.state.display}
        <Keypad buttons={buttons} className="Buttons" />
        {console.log(this.state.display)}
        {console.log(this.state.operationIndexCounter)}
        {console.log(this.state.operationIndex)}
      </div>
    );
  }

  handleNumberPress = element => {
    const display = this.state.display + element;
    const operationIndexCounter = this.state.operationIndexCounter + 1;

    this.setState({ operationIndexCounter });
    this.setState({ display });
  };

  handleOperationPress = element => {
    const display = this.state.display + element;
    const operationIndex = this.state.operationIndexCounter;
    this.setState({ operationIndex });
    this.setState({ display });
  };

  handleEqualsPress = element => {
    let ans = 0;
    let splitNumbers = this.splitValue(
      this.state.display,
      this.state.operationIndex + 1
    );
    switch (splitNumbers[2]) {
      case "*":
        ans = parseInt(splitNumbers[0]) * parseInt(splitNumbers[1]);
        break;
      case "-":
        ans = parseInt(splitNumbers[0]) - parseInt(splitNumbers[1]);
        break;
      case "+":
        ans = parseInt(splitNumbers[0]) + parseInt(splitNumbers[1]);
        break;
      case "/":
        ans = parseInt(splitNumbers[0]) / parseInt(splitNumbers[1]);
        break;
    }
    this.setState({ display: "" + ans });
  };

  handleClearPress = element => {
    const display = "";
    const operationIndex = 0;
    const operationIndexCounter = 0;
    this.setState({ display, operationIndex, operationIndexCounter });
  };

  splitValue = (value, index) => {
    let twoHalves = [value.substring(0, index), value.substring(index)];
    const operation = twoHalves[0].substring(index - 1);
    twoHalves[0] = twoHalves[0].substring(0, index - 1);

    return [twoHalves[0], twoHalves[1], operation];
  };
}

export default App;
