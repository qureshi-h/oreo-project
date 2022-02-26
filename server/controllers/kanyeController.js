const client = require("../config/mongodb");

exports.addSubscriber = async (req, res) => {
    const { name, email } = req.body;

    try {
        await client.connect();
        const result = await client
            .db("TheOreoProject")
            .collection("kanyeSubscription")
            .updateOne({ email }, { $set: { name, email } }, { upsert: true });

        res.status(200).json({
            recordInserted: result.upsertedCount === 1 ? true : false,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: `${error}` });
    }
};
