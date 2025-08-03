import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import TeamExtendSection from "../../Components/Team/TeamExtend";

function TeamPage(){
    return(
        <>
            <BannerInnerSection title="Meet Our Team" currentPage="Our Team"/>
            <TeamExtendSection />
            <PartnershipSection />
            <ChooseUsSection />
        </>
    );
}

export default TeamPage;