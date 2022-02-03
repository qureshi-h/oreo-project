import React from "react";

export const CountryInfo = ({ country }) => {
    const getInfo = () => {
        fetch(`https://restcountries.com/v3.1/name/${country}`, {
            method: "GET",
        })
            .then((response) => response.json)
            .then((data) => {
                console.log(data);
            });
    };
    return <div></div>;
};
