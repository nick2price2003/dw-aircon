"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
    const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <header id="header" className="header fixed-top py-4">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center">
            <img src="images/logo.png" alt="" />
        </a>

        <nav id="navbar" className="navbar">
            <ul>
            <li><a className="nav-link" href="#hero">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#services">Services</a></li>
            <li><a className="nav-link" href="#portfolio">Gallery</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
            <li><a className="getstarted" href="#about">GET A QUOTE</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        </div>
    </header>
  );
};

export default Header;
