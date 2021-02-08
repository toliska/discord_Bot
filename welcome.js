module.exports = (client) => {
    const channelId = '804107556808556575' // welcome channel
    const targetChannelId = '804090378437132288' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      const message = `Kalosorises <@${
        member.id
      }> ston server mas! Des ta rules ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }