import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Range from "./components/Range";
import Output from "./components/Output";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: "normal"
    };
  }

  heightChange(height) {
    this.setState(
      {
        height: height
      },
      this.setBmi
    );
  }

  weightChange(weight) {
    this.setState(
      {
        weight: weight
      },
      this.setBmi
    );
  }

  getBmiClass(bmi) {
    if (bmi < 18.5) {
      return "underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      return "normal";
    }
    if (bmi >= 25 && bmi <= 29.9) {
      return "overweight";
    }
    if (bmi >= 30) {
      return "obese";
    }
  }

  setBmi() {
    let weight = this.state.weight;
    let height = this.state.height;
    let bmi = ((weight / height / height) * 10000).toFixed(2);

    this.setState({
      bmi: bmi,
      bmiClass: this.getBmiClass(bmi)
    });
  }
  render() {
    return (
      <div className="wrap">
        <Header />
        <form className="form">
          <h2 className="output-title">Input data</h2>

          <div className="form-group">
            <label htmlFor="">Height</label>
            <Range
              value={this.props.height}
              onChange={this.heightChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Weight</label>
            <Range
              value={this.props.weight}
              onChange={this.weightChange.bind(this)}
            />
          </div>
        </form>
        <Output data={this.state} />
      </div>
    );
  }
}

export default App;
