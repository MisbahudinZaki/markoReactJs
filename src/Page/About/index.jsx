import React from "react";
import { Helmet } from "react-helmet-async";
import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import TeamSection from "../../Components/Team/Team";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function AboutPage(){
    return(
        <>
            <Helmet>
                <title>About - Marko Digital Agency</title>
            </Helmet>
            <BannerInnerSection title="About Marko" currentPage="About Us" />
            <AboutSection />
            <PartnershipSection />
            <ChooseUsAboutSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TeamSection />
            <DigitalProcessSection />
            <TestimonialSection />
        </>
    );
}

export default AboutPage;