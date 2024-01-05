import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="company-name">SpaceVue</div>
      <div>
        <h1>SPACE MISSION</h1>
      </div>
      <Link to="/login" className="login-option">
        Login
      </Link>
    </div>
  );
}

export default Navbar;
