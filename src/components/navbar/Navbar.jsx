import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { logValue } = props;
  return (
    <div className="navbar">
      <div className="company-name">
        {' '}
        <Link to="/" className="company-name">
          SpaceVue
        </Link>
      </div>
      <div>
        <h1>SPACE MISSION</h1>
      </div>
      {logValue === 'login' ? (
        <Link to="/login" className="login-option">
          Login
        </Link>
      ) : (
        <Link to="/" className="login-option">
          Logout
        </Link>
      )}
    </div>
  );
}

export default Navbar;
