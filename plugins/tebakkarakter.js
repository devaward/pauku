const animeCharacter = require('anime-character-random')

let timeout = 120000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkarakter = conn.tebakkarakter ? conn.tebakkarakter : {}
    let id = m.chat
    if (id in conn.tebakkarakter) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkarakter[id][0])
        throw false
    }
    
    await animeCharacter.getRandomChar( async (anime) => {
    if (anime.status == 404) throw await anime.status
    let json = await anime
    if (!json.title) throw json
    let caption = `
Siapa Dia?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}char untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkarakter[id] = [
        await conn.sendFile(m.chat, json.image,'', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkarakter[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*

Japanese Name : ${json.japaneseName}
Anime : ${json.title}`, conn.tebakkarakter[id][0])
            delete conn.tebakkarakter[id]
        }, timeout)
    ]
})
}
handler.help = ['tebakkarakter','tchar']
handler.tags = ['game']
handler.command = /^(tebakkarakter|tchar)/i

module.exports = handler