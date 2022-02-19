const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const Bree = require("bree");

const PORT = process.env.PORT || 5001;

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(cors());

const bree = new Bree({
    jobs: [
        {
            name: "kanyeSubscription",
            cron: "00 20 * * *",
        },
    ],
});

bree.start();

app.listen(PORT, () => {
    console.log("CORS-enabled web server listening on port", PORT);
});

module.exports = app;
