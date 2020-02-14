const Discord = require('discord.js');
const client = new Discord.Client();
const token = '' // Insert Discord Bot Token


client.on('ready', () => {
    console.log('Online');
})

client.on('message', message => { 
    if (message.author.id == ''){ // Insert the users ID that you want to call a boomer e.g 164519090582519808 <-- Whether this is an ID, I am unaware of.
        message.channel.send('Okay Boomer');
    }

})

client.login(token)