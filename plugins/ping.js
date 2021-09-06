let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_Testing speed..._')
  let neww = performance.now()
  await conn.send2Button(m.chat, neww - old + 'ms', 'made by Fernazer', 'OK SIP', 'yoi', 'LANCAR', 'manteps', { quoted: m })
  
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
