import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = ({ isOpen, onClose }) => {
  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <NavLink to="/" onClick={onClose}>All</NavLink>
      <NavLink to="/fullstack" onClick={onClose}>Full Stack Development</NavLink>
      <NavLink to="/datascience" onClick={onClose}>Data Science</NavLink>
      <NavLink to="/cybersecurity" onClick={onClose}>Cyber Security</NavLink>
      <NavLink to="/ai" onClick={onClose}>AI</NavLink>
    </nav>
  )
}

export default Navbar;