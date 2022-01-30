let handler = async (m, { conn }) => {
    conn.tebakkarakter = conn.tebakkarakter ? conn.tebakkarakter : {}
    let id = m.chat
    if (!(id in conn.tebakkarakter)) throw false
    let json = conn.tebakkarakter[id][1]
    let ans = json.title.trim()
    m.reply(`Karakter tersebut ada di Anime *${ans}*`)
}
handler.command = /^char$/i
handler.limit = true
module.exports = handler