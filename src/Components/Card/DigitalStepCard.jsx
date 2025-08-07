import React from "react";
import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";

const DigitalStepCard = ({ icon, step, title, content, isFirst }) => {
    useAnimateOnScroll();

    return (
      <div className="digital-process-card animate-box animate__animated" data-animate="animate__fadeInUp">
            {!isFirst && <div className="step-spacer"></div>}
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
