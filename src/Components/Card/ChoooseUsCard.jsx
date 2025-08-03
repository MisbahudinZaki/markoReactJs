import React from "react";

const ChooseUsCard = ({icon, title, content, link, speed}) => {
    return (
        <div className={`card card-chooseus animate-box animate__animated animated ${speed}`} data-animate="animate__fadeInLeft">
            <div className="chooseus-icon-wrapper">
                <div className="chooseus-spacer above"></div>
                    <div className="chooseus-icon-layout">
                        <div className="chooseus-icon">
                            <img src={icon} alt="Why Choose Us Icon" className="img-fluid" />
                        </div>
                    </div>
                <div className="chooseus-spacer below"></div>
            </div>
            <div className="chooseus-content">
                <h4 className="chooseus-title">{title}</h4>
                <p>{content}</p>
                <div className="link-wrapper">
                    <a href={link}>Read More</a>
                    <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                </div>
            </div>
        </div>
      );
};

export default ChooseUsCard;