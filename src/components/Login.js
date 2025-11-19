import React, { useState } from "react";
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const validUser = {
    username: "admin",
    password: "12345",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userInput = username.trim().toLowerCase();
    const passInput = password.trim();

    if (userInput === validUser.username && passInput === validUser.password) {
      setError("");
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 login-card" style={{ width: "350px" }}>

        {/* Name on Top */}
        <h5 className="text-center text-secondary mb-2">NICK IVAN MARIANO</h5>
        {/* Login Header */}
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="alert alert-danger p-2">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
