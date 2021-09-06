const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return m.reply(`contoh:\n${usedPrefix + command} jakarta`)
    let res = await fetch(global.API('zeks', '/api/jadwalsholat', { daerah: text }, 'apikey'))
    if (res.status != 200) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) {
        if (json.message == 'use of apikey reached the limit') throw json
        let hasil = json.listdaerah.map((v, i) => `│ ${i + 1}. ${v}`).join`\n`
        m.reply(`
*${json.message}*

contoh:
${usedPrefix + command} jakarta

┌ *Daftar Daerah*
│ 
${hasil}
│ 
└────`.trim())
        throw false
    }
   // m.reply(`Jadwal Sholat ${text}\n\n${json.data.string}`.trim())
    await conn.send2Button(m.chat, `${text}\n\n${json.data.string}`, 'made by Fernazer', 'YA ALLAH', '.', 'SHOLLAT YA', '.', { quoted: m })

}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler