import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        <div>
          {this.props.counters.map((cnt) => (
            <Counter
              key={cnt.id}
              counter={cnt}
              onIncrement={this.props.onIncrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
