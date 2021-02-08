const Discord = require ("discord.js");

module.exports = {
    name: "say",
    description: "says a message inputted after>say",
    usage: "!say <input>",
    aliases: ["s"], 
    execute(message, args) {
        const sayMessage = args.join(" ");
        message.channel.send(sayMessage);
    },
};