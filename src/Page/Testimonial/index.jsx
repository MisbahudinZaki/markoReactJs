import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function TestimonialPage(){
    return(
        <>
            <BannerInnerSection title="Testimonials" currentPage="Testimonials" />
            <TestimonialSection />
            <NewsletterSection />
            <BlogSection />
        </>
    );
}

export default TestimonialPage;