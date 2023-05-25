import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 10,
  };
  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 30, fontWeight: "bold" }}
          className={this.getBadgeClass()}
        >
          {this.state.counter}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    return (classes += this.state.counter === 0 ? "primary" : "warning");
  }
}

export default Counter;
