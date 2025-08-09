import React from "react";
import { Helmet } from "react-helmet";
import BannerInnerSection from "../../Components/Banner/Inner";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function CaseStudiesPage(){
    return(
        <>
            <Helmet>
                <title>Case Studies - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Case Studies" currentPage="Case Studies"/>
            <CaseStudiesSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
        </>
    );
}

export default CaseStudiesPage;