const Discord = require('discord.js');
const client = new Discord.Client();

client.queue = new Discord.Collection(); // Add This

const { prefix, token } = require('./config.json')
const welcome = require('./commands/Mod/welcome');
const loadCommands = require('./commands/load-commands');




client.once('ready', () => {
    console.log('Ready.')
    
    setInterval(() => {
        const statuses = [
            `Yasuo 0/10`,
            `Yasuo 10/0`,

   
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "PLAYING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 10000) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    welcome(client)
    loadCommands(client)
})




// Add This
client.on('voiceStateUpdate', (old, New) => {
    if(old.id !== client.user.id) return
    if(old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})








client.login(token)