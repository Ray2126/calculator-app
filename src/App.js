import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Keypad from "./components/keypad";
import Display from "./components/display/display";

class App extends Component {
  state = {
    display: "",
    operationIndexCounter: 0,
    operationIndex: 0
  };
  render() {
    const numberButtons = [
      { face: "1", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "2", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "3", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "4", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "5", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "6", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "7", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "8", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "9", onPress: this.handleNumberPress, buttonType: "number" },
      { face: "0", onPress: this.handleNumberPress, buttonType: "number" },
      { face: ".", onPress: this.handleNumberPress, buttonType: "number" }
    ];

    const operationButtons = [
      {
        face: "*",
        onPress: this.handleOperationPress,
        buttonType: "operation"
      },
      {
        face: "-",
        onPress: this.handleOperationPress,
        buttonType: "operation"
      },
      {
        face: "/",
        onPress: this.handleOperationPress,
        buttonType: "operation"
      },
      { face: "+", onPress: this.handleOperationPress, buttonType: "operation" }
    ];

    const equalsButton = [
      { face: "=", onPress: this.handleEqualsPress, buttonType: "equals" }
    ];

    const clearButton = [
      { face: "CLR", onPress: this.handleClearPress, buttonType: "clear" }
    ];

    return (
      <div className="main">
        <Display display={this.state.display} />
        <span className="numberButtons">
          <Keypad buttons={numberButtons} />
        </span>
        <span className="equalsButton">
          <Keypad buttons={equalsButton} />
        </span>
        <span className="operationButtons">
          <Keypad buttons={operationButtons} />
        </span>
        <span className="clearButton">
          <Keypad buttons={clearButton} />
        </span>
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
        ans = parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[1]);
        break;
      case "-":
        ans = parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[1]);
        break;
      case "+":
        ans = parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[1]);
        break;
      case "/":
        ans = parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[1]);
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
