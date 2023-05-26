import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="manas">
          Navbar
          <button className="bg bg-pill bg-warning">
            {props.totalCounter}
          </button>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
