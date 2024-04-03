import twilio from 'twilio'; // install from npm and import
import 'dotenv/config'

// twilio acount sid & authToken
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// make a client with twilio acount sid & authToken
const client = twilio(accountSid, authToken);

// just made a function for sent message
export const messageTwilio = async (messageToSend, recieverNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            const message = await client.messages.create({
                body: messageToSend, // message
                from: process.env.TWILIO_PHONE_NUMBER, // from who
                to: recieverNumber //to who
            });
            resolve(message.sid);
        } catch (error) {
            reject(error);
        }
    })
};
