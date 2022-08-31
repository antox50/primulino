const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db
const ms = require('parse-ms') // npm i parse-ms


module.exports = {
    commands: ['work'], 
    description: 'Beg For Money', 

    callback: async (message, args) => {

        const user = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min
        }

        const timeout = 60000 // 1 Min In MiliSecond
        const amount = Math.floor(Math.random() * 200) + 100  // max and min




        let acts = [ // Find More Names In Description
            'Sei andato 10/0 con yasuo e hai vinto il game senza mai morire e il tuo jngler ti ha dato',
            'Sei andato 0/10 con yasuo quindi @rig è fiero di te e ti ha dato',
            'Hai stuprato una bambina? @492382616922619935 ti sente e decide di darti',
        ]
        
        const act = Math.floor(Math.random() * acts.length) // To Get Random Name
        

        let options = [
            'Success',
        ]
        let begged = random(0, parseInt(options.length))
        let final = options[begged]
        const begtime = await db.get(`work-time_${user.id}`) 

        if(begtime !== null && timeout - (Date.now() - begtime) > 0) {
            const timeleft = ms(timeout - (Date.now() - begtime))

            const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} Begged`, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`
Already Begged, Beg Again In **${timeleft.seconds}**
Default CoolDown Is **1 Minutes**
            `)
            message.channel.send(embed)
        } else {
            if(final === 'Success') {

           //     const give = Math.floor(Math.random() * gave.length)
               
                db.add(`money_${user.id}`, amount)
                const embed1 = new MessageEmbed()
                .setAuthor(`${user.user.username} Begged`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`**${acts[act]}** **$${amount}** 
                `)
                message.channel.send(embed1)
                db.set(`work-time_${user.id}`, Date.now())
        }}
    }}
