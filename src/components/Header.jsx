import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="index.html">Manirul</a></h1>
                     
                    <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                </div>
       
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><NavLink className="nav-NavLink scrollto active" to="/">Home</NavLink></li>

                        <li><NavLink className="nav-NavLink scrollto" to="/about-me">About</NavLink></li>

                        <li><NavLink className="nav-NavLink scrollto" to="/skills">Skills</NavLink></li>

                        <li><NavLink className="nav-NavLink scrollto" to="/portfolio">Portfolio</NavLink></li> 

                        <li><NavLink className="nav-NavLink scrollto" to="/contact">Contact</NavLink></li>

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
        </div>
    );
};

export default Header;