import React, { Component } from "react";

export default class Output extends Component {
  render() {
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        <h2 className="output-title">Results</h2>
        <div className="output-group">
          <span>Height:</span> {height} cm
        </div>
        <div className="output-group">
          <span>Weight:</span> {weight} kg
        </div>
        <div className="output-group">
          <span>Bodymass index:</span> {bmi}
        </div>
        <div className="output-group">
          <span>Bodymass class:</span> {bmiClass}
        </div>
      </div>
    );
  }
}
