let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya FERNAZER BOT\nPilih Menu Di Bawah Yaa\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/CAKETl3LJdELqHTqOJtH4S\n\nSubscribe Me\nhttps://youtube.com/channel/UCB9T1d_LG16EHf350BZIIYw",
                        "description": "*lolitabot*",
                        "buttonText": "PILIH SALAH SATU BRE",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nI Want To Use Download Menu",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nI Want To Use Button Menu",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nI Want To Use All Menu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nI Want To Use Jadibot Menu",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nI Want To Use Owner Menu",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nI Want To Use Hentai Menu",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nI Want To Use Absen Menu",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nI Want To User Group Setting",
                                        "rowId": ".groupset"
                                    }, {    
                                        "title": "Primbon Menu",
                                        "description": "\nI Want To Use Peimbon Menu",
                                        "rowId": ".primbonmenu"
                                        
                                    }, {       
                                        "title": "Dewasa Menu",
                                        "description": "\nI Want To Use Dewasa Menu",
                                        "rowId": ".dewasamenu"
                                        
                                   }, {        
                                        "title": "Edukasi Menu",
                                        "description": "\nI Want To Use Edukasi",
                                        "rowId": ".educationmenu"
                                        
                                   }, {             
                                        "title": "Editod Menu",
                                        "description": "\nI Want To Use Editor Menu",
                                        "rowId": ".editormenu"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['apaluwahyukan','wey']
handler.register = true
module.exports = handler