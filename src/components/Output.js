import React, { Component } from "react";

export default class Output extends Component {
  render() {
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;

    return (
      <div>
        <h1>Output</h1>

        <div>Height: {height}</div>
        <div>Weight: {weight}</div>
        <div>Bodymass index: {bmi}</div>
      </div>
    );
  }
}
