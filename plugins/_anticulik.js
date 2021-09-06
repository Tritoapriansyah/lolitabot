let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6285888258313
• *3:* 6289607997717
• *Indosat:* 6285888258313

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *saweria* saweria.co/Trito

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285888258313', 'Pemilik Bot', idnya)
  }
  return true
}

module.exports = handler