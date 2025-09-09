import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import { Helmet } from "react-helmet-async";

function TestimonialPage(){
    return(
        <>
            <Helmet>
                <title>Testimonials - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Testimonials" currentPage="Testimonials" />
            <TestimonialSection />
            <NewsletterSection />
            <BlogSection />
        </>
    );
}

export default TestimonialPage;