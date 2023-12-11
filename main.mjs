import express from 'express';
import { messageTwilio } from './twilio.mjs';

let router = express.Router()

router.post("/message", async (req, res) => {

    // just import and call the function
    try {

        messageTwilio("Hi i am Ahad")
        res.send("message sent")

    } catch (error) {

        console.log(error);
        res.status(500).send("message not sent")

    }

})

export default router