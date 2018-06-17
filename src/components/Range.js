import React, { Component } from "react";

export default class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  static defaultProps = {
    min: 1,
    max: 250,
    step: 1
  };

  onChange(e) {
    this.props.onChange(this.state.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="range"
          value={this.state.value}
          min={this.props.min}
          step={this.props.step}
          max={this.props.max}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}
