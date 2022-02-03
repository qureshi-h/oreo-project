import React from "react";
import { EntertainmentDropdown } from "./Dropdown";

const entertainmentMenu = [{ name: "Kanye Qoutes", path: "/kanye" }];
const informationalMenu = [{ name: "Countries Databse", path: "/countries" }];

export const NavigationBar = ({ opacity }) => {
    return (
        <div className="navbar">
            <div
                style={{
                    alignItems: "center",
                    justifyContent: "left",
                    display: "flex",
                    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
                    height: "100%",
                    width: "100vw",
                    paddingLeft: "6vw",
                }}
            >
                <a href="/" className="navbarText">
                    Home
                </a>
                <EntertainmentDropdown
                    opacity={opacity}
                    name="Entertainment"
                    menu={entertainmentMenu}
                />
                <EntertainmentDropdown
                    opacity={opacity}
                    name="Informational"
                    menu={informationalMenu}
                />
            </div>
        </div>
    );
};

NavigationBar.defaultProps = {
    opacity: 0.013,
};
