import React from "react";

function BannerHomeSection(){
    return(
        <>
        <div className="section-banner">
    <div
        className="banner-video-container keep-dark animate-box animated animate__animated"
        data-animate="animate__fadeInUp"
    >
        <div id="banner-video-background"></div>
            <div className="hero-container position-relative">
                <div className="d-flex flex-column gspace-2">
                    <h1
                    className="title-heading-banner animate-box animated animate__animated"
                    data-animate="animate__fadeInLeft"
                    >
                    Amplify Your Brand with Cutting-Edge Digital Marketing
                    </h1>
                    <div className="banner-heading">
                    <div
                        className="banner-video-content order-xl-1 order-2 animate-box animated animate__animated"
                        data-animate="animate__fadeInUp"
                    >
                        <div className="d-flex flex-column flex-xl-row text-xl-start text-center align-items-center gspace-5">
                        <button
                            className="request-loader"
                            data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
                        >
                            <i className="fa-solid fa-play"></i>
                        </button>
                        <p>
                            Watch our video reviews and see how businesses achieve success
                            with Marko's digital marketing solutions.
                        </p>
                        </div>
                    </div>
                    <div
                        className="banner-content order-xl-2 order-1 animate-box animated animate__animated"
                        data-animate="animate__fadeInRight"
                    >
                        <p>
                        Marko empowers businesses to grow online with data driven digital
                        marketing, innovative branding, and performance focused strategies
                        trusted by top brands lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="d-flex flex-md-row flex-column justify-content-center justify-content-xl-start align-self-center align-self-xl-start gspace-3">
                        <a href="./about" className="btn btn-accent">
                            <div className="btn-title">
                            <span>Get Started</span>
                            </div>
                            <div className="icon-circle">
                            <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                        <div className="banner-reviewer">
                            <div className="d-flex flex-row align-items-center">
                            <img
                                src="./assets/image/Photo-14.jpg"
                                alt="Reviewer"
                                className="avatar"
                            />
                            <img
                                src="./assets/image/Photo-1.jpg"
                                alt="Reviewer"
                                className="avatar"
                            />
                            <img
                                src="./assets/image/Photo-2.jpg"
                                alt="Reviewer"
                                className="avatar"
                            />
                            </div>
                            <div className="detail">
                            <span>2.7k Positive</span>
                            <span>Reviews</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    );
}

export default BannerHomeSection;