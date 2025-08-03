import React from "react";

const ContactForm = () => {
  return (
    <div className="form-layout-wrapper">
        <div className="card form-layout">
            <h3 className="title-heading">Let's Talk About Your Next Project</h3>
            <form action="./assets/php/form_process.php" method="post" id="contactForm" className="form needs-validation">
            <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                    <input type="text" name="first-name" id="first-name" placeholder="First Name" />
                </div>
                <div className="col">
                    <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
                </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                    <input type="email" name="email" id="email" placeholder="Email Address" required />
                </div>
                <div className="col">
                    <input type="text" name="subject" id="subject" placeholder="Subject" />
                </div>
            </div>
            <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
            <div className="form-button-container">
                <button type="submit" className="btn btn-accent">
                <span className="btn-title">
                    <span>Send a Message</span>
                </span>
                <span className="icon-circle">
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
                </button>
            </div>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;
