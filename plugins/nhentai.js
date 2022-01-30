let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if(!text || text.length>6) throw 'Masukkan Kode Nuklir yang Valid, coba cek di nhentai.net'
  let res = await fetch(`https://samehada.webnime.repl.co/?q=https://api.risqyananto.my.id/nhreader?query=${text}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.children[1].children) throw 'Error!'
  let imgs = []
  json.children[1].children.forEach(function(im, i) {
    if(im.tag == 'img') {
      imgs.push(im.src)
    }
  })
  m.reply(`[Ini Spam] Tunggu Sebentar.... Total #${imgs.length} Page`)
  let c = 0
  var interval = setInterval(function() {
     conn.sendFile(m.chat, imgs[c], false, false)
     c++
     c == imgs.length ? clearInterval(interval):false
 }, 1000)
}

handler.help = ['nh [nuklir]','nhentai [nuklir]']
handler.tags = ['Hen* / pkb']
handler.command = /^(nh|nhentai)$/i
handler.group = false
handler.private = true
handler.limit = true
module.exports = handler
