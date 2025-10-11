// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          CareerCraft
        </NavLink>
        <div className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/roadmaps" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Job Based Roadmaps
          </NavLink>
          <NavLink 
            to="/skill-roadmap" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Skill Based Roadmaps
          </NavLink>
          <NavLink 
            to="/resume-builder" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Resume Builder
          </NavLink>
           <NavLink 
            to="/jobs" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Find Jobs
          </NavLink>
           <NavLink 
            to="/mock-interview" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Mock Interview
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

