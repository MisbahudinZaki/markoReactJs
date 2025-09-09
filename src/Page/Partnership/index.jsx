import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PartnershipListSection from "../../Components/Partnership/PartnershipList";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import { Helmet } from "react-helmet-async";

function PartnershipPage(){
    return(
        <>
            <Helmet>
                <title>Partnership - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Partnership" currentPage="Partnership"/>
            <PartnershipListSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
        </>
    );
}

export default PartnershipPage;