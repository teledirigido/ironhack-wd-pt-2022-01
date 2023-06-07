// src/components/Navbar.js
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'selected' : '' } to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'selected' : '' } to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? 'selected' : '' } to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
