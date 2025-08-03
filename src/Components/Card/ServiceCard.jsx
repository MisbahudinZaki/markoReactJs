import React from "react";

const ServiceCard = ({icon, title, content, link, speed = ""}) => {
    return(
        <>
            <div className={`card card-service animate-box animate__animated animated ${speed}`} data-animate="animate__fadeInLeft">
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                    <div>
                        <div className="service-icon-wrapper">
                            <div className="service-icon">
                                <img src={icon} alt="Service Icon" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="service-title">
                        <h4>{title}</h4>
                    </div>
                </div>
                <p>{content}</p>
                <a href={link} className="btn btn-accent">
                    <div className="btn-title">
                        <span>View Details</span>
                    </div>
                    <div className="icon-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ServiceCard;