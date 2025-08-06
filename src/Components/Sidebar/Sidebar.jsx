import React from "react";

function Sidebar(){
    return(
        <>
            <div>
                <div className="sidebar-overlay"></div>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <div className="logo">
                            <img src="./public/assets/image/marko-logo.png" className="site-logo img-fluid logo" alt="Logo" />
                        </div>
                        <button className="close-btn"><span>X</span></button>
                    </div>
                    <ul className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li className="sidebar-dropdown">
                            <div className="dropdown-header">
                            <a href="#">Services</a>
                            <button className="sidebar-dropdown-btn">
                                <i className="fa-solid fa-angle-down"></i>
                            </button>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                                <li><a href="service">Service</a></li>
                                <li><a href="single_services">Service Details</a></li>
                            </ul>
                        </li>
                        <li className="sidebar-dropdown">
                            <div className="dropdown-header">
                                <a href="#">Pages</a>
                                <button className="sidebar-dropdown-btn">
                                    <i className="fa-solid fa-angle-down"></i>
                                </button>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                                <li><a href="case_studies">Case Studies</a></li>
                                <li><a href="team">Our Team</a></li>
                                <li><a href="partnership">Partnership</a></li>
                                <li><a href="pricing">Princing Plan</a></li>
                                <li><a href="testimonial">Testimonial</a></li>
                                <li><a href="faq">FAQs</a></li>
                                <li><a href="404_page">Error 404</a></li>
                            </ul>
                        </li>
                        <li className="sidebar-dropdown">
                            <div className="dropdown-header">
                            <a href="#">Archive</a>
                            <button className="sidebar-dropdown-btn">
                                <i className="fa-solid fa-angle-down"></i>
                            </button>
                            </div>
                            <ul className="sidebar-dropdown-menu">
                            <li><a href="blog">Blog</a></li>
                            <li><a href="single_post">Single Post</a></li>
                            </ul>
                        </li>
                        <li className="below-dropdown"><a href="contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Sidebar;