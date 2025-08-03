import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogPostSection from "../../Components/SinglePost/SinglePost";

function SinglePostPage(){
    return(
        <>
            <BannerInnerSection title="Growth Strategies for Digital Businesse" currentPage="Single Post" />
            <BlogPostSection />

        </>
    );
}

export default SinglePostPage;