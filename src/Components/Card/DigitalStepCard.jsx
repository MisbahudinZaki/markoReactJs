import React from "react";

const DigitalStepCard = ({ icon, step, title, content }) => {
  return (
    <div className="d-flex flex-md-row flex-column gspace-2 animate-box animate__animated" data-animate="animate__fadeInUp">
        <div className="step-spacer"></div>
        <div className="digital-process-step">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={icon} alt="Digital Process Icon" className="process-icon" />
                </div>
                <span>{step}</span>
            </div>
            <div className="d-flex flex-column gspace-2">
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    </div>
  );
};

export default DigitalStepCard;
