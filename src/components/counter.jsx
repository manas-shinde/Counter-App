import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 30, fontWeight: "bold" }}
          className={this.getBadgeClass()}
        >
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
        <br />
        {/* {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))} */}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    return (classes += this.props.counter.value === 0 ? "primary" : "warning");
  }
}

export default Counter;
