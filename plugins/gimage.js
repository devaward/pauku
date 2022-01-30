let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) throw `Cari apa?
Example : *.gimage cowo cakep*`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  let filter_18 = ['cum','gay','lesbi','meki','penis','nenen','tetek','porn','naked','bokep','hentai','memek','kontol','bugil']
  if (!url) throw '404 Not Found'
  if(filter_18.includes(text) == true) throw 'maaf bruh kategorimu dewasa bgt ajg, nnti botnya ikut sagne :\'3'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
