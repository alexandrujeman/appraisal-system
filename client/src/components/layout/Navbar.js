import React from "react";
import logo from "../../logo-katoen-natie-white.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Appraisal System"
};

export default Navbar;
