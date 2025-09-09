import React from "react";
import { Helmet } from "react-helmet-async";
import BannerInnerSection from "../../Components/Banner/Inner";
import SingleServiceSection from "../../Components/SingleService/singleservice";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

function SingleServicePage(){
    return(
        <>
          <Helmet>
            <title>Single Service - Marko - Digital Marketing Agency</title>
          </Helmet>
          <BannerInnerSection title="Social Media Marketing" currentPage="Services Details" />
          <SingleServiceSection />
          <TestimonialSection />
          <NewsletterSection />
          <FaqSection />
        </>
    );
}

export default SingleServicePage;