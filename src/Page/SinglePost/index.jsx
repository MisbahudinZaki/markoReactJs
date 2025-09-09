import React from "react";
import { Helmet } from "react-helmet-async";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogPostSection from "../../Components/SinglePost/SinglePost";

function SinglePostPage(){
    return(
        <>
            <Helmet>
                <title>Single Post - Marko - Digital Marketing Agency</title>
            </Helmet>
            <BannerInnerSection title="Growth Strategies for Digital Businesse" currentPage="Single Post" />
            <BlogPostSection />

        </>
    );
}

export default SinglePostPage;