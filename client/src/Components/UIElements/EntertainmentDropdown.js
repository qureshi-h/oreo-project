import React from "react";
// import { HashLink } from "react-router-hash-link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const menu = [{ name: "Kanye Qoutes", path: "/kanye" }];

export const EntertainmentDropdown = () => {
    const [showTools, setShowTools] = React.useState(false);

    return (
        <div
            style={{
                display: "inline-flex",
                justifyContent: "left",
                alignItems: "left",
            }}
            onMouseEnter={() => {
                setShowTools(true);
            }}
            onMouseLeave={() => {
                setShowTools(false);
            }}
        >
            <Link
                to="/#tools"
                scroll={(el) =>
                    el.scrollIntoView({
                        behavior: "auto",
                        block: "start",
                    })
                }
                style={{ textDecoration: "none", zIndex: "3" }}
            >
                <p className="navbarText">
                    Entertainment <RiArrowDropDownLine size={"1.2em"} />
                </p>
            </Link>

            {showTools && (
                <div className="toolsDropdown">
                    {menu.map((item) => (
                        <Link to={item.path} style={{ textDecoration: "none" }}>
                            <div className="toolsDropdownItem toolsDropdownText">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
