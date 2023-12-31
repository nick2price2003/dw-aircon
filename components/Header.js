"use client";

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

        <a href="#" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src="assets/logo.png" alt="" />
        </a>

        <nav id="navmenu" className="navmenu">
            <ul>
                <li><a href="#hero" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#contact">Get a Quote</a>

        </div>
    </header>
  );
};

export default Header;
