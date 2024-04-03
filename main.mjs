import express from 'express';
import { messageTwilio } from './twilio.mjs';

const app = express()

app.post("/message", async (req, res) => {

    // just import and call the function
    try {
        // message   // reciever number
        await messageTwilio
        ("Hi i am Ahad this message is sent from twilio ", '+923130019086')
        res.send("message sent")

    } catch (error) {

        console.log(error);
        res.status(500).send("message not sent")

    }

})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})