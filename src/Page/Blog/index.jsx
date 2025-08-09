import React from "react";
import { Helmet } from "react-helmet";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";

function BlogPage(){
    return(
        <>
            <Helmet>
                <title>Blog - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Our Blog" currentPage="Blog" />
            <BlogSection />            
        </>
    );
}

export default BlogPage;