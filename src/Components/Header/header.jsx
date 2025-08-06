import React from "react";
import ThemeSwitcher from "../Theme/themeswitch";

function Navbar() {
    return(
        <>
            <div className="navbar-wrapper">
                <nav className="navbar navbar-expand-xl">
                    <div className="navbar-container">
                        <div className="logo-container">
                            <a className="navbar-brand" href="/">
                            <img src="/assets/image/marko-logo.png" className="site-logo img-fluid" alt="Logo" />
                            </a>
                        </div>
                        <button
                            className="navbar-toggler nav-btn"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services <i className="fa-solid fa-angle-down accent-color"></i>
                                </a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/service">Service</a></li>
                                <li><a className="dropdown-item" href="/single_services">Single Services</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages <i className="fa-solid fa-angle-down accent-color"></i>
                                </a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/case_studies">Case Studies</a></li>
                                <li><a className="dropdown-item" href="/team">Our Team</a></li>
                                <li><a className="dropdown-item" href="/partnership">Partnership</a></li>
                                <li><a className="dropdown-item" href="/pricing">Pricing Plan</a></li>
                                <li><a className="dropdown-item" href="/testimonial">Testimonial</a></li>
                                <li><a className="dropdown-item" href="/faq">FAQs</a></li>
                                <li><a className="dropdown-item" href="/404_page">Error 404</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Archive <i className="fa-solid fa-angle-down accent-color"></i>
                                </a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/blog">Blog</a></li>
                                <li><a className="dropdown-item" href="/single_post">Single Post</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            </ul>
                        </div>
                        <div className="navbar-action-container">
                            <div className="navbar-action-button">
                                <ThemeSwitcher />
                            </div>
                            <div className="navbar-icon-wrapper">
                                <div className="icon-circle">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </div>
                                <h6>+1 (62) 987 7543</h6>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;