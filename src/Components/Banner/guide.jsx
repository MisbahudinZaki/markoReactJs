import React from "react";
import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";
import VideoButton from "../Video/VideoButton";

function GuideBannerSection(){
    useAnimateOnScroll();
    return(
        <>
            <div className="section-guide">
                <div className="guide-banner">
                    <div className="hero-container">
                    <div className="guide-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
                        <div className="guide-video-container">
                            <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
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