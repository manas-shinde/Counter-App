import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  };

  handleIncrement = () => {
    console.log(`Incremented counter! `);
    this.setState({ counter: this.state.counter + 1 });
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
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    return (classes += this.state.counter === 0 ? "primary" : "warning");
  }
}

export default Counter;
