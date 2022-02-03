import React from "react";
import { Helmet } from "react-helmet";
import { NavigationBar } from "../Components/UIElements/NavigationBar";

import { useParams } from "react-router-dom";

export const CountryInfoPage = () => {
    const { country } = useParams();
    return (
        <div className="countriesBackground">
            <Helmet>
                <title>The Oreo Project | </title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>
            <NavigationBar opacity={0.4} />
        </div>
    );
};
