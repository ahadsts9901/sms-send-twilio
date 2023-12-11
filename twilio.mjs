import twilio from 'twilio'; // install from npm and import
import 'dotenv/config'

// twilio acount sid & authToken
const accountSid = procss.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// make a client with twilio acount sid & authToken
const client = twilio(accountSid, authToken);

// just made a function for sent message
export const messageTwilio = async (messageToSend) => {
    try {
        const message = await client.messages.create({
            body: messageToSend, // message
            from: '+12034081376', // from who
            to: '+923130019086' //to who
        });
        console.log(message.sid);
    } catch (error) {
        console.error(`Error sending message: ${error.message}`);
    }
};
