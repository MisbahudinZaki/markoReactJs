import React from "react";
import { Helmet } from "react-helmet";
import BannerInnerSection from "../../Components/Banner/Inner";
import ServiceSection from "../../Components/Services/service";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import PricingPlanSection from "../../Components/Pricing/Pricing";

function ServicePage(){
    return(
        <>
            <Helmet>
                <title>Services - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Our Services" currentPage="Services" />
            <ServiceSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <PricingPlanSection />
        </>
    );
}

export default ServicePage;