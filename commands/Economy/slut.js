const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db
const ms = require('parse-ms') // npm i parse-ms


module.exports = {
    commands: ['slut'], 
    description: 'Beg For Money', 

    callback: async (message, args) => {

        const user = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min
        }

        const timeout = 60000 // 1 Min In MiliSecond
        const amount = Math.floor(Math.random() * 200) + 100  // max and min




        let actns = [ 
            'ti hanno scoperto mentre ti prostituivi con Riccardo e ti hanno fatto una multa di',
            'Hai quasi 1 milione di punti maestria? Il magister bestemmia e ti ruba',
            ]
    
            let actps = [
                'dopo 4 ore sulla tangenziale nessuno di ha beccato, guadagnando un totale di',
                'La riot ti assume e decidi di buffare brand, Il magister ti dona',
    
            ]
            const actn = Math.floor(Math.random() * actns.length)
            const actp = Math.floor(Math.random() * actps.length)
        

        let options = [
            'Success',
            'Failed',
        ]
        let begged = random(0, parseInt(options.length))
        let final = options[begged]
        const begtime = await db.get(`slut-time_${user.id}`) 

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
                .setDescription(`**${actps[actp]}** **$${amount}** 
                `)
                message.channel.send(embed1)
                db.set(`slut-time_${user.id}`, Date.now())

        } else if(final === 'Failed') {
            db.subtract(`money_${user.id}`, amount)
                const embed1 = new MessageEmbed()
                .setAuthor(`${user.user.username} Begged`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`**${actns[actn]}** **$${amount}** 
                `)
                message.channel.send(embed1)
                db.set(`slut-time_${user.id}`, Date.now())
        }
    }
    }}
