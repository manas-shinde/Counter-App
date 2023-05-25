import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span style={{fontSize:30 , fontWeight:'bold'}} className="badge bg-primary m-2">Zero</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
