let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *THREE:* 6289607997717
┣➥ *Dana:* 6285888258313
┣➥ *Gopay:* 6285888258313
┣➥ *Ovo:* 6285888258313
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285888258313*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
