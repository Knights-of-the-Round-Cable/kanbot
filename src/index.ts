import "dotenv/config";
import Discord from "discord.js";
import { handler } from "./commands/handler";

const main = async () => {

    // instancitate the client class.
    const client = new Discord.Client();

    // callback function once the bot is ready.
    client.once("ready", () => {
        console.log("Kanbot is ready!");
    }); 

    client.on("message", (message) => handler(message));

    // login to discord with the app's token.
    await client.login(process.env.BOT_TOKEN);
}; 

try {
    main();
} catch (err) {
    console.error(err);
    throw new Error(err);
};