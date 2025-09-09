import React from "react";
import { Helmet } from "react-helmet-async";
import NotFoundSection from "../../Components/NotFound/notfound";

function NotFoundPage(){
    return(
        <>
            <Helmet>
                <title>Error 404 - Marko - Digital Marketing Agency</title>
            </Helmet>
            <NotFoundSection />
        </>
    );
}

export default NotFoundPage;