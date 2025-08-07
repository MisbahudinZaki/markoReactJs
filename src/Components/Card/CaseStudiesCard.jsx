import React from "react";
import useAnimateOnScroll from "../Hooks/useAnimateOnScroll";

const CaseStudyCard = ({ title, description, tags, className, size }) => {
    useAnimateOnScroll();
    return (
      <div className={`card case-studies-content ${className} animate-box animated animate__animated`} data-animate="animate__fadeInUp">
          {size === "large" && (
              <div className={`case-studies-component ${size} align-self-end justify-content-end align-items-end`}>
                  {tags.map((tag, index) => (
                      <div key={index} className="cs-component">
                          <a href="#">{tag}</a>
                      </div>
                  ))}
              </div>
        )}
        <div className="d-flex flex-column gspace-2">
              <a href="#" className="case-studies-title"><h4>{title}</h4></a>
              <p>{description}</p>
        </div>
        {size === "small" && (
          <div className={`case-studies-component ${size} align-self-end justify-content-end align-items-end`}>
              {tags.map((tag, index) => (
                  <div key={index} className="cs-component">
                      <a href="#">{tag}</a>
                  </div>
              ))}
          </div>
        )}
      </div>
    );
};

export default CaseStudyCard;
