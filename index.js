const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')
const firstMessage = require('./first-message')
const privateMessage = require('./private-message')
const roleClaim = require('./role-claim')
const poll = require('./poll.js')
//const memberCount = require('./member-count')
const welcome = require('./welcome')
const antiAd = require('./anti-ad')
//const say = require('./say.js')



client.on('ready', () => {
  console.log('The client is ready!')                       
  const message = []
  const args = []
  roleClaim(client)
  poll(client)
  welcome(client)
  //memberCount(client)
  antiAd(client)
  //say.execute(message, args);

  command(client, 'help', (message) => {
    message.channel.send(`
These are all my supported commands:
**!help** - Displays the help menu
**!cc** - Svinei ola ta minimata tou channel
**!serverinfo** - Dixnei info gia ton server
`)
  })

  

  
  privateMessage(client, '!needhelp', 'If you need help you can contact the developer **Jesusboy69#7925**')
  command(client, 'serverinfo', (message) => {
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )
      

    message.channel.send(embed)
  })


  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!')
  })
  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} memebers`
      )
    })
  })
  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })










  
  












































































































































































































































































  client.user.setPresence({
    activity: {
      name: `Jesus's Developing            Made by Jesusboy69#6969`,
    },
  })
  
  
  








})




client.login(config.token)