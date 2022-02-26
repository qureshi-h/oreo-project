require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

module.exports = new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
