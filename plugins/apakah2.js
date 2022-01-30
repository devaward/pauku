let handler = async (m, { command, text }) => {
  if(!text) throw await 'mksd?'
  m.reply(`${pickRandom(['Y','Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin','gtw','tanya mulu kek dora','coba tanya wahyu, cape w jawab','mbuh','YNTKTS','apasi','mbuh','dhlah cape jwb'])}`.trim())
}
handler.help = ['apakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^apakah$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}