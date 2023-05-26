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

  handlerReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((cnt) => cnt.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handlerReset}
        >
          Reset
        </button>
        <div>
          {this.state.counters.map((cnt) => (
            <Counter
              key={cnt.id}
              counter={cnt}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
