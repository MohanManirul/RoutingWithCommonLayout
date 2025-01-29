import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li><Link className="nav-link scrollto active" to="/">Home</Link></li>

                        <li><Link className="nav-link scrollto" to="/about-me">About</Link></li>

                        <li><Link className="nav-link scrollto" to="/skills">Skills</Link></li>

                        <li><Link className="nav-link scrollto" to="/portfolio">Portfolio</Link></li> 

                        <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>

                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>
        </div>
    );
};

export default Header;