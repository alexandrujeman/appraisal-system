import React, { Fragment, useContext } from "react";
import logo from "../../logo-katoen-natie-white.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AppraisalContext from "../../context/appraisal/appraisalContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const appraisalContext = useContext(AppraisalContext);

  const { isAuthenticated, logout, user} = authContext;
  const { clearAppraisals, clearCurrent } = appraisalContext;

  const clearAll = () => {
    clearCurrent();
  };

  const onLogout = () => {
    logout();
    clearAppraisals();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const adminLinks = (
    <Fragment>
    <li>
      <Link onClick={clearAll} to="/admin">Admin</Link>
    </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
      <ul>
        <li>
          <Link onClick={clearAll} to="/">Home</Link>
        </li>
        {(user && user.role === 'admin') ? adminLinks : ''}
        <li>
          <Link to="/about">About</Link>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
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
