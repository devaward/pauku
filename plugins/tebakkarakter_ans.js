const similarity = require('similarity')
const threshold = 0.70
module.exports = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*char/i.test(m.quoted.text)) return !0
        this.tebakkarakter = this.tebakkarakter ? this.tebakkarakter : {}
        if (!(id in this.tebakkarakter)) return m.reply('Soal itu telah berakhir')
        if (m.quoted.id == this.tebakkarakter[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.tebakkarakter[id][1]))
            // m.reply(JSON.stringify(json, null, '\t'))
            if(similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
                global.db.data.users[m.sender].exp += this.tebakkarakter[id][2]
                conn.sendFile(m.chat,json.image,'',`*Benar!*\n+${this.tebakkarakter[id][2]} XP

Anime : ${json.title}
Name : ${json.name}
Japanese Name : ${json.japaneseName}`, m)
                clearTimeout(this.tebakkarakter[id][3])
                delete this.tebakkarakter[id]
            } else m.reply(`*Salah!*`)
        }
        return !0
    },
    exp: 0
}
