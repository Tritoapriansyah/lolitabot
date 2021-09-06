let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*SC Ini Menggunakan Termux*
Mau Lihat Sc Nya? Pilih Di Bawah Kak
_Password Ada Di Video_
_Jika Tidak Menemukannya Bisa Chat_
_wa.me/6281328139682_
`.trim()
await conn.send2Button(m.chat, info, 'made by Fernazer', 'VIA YT', '.chadmin', 'VIA GITHUB', '.github', { quoted: m })
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler
 