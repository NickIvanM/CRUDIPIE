import React from "react";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand mb-0 h1">Student Management System</span>
      <button className="btn btn-light" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
