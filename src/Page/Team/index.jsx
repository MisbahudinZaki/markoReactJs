import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import TeamExtendSection from "../../Components/Team/TeamExtend";
import { Helmet } from "react-helmet";

function TeamPage(){
    return(
        <>
            <Helmet>
                <title>Our Team - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Meet Our Team" currentPage="Our Team"/>
            <TeamExtendSection />
            <PartnershipSection />
            <ChooseUsSection />
        </>
    );
}

export default TeamPage;