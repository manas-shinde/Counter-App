import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <div>
          {counters.map((cnt) => (
            <Counter
              key={cnt.id}
              counter={cnt}
              onIncrement={onIncrement}
              onDelete={onDelete}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
