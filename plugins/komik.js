let
fetch = require('node-fetch'),
link = 'https://manga-api.animein.my.id'
let handler = async (m, { conn, usedPrefix, text, command, args }) => {
    if(args) {
	switch(args[0]) {
	    case 'cari':
		if(!args[1]) throw `Lu cari apa?\nContoh :\n${usedPrefix}komik cari *naruto*`
		const query = text.replace(new RegExp(args[0], "g"),'').trim()
		let search =
 await fetch(`${link}/search/${encodeURI(query)}`),
		ttext = query.split('/')
		if (!search.ok) throw await search.text()
		let {status, results} = await search.json()
		if(status !== 200) throw await 'Bad Request'
		let {pagination,data} = results, i = 0, caption = `Hasil Pencarian dari *${ttext[0]}*\nHalaman : ${pagination.current}\nTotal Halaman : ${pagination.last}\n\n`
		if(!data.length) caption = `Tidak Ditemukan`
		for(let d of data) {
		    caption += `╭─「 *${d.post_id}* 」\n│ ${d.title}\n╰────\n`
		    i++
		}
		if(pagination.current == pagination.last) {
		    m.reply(caption)
		} else {
		    conn.sendButton(m.chat, caption, 'jonaBot','Next', `${usedPrefix}komik ${ttext[0]}/${pagination.current+1}`, m, { contextInfo: { mentionedJid: conn.parseMention(caption)}})
		}
	    break;
	    case 'populer':
		
	    break;
	    case 'baru':
		
	    break;
	    case 'genre':
		
	    break;
	    case 'rekomen':
		
	    break;
	    default:
		m.reply('fitur komik masih dalam tahap pembuatan')
	    break;
	}
    } else {
	
    }
}
handler.help = ['komik']
handler.tags = ['animein']
handler.command = /^(komik)$/i
module.exports = handler