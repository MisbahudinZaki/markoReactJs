import React from "react";
import { Helmet } from "react-helmet-async";
import BannerInnerSection from "../../Components/Banner/Inner";
import ContactSection from "../../Components/Contact/contact";
import MapsSection from "../../Components/Maps/map";

function ContactPage(){
    return(
        <>
            <Helmet>
                <title>Contact Us - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Contact Us" currentPage="Contact Us" />
            <ContactSection />
            <MapsSection />
        </>
    );
}

export default ContactPage;