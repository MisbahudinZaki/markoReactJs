import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import SingleServiceSection from "../../Components/SingleService/singleservice";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

function SingleServicePage(){
    return(
        <>
          <BannerInnerSection title="Social Media Marketing" currentPage="Services Details" />
          <SingleServiceSection />
          <TestimonialSection />
          <NewsletterSection />
          <FaqSection />
        </>
    );
}

export default SingleServicePage;