"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
    const pathname = usePathname();

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 150;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]); 

  return (
    <header id="header" 
        style={{
            background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            padding: `${padding}px 0px`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
       className="header fixed-top py-4">
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
