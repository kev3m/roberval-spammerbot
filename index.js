const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN ='ODUxMTIwOTg3MzQ0NjAxMDk5.YLzqMA.zPC5wIBLpI09dtufSpN2w_PJCjY';

client.on("ready",() => {

    console.log('Funcionando pae!');

});

client.on("message", (msg) =>{

   
   
    if(msg.content.toLowerCase() === "Oie".toLowerCase()) {
        msg.reply('Salve!');
    }

});

client.login(TOKEN);