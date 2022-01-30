let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let cat = ['waifu','neko','trap','blowjob'].includes(text) ? text : 'waifu';
  let res = await fetch(`https://api.waifu.pics/nsfw/${cat}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Jangan dibuat Bahan!1!1!', m)
}
handler.help = ['nsfw [waifu|trap|blowjob|neko]']
handler.tags = ['Hen* / pkb']
handler.command = /^(waifunsfw|nsfw)$/i
handler.group = false
handler.private = true
handler.limit = true
module.exports = handler
