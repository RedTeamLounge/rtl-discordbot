const syntax = '..'

const discord = require('discord.js')
const client = discord.Client();
client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    })
client.on('message', async msg => {
   if(msg.content.startsWith(syntax+"hello")) {
     msg.reply("world!")
   }
})
client.login('m yes we put out token here, yes yes')
