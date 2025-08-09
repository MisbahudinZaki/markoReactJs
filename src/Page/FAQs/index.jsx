import React from "react";
import FaqSection from "../../Components/FAQs/faq";
import BannerInnerSection from "../../Components/Banner/Inner";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import { Helmet } from "react-helmet";

function FaqPage(){
    return(
        <>  
            <Helmet>
                <title>FAQs - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Simple, Direct, and Friendly" currentPage="FAQ" />
            <FaqSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
        </>
    );
}

export default FaqPage;