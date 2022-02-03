import React from "react";
import { Helmet } from "react-helmet";
import { SelectCountry } from "../Components/Countries/SelectCountry";
import { KanyeQuote } from "../Components/Kanye/KanyeQuote";
import { NavigationBar } from "../Components/UIElements/NavigationBar";

export const CountriesSearchPage = () => {
    return (
        <div className="countriesBackground">
            <Helmet>
                <title>The Oreo Project | Kanye Quotes</title>
                <style>{"body { background-color: #060026; }"}</style>
            </Helmet>
            <NavigationBar opacity={0.4} />
            <SelectCountry />
        </div>
    );
};
