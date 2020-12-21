import Discord from "discord.js";
import { prefix, commands } from "../config";

export const handler = (message: Discord.Message) => {

    // TODO.
    // make an array of commands, loop through them and execute a switch case based on the the command. 

    commands.forEach((item) => {
        if (message.content === `${prefix}${item.command}`) {
            message.channel.send(item.response());
        }
    }); 
};
