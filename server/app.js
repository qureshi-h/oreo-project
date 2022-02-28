const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const client = require("./config/mongodb");

const kanyeRoutes = require("./routes/kanyeRoutes");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Routes
app.use("/kanye", kanyeRoutes);

app.listen(PORT, () => {
    console.log("CORS-enabled web server listening on port", PORT);
});

module.exports = app;
