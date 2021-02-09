const Discord = require('discord.js');
const firstMessage = require('./first-message')

module.exports = (client) => {
  const channelId = '808084995117547570' //done

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    onduty : 'onduty',
  }

  const reactions = []

  let emojiText = 'pane on duty\n\n'
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
  }

  firstMessage(client, channelId, emojiText, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '785611158581280789') { //to id tou bot gia na ekserite
      return 
    }785611158581280789

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)
    const channelId = '808086667360600105' // to id gia ta logs tou on duty 



    const embedd = new Discord.MessageEmbed() //embed log gia to on duty
    .setColor('#0099ff')
	  .setTitle('On duty')
	.setDescription(`Ο  ${
    user
   } πήγε on duty`)
  .setTimestamp()
  const channel = member.guild.channels.cache.get(channelId)
  

  





  const embeddd = new Discord.MessageEmbed() //embed log gia to off duty 
    .setColor('#0099ff')
	  .setTitle('Off duty')
	.setDescription(`Ο  ${
    user
   } πήγε off duty`)
  .setTimestamp()
  

  

	



    if (add) {
      member.roles.add(role)
      channel.send(embedd)
    } else {
      member.roles.remove(role)
      channel.send(embeddd)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}
