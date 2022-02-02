import React from "react";

import { Header } from "../Components/LandingPage/Header";
import { Helmet } from "react-helmet";

export const LandingPage = () => {
    return (
        <div>
            <Helmet>
                <title>The Oreo Project | Home</title>
            </Helmet>
            <Header />
        </div>
    );
};
