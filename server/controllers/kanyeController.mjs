import fetch from "node-fetch";

exports.getQoute = () => {
    return fetch("https://api.kanye.rest", {
        method: "GET",
    });
};
