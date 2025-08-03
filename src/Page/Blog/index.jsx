import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";

function BlogPage(){
    return(
        <>
            <BannerInnerSection title="Our Blog" currentPage="Blog" />
            <BlogSection />            
        </>
    );
}

export default BlogPage;