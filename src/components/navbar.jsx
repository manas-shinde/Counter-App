import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="manas">
            Navbar
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounter}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
