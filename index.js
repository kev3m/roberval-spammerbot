const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');
const TOKEN = process.env.TOKEN;
const config = require("./config.json");

require('dotenv').config()


//Conexão com mongodb
mongoose.connect('mongodb+srv://kevenjkc:datafag123@cluster0.pheev.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("conectado ao mongodb"));



client.on("ready",() => {
    console.log('Funcionando pae!');
});

//Bot status
client.on("ready",() => {
    console.log('Funcionando pae!');
    client.user.setActivity('Salve meu querido🐓, o prefixo do bot é: r!. Use com moderação(ou não).', {type: "PLAYING"}).catch(console.error)
});

client.on("message", (msg) =>{
    if(msg.content.toLowerCase() === "Oie".toLowerCase()) {
        msg.reply('Salve!');
    }

});

client.on("message", async message =>{
if(message.author.bot) return;
if (message.channel.type === "dm") return;
if (!message.content.startsWith(config.prefix)) return;
if (message.content.startsWith (`<@!${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);

// Leitura dos comandos na pasta comandos
try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
}  catch (err) {
    console.error("Erro" + err);
}

})

client.login(process.env.TOKEN);