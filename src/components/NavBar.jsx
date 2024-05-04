import React, { useEffect, useState,useRef } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const navLinksRef = useRef(null);

    const showMenu = () => {
      navLinksRef.current.style.right = "0";
    };
  
    const hideMenu = () => {
      navLinksRef.current.style.right = "-200px";
    };

    return(
        <nav>
                <Link to="/"><img src="images/logo.png" id="logo" /></Link>
                <div className="nav-links" ref={navLinksRef}>
                    <i className="fa fa-times" onClick={hideMenu}></i>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/vehicles">VEHICLES</Link></li>
                        <li><Link to="/news">NEWS</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/login" className="hero-btn red-btn">SIGN IN</Link></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>
    )
}

export default NavBar;