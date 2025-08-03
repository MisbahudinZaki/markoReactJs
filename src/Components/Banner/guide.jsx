import React from "react";

function GuideBannerSection(){
    return(
        <>
            <div className="section-guide">
                <div className="guide-banner">
                    <div className="hero-container">
                    <div className="guide-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                        <div className="guide-video-container">
                            <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                                <i className="fa-solid fa-play"></i>
                            </button>
                            <p>See How We Help Brands Grow</p>
                        </div>
                        <div className="d-flex flex-column gspace-2">
                            <h3 className="title-heading">Transform Your Business with Marko!</h3>
                            <p>Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuideBannerSection;