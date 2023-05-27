import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className={this.getBadgeClass()}
          >
            {this.props.counter.value}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "true" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
        <br />
        {/* {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))} */}
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    return (classes += this.props.counter.value === 0 ? "primary" : "warning");
  }
}

export default Counter;
