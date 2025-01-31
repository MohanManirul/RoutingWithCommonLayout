import React from 'react';
import { NavLink } from 'react-router-dom';
 // ✅ External CSS Import

const Header = () => {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="/">Manirul</a></h1>
                    <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/about-me">About</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/skills">Skills</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/portfolio">Portfolio</NavLink></li> 

                        <li><NavLink className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/contact">Contact</NavLink></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    );
};

export default Header;
