import React from "react";
import { FaBeer } from "react-icons/fa";
import { MdInsertChartOutlined } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-help">
        <a href="#">
          <MdHelpOutline />
        </a>
      </div>
      <div className="header">
        <p>MATT ON A MAP</p>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">
            <MdInsertChartOutlined />
          </a>
        </li>
        <li>
          <a href="#">
            <MdDarkMode />
          </a>
        </li>
      </ul>
    </nav>
  );
}
