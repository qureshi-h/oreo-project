import React from "react";
import { EntertainmentDropdown } from "./EntertainmentDropdown";

export const NavigationBar = () => {
    return (
        <div>
            <div className="navbar">
                <div
                    style={{
                        alignItems: "left",
                        justifyContent: "left",
                        marginLeft: "4vw",
                        display: "inline",
                    }}
                >
                    <a href="/" className="navbarText">
                        Home
                    </a>
                    <EntertainmentDropdown />
                </div>
            </div>
        </div>
    );
};
