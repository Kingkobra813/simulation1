import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <p>SHELFIE</p>
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/add">
        <button>Add Invetory</button>
      </Link>
    </header>
  );
}

export default Header;
