import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 30, fontWeight: "bold" }}
          className={this.getBadgeClass()}
        >
          {this.state.value}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/* {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))} */}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    return (classes += this.state.counter === 0 ? "primary" : "warning");
  }
}

export default Counter;
