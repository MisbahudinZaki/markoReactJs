import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import ChooseUsSection from "../../Components/ChooseUs/choose";

function PricingPage(){
    return(
        <>
            <BannerInnerSection title="Pricing Plan" currentPage="Pricing Plan" />
            <PricingPlanSection />
            <DigitalProcessSection />
            <ChooseUsSection />
        </>
    );
}

export default PricingPage;