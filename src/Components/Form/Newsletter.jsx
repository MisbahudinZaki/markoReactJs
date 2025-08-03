import React, { useState } from "react";

function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            setError(true);
            setSuccess(false);
        } else {
            setSuccess(true);
            setError(false);
            setEmail("");
        }
    };

    return (
        <div className="section">
            <div className="hero-container">
                <div className="newsletter-wrapper">
                    <div className="newsletter-layout">
                        <div className="spacer"></div>
                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <div
                                className="d-flex flex-column gspace-2 animate-box animate__animated"
                                data-animate="animate__fadeInLeft"
                            >
                                <h3 className="title-heading">Stay Ahead in Digital Marketing</h3>
                                <p>
                                    Get exclusive insights, trends, and strategies delivered straight to your inbox.
                                    Subscribe now!
                                </p>
                            </div>

                            {success && (
                                <div className="alert success">
                                    <span className="check-icon">
                                        <i className="fa-solid fa-2xl fa-check"></i>
                                    </span>
                                    <p className="text-center">Thank you! Form submitted successfully.</p>
                                </div>
                            )}

                            {error && (
                                <div className="alert error">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p className="text-center">Oops! Please enter a valid email.</p>
                                </div>
                            )}

                            <form
                                id="newsletterForm"
                                onSubmit={handleSubmit}
                                className="needs-validation animate-box animate__animated"
                                data-animate="animate__fadeInRight"
                            >
                                <div className="input-container">
                                    <input
                                        type="email"
                                        name="newsletter-email"
                                        id="newsletter-email"
                                        placeholder="Give your best email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className="btn btn-accent" type="submit">
                                    <span className="btn-title">
                                        <span>Subscribe</span>
                                    </span>
                                    <span className="icon-circle">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSection;