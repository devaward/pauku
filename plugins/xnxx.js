const fetch = require('node-fetch')
const jsdom = require("jsdom")
const { JSDOM } = jsdom

let handler = async (m, { conn, text, usedPrefix, command } ) => {
    let d = new Date(new Date + 3600000)
    let time = parseInt(d.toLocaleTimeString('id', {hour: 'numeric'}))
    if(time < 23 && time > 04) throw await `Fitur hanya bisa digunakan pada pukul 23:00 s/d 04:00 WIB`

    conn.reply(m.chat, time + ' tunggu sebentar... kalo lama kemungkinan size bokep nya lebih dari 100mb. jadi ulang, ini bukan telegram', m)

    let y = Math.floor(Math.random() * 21)+16
    let w = Math.floor(Math.random() * 12)+1
    let p = Math.floor(Math.random() * 20)+1
    let xnxx = 'https://xnxx.com'

    let u = `${xnxx}/best/20${(y<10?'0':'')+(y>22?21:y)}-${(w<10?'0':'')+w}/${p}`
    let res = await fetch(u)
    if (!res.ok) throw await res.text()
    let html = await res.text()
    let {document} = new JSDOM(html).window 
    let links = document.querySelectorAll('.thumb-under a')
    let link_x = await links[Math.floor(Math.random() * (links.length-1))]

    let res2 = await fetch(`https://api.risqyananto.my.id/xnxx?url=${xnxx + link_x.href}`)
    if(!res2.ok) throw await res2.text()
    let json = await res2.json()
    let {title,duration,view,rating,like,dislike,comment,tag,description,link} = json.result

    let caption = `*${title} (${duration})*
views : ${view}
rating : ${rating}
like : ${like}
dislike : ${dislike}
comment : ${comment}

*Description*
${description}
`
    conn.sendFile(m.chat, link[1].link, '', caption, m)
}

handler.help = ['xnxx {random}','x {random}']
handler.tags = ['Hen* / pkb']
handler.command = /^(x|xnxx)$/i
handler.group = false
handler.private = true
habdler.premium = true
handler.limit = true
module.exports = handler