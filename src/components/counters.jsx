import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((cnt) => cnt.id !== id);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((cnt) => (
          <Counter key={cnt.id} counter={cnt} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default Counters;
