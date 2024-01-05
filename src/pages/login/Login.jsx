import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './login.css';
function Login() {
  return (
    <div>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
