require("dotenv").config();
const transporter = require("../config/nodemailer");
const axios = require("axios");
const client = require("../config/mongodb");
const mailTemplate = require("./mailTemplate");

async function main() {
    await client.connect();
    const subscribers = await client
        .db("TheOreoProject")
        .collection("kanyeSubscription")
        .find()
        .toArray();
    console.log(subscribers.map((subscriber) => subscriber.email).join(", "));
    axios("https://api.kanye.rest", {
        method: "GET",
    }).then((data) => {
        const mail = {
            from: `"The Oreo Project" <${process.env.EMAIL_ACCOUNT}>`,
            // to: subscribers.map((subscriber) => subscriber.email).join(", "),
            to: "hamza.ahmedqureshi@hotmail.com",
            subject: "Your Daily Kanye Qoute",
            text: data.data.quote,
            html: mailTemplate(data.data.quote),
            attachments: [
                {
                    filename: "kanye.jpeg",
                    path: "res/kanye-1.jpeg",
                    cid: "oreo@kreata.ee",
                },
            ],
        };
        transporter.sendMail(mail, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
        });
    });
}

main().catch(console.error);
