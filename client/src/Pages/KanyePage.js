import React from "react";
import { Helmet } from "react-helmet";
import { KanyeQuote } from "../Components/Kanye/KanyeQuote";

export const KanyePage = () => {
    return (
        <div className="kanyeBackground">
            <Helmet>
                <title>The Oreo Project | Home</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>
            <KanyeQuote />
        </div>
    );
};
