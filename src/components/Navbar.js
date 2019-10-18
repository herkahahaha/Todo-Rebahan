import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  // Set History to redirect to about page use withRouter as HOC
  // setTimeout(() => {
  //   props.history.push("/");
  // }, 2000);
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Rebahan's
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
