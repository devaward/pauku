let handler = async m => m.reply(`
Gausa Donasi, kamu cukup beli premium 5k/minggu.
sama-sama menguntungkan kan?
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
module.exports = handler