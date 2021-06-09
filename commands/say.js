//comando apenas para teste
module.exports.run = async(client, message, args) => {

  const sayMessage = args.join(" ");
  message.delete().catch(() =>{})
  message.channel.send(sayMessage);

}