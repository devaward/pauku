const fetch = require('node-fetch')
const wiki = require('wikipedia')
let handler = async (m, { usedPrefix, text }) => {
    if(!text) await `Cari apa?
Contoh : ${usedPrefix} mitologi yunani`
    (async () => {
	try {
	    const page = await wiki.page(text)
	    console.log(page);
	    //Response of type @Page object
	    const summary = await page.summary();
	    console.log(summary)
	    m.reply(summary)
	} catch (error) {
	    console.log(error);
	    //=> Typeof wikiError
	}
    })();
}
handler.help = ['wiki']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
//belajar ngocok
module.exports = handler
