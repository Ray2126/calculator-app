import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Keypad from "./components/keypad";
import Display from "./components/display";

class App extends Component {
  state = {
    display: "",
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
      <React.Fragment>
        <Keypad buttons={buttons} />
        {console.log(this.state.display)}
        {console.log(this.state.operationIndex)}
      </React.Fragment>
    );
  }

  handleNumberPress = element => {
    const display = this.state.display + element;
    const operationIndex = this.state.operationIndex + 1;

    this.setState({ operationIndex });
    this.setState({ display });
  };

  handleOperationPress = element => {
    const display = this.state.display + element;
    this.setState({ display });
  };

  handleEqualsPress = element => {
    console.log("1" + element);
  };

  handleClearPress = element => {
    const display = "";
    this.setState({ display });
  };
}

export default App;
