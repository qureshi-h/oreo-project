import React from "react";

import Select from "react-select";
import countries from "./countries.json";

export const SelectCountry = () => {
    const [country, setCountry] = React.useState("");

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            height: "7vh",
            borderRadius: "1rem",
        }),

        input: (provided, state) => ({
            ...provided,
            marginLeft: "1.5rem",
        }),

        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = data.color;
            return {
                ...styles,
                backgroundColor: isDisabled ? "grey" : "white",
                color: "#000000",
                cursor: isDisabled ? "not-allowed" : "default",
            };
        },
    };

    return (
        <div className="selectCountry">
            <h1>Select a Country to find out more...</h1>
            <Select
                className="selectBox"
                options={countries.data}
                onChange={(option) => setCountry(option.name)}
                styles={colourStyles}
                placeholder={countries.data[0].name}
            />
        </div>
    );
};
