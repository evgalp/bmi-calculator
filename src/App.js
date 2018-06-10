import React, { Component } from "react";
import "./App.css";

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
      <div className="App">
        <h1>BMI calculator</h1>
        <form action="">
          <div>
            <label htmlFor="">Height</label>
            <Range
              value={this.state.height}
              onChange={this.heightChange.bind(this)}
            />
          </div>
          <div>
            <label htmlFor="">Weight</label>
            <Range
              value={this.state.weight}
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
