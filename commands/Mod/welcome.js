module.exports = (client) => {

    // Welcome Message Command
      const welcomechannelId = '1006353804473675786' //Channel You Want to Send The Welcome Message
      const targetChannelId = `1006360923885273159` //Channel For Rules
  
      client.on('guildMemberAdd', (member) => {
          console.log(member)
          
          const welocmemessage = ` <@${member.id}> Benvenuto Coglione,
  Die Hard, read ${member.guild.channels.cache.get(targetChannelId).toString()}
  have A Nice Time!`
          const channel = member.guild.channels.cache.get(welcomechannelId)
          channel.send(welocmemessage)
      })
      
      // Leave Message Command
  
      const leavechannelId = '1006353804473675786' //Channel You Want to Send The Leave Message
  
      client.on('guildMemberRemove', (member) => {
          const leavemessage = `<@${member.id}> Just Left Server.`
  
          const channel1 = member.guild.channels.cache.get(leavechannelId)
          channel1.send(leavemessage)
      })
  }