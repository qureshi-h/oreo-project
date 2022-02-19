require("dotenv").config();
const transporter = require("../config/nodemailer");
const axios = require("axios");

async function main() {
    axios("https://api.kanye.rest", {
        method: "GET",
    }).then((data) => {
        const mail = {
            from: `"The Oreo Project" <${process.env.EMAIL_ACCOUNT}>`,
            to: "hamza.ahmedqureshi@hotmail.com",
            subject: "Your Daily Kanye Qoute",
            text: data.data.quote,
            html: `<b>${data.data.quote}</b>
            <img src="cid:oreo@kreata.ee"/>`,
            attachments: [
                {
                    filename: "kanye.jpeg",
                    path: "res/kanye-1.jpeg",
                    cid: "oreo@kreata.ee", //same cid value as in the html img src
                },
            ],
        };

        transporter.sendMail(mail, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Mail send to: " + toMail + "\ninfo: " + info);
            }
        });
    });
}

main().catch(console.error);
