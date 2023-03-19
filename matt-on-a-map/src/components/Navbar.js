import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/favicon.ico" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Rules</a>
        </li>
        <li>
          <a href="#">Stats</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
