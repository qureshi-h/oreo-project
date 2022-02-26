import React from "react";

import Select from "react-select";
import countries from "./countries.json";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export const SelectCountry = () => {
    const [disabled, setDisabled] = React.useState(false);
    const [country, setCountry] = React.useState(countries.data[0].name);
    const navigate = useNavigate();

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
            return {
                ...styles,
                backgroundColor: isFocused ? "#2584FF" : "white",
                color: "#000000",
                cursor: isDisabled ? "not-allowed" : "default",
            };
        },
    };

    const handleClick = () => {
        setDisabled(true);
        navigate(`info/${country}`);
    };

    return (
        <div className="selectCountry">
            <h1>Select a Country to find out more...</h1>
            <Select
                className="selectBox"
                options={countries.data}
                onChange={(option) => setCountry(option.name)}
                styles={colourStyles}
                placeholder={country}
            />
            <Button
                disabled={disabled}
                variant="contained"
                className="selectCountryButton"
                sx={{
                    marginLeft: "1.5vw",
                    borderRadius: "0.5rem",
                    fontSize: "1.2rem",
                }}
                onClick={handleClick}
            >
                Search
            </Button>
        </div>
    );
};
