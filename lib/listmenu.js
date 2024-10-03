//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
┌──『•• 🎯 *Oᴡɴᴇʀ* 🎯 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
⬡│▸ ${prefix}ᴀᴜᴛᴏʙɪᴏ
⬡│▸ ${prefix}ᴀᴜᴛᴏᴛʏᴘᴇ
⬡│▸ ${prefix}ᴜɴᴀᴠᴀɪʟᴀʙʟᴇ
⬡│▸ ${prefix}ᴀᴜᴛᴏʀᴇᴄᴏʀᴅ
⬡│▸ ${prefix}ᴀᴜᴛᴏʀᴇᴄᴏʀᴅᴛʏᴘᴇ
⬡│▸ ${prefix}ᴀᴜᴛᴏꜱᴡᴠɪᴇᴡ
⬡│▸ ${prefix}ꜱᴇᴛᴀᴜᴛᴏʙʟᴏᴄᴋ
⬡│▸ ${prefix}ꜱᴇᴛᴀɴᴛɪꜰᴏʀᴇɪɢɴ
⬡│▸ ${prefix}ᴀᴜᴛᴏʙʟᴏᴄᴋ
⬡│▸ ${prefix}ᴏɴʟʏɢᴄ
⬡│▸ ${prefix}ᴏɴʟʏᴘᴄ
⬡│▸ ${prefix}ᴏɴʟʏɪɴᴅᴏ
⬡│▸ ${prefix}ᴀɴᴛɪᴄᴀʟʟ
⬡│▸ ${prefix}ꜱᴇʟꜰ
⬡│▸ ${prefix}ᴘᴜʙʟɪᴄ
⬡│▸ ${prefix}ᴊᴏɪɴ
⬡│▸ ${prefix}ᴘᴏʟʟ
⬡│▸ ${prefix}ꜱᴘᴀᴍ
⬡│▸ ${prefix}ʙᴄ
⬡│▸ ${prefix}ʙᴄɢʀᴏᴜᴘ
⬡│▸ ${prefix}ꜱᴇᴛᴍᴇɴᴜ
⬡│▸ ${prefix}ꜱᴇᴛɪᴍɢᴍᴇɴᴜ
⬡│▸ ${prefix}ꜱᴇᴛᴠɪᴅᴍᴇɴᴜ
⬡│▸ ${prefix}ꜱᴇᴛɢɪꜰᴍᴇɴᴜ
⬡│▸ ${prefix}ꜱᴇᴛʀᴇᴘʟʏ
⬡│▸ ${prefix}ꜱᴇᴛᴘʀᴇꜰɪɢ
⬡│▸ ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
⬡│▸ ${prefix}ᴅᴇʟʟɪᴍɪᴛ
⬡│▸ ${prefix}ʀᴇꜱᴇᴛʜɪᴛ
⬡│▸ ${prefix}ʀᴇꜱᴇᴛᴜꜱᴇʀ
⬡│▸ ${prefix}ᴄʀᴇᴀᴛᴇɢᴄ
⬡│▸ ${prefix}ꜱᴇᴛᴇxɪꜰ
⬡│▸ ${prefix}ᴜꜱᴇʀᴊɪᴅ
⬡│▸ ${prefix}ꜱᴇᴛʙᴏᴛʙɪᴏ
⬡│▸ ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
⬡│▸ ${prefix}ꜱʜᴜᴛᴅᴏᴡɴ
⬡│▸ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
⬡│▸ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
⬡│▸ ${prefix}ᴅᴇʟᴘʀᴇᴍ
⬡│▸ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
⬡│▸ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
⬡│▸ ${prefix}ᴀᴅᴅᴠɴ
⬡│▸ ${prefix}ᴀᴅᴅᴀᴘᴋ
⬡│▸ ${prefix}ᴀᴅᴅᴢɪᴘ
⬡│▸ ${prefix}ᴀᴅᴅᴘᴅꜰ
⬡│▸ ${prefix}ᴅᴇʟᴠɴ
⬡│▸ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
⬡│▸ ${prefix}ᴅᴇʟꜱᴛɪᴄᴋᴇʀ
⬡│▸ ${prefix}ᴀᴅᴅɪᴍᴀɢᴇ
⬡│▸ ${prefix}ᴅᴇʟɪᴍᴀɢᴇ
⬡│▸ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ
⬡│▸ ${prefix}ᴅᴇʟᴠɪᴅᴇᴏ
⬡│▸ ${prefix}ᴀᴅᴅᴛɪᴛʟᴇ
⬡│▸ ${prefix}ᴅᴇʟᴛɪᴛʟᴇ
⬡│▸ ${prefix}ᴜᴘꜱᴡᴛᴇxᴛ
⬡│▸ ${prefix}ᴜᴘꜱᴡᴠɪᴅᴇᴏ
⬡│▸ ${prefix}ᴜᴘꜱᴡɪᴍᴀɢᴇ
⬡│▸ ${prefix}ᴜᴘꜱᴡᴀᴜᴅɪᴏ
⬡│▸ ${prefix}ᴀᴜᴛᴏꜱᴛɪᴄᴋᴇʀ
⬡│▸ ${prefix}ʙʟᴏᴄᴋ
⬡│▸ ${prefix}ᴜɴʙʟᴏᴄᴋ
⬡│▸ ${prefix}ʟᴇᴀᴠᴇɢᴄ
⬡│▸ ${prefix}ᴘᴜꜱʜᴄᴏɴᴛᴀᴄᴛ
⬡│▸ ${prefix}ᴘᴜꜱʜᴄᴏɴᴛᴀᴄᴛ2
⬡│▸ ${prefix}ᴘᴜꜱʜᴄᴏɴᴛᴀᴄᴛ3
⬡│▸ ${prefix}ᴊᴘᴍ
⬡│▸ ${prefix}ᴘᴏꜱᴛ
⬡│▸ ${prefix}ᴄʟᴇᴀʀᴀʟʟ
⬡│▸ ${prefix}ᴘɪɴᴄʜᴀᴛ
⬡│▸ ${prefix}ᴜɴᴘɪɴᴄʜᴀᴛ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *Gʀᴏᴜᴘ* 🎯 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}ᴀɴᴛɪʙᴏᴛ  
⬡│▸ ${prefix}ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ  
⬡│▸ ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
⬡│▸ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
⬡│▸ ${prefix}ᴀᴅᴍɪɴᴇᴠᴇɴᴛ
⬡│▸ ${prefix}ɢʀᴏᴜᴘᴇᴠᴇɴᴛ
⬡│▸ ${prefix}ᴀɴᴛɪꜰᴏʀᴇɪɢɴ
⬡│▸ ${prefix}ᴀɴᴛɪᴍᴇᴅɪᴀ 
⬡│▸ ${prefix}ᴀɴᴛɪᴀᴜᴅɪᴏ
⬡│▸ ${prefix}ᴀɴᴛɪᴠɪᴅᴇᴏ
⬡│▸ ${prefix}ᴀɴᴛɪɪᴍᴀɢᴇ
⬡│▸ ${prefix}ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛ
⬡│▸ ${prefix}ᴀɴᴛɪʟᴏᴄᴀᴛɪᴏɴ
⬡│▸ ${prefix}ᴀɴᴛɪᴄᴏɴᴛᴀᴄᴛ
⬡│▸ ${prefix}ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ
⬡│▸ ${prefix}ᴀɴᴛɪᴘᴏʟʟ
⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋ 
⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ
⬡│▸ ${prefix}ᴀɴᴛɪᴘʀᴏᴍᴏᴛɪᴏɴ
⬡│▸ ${prefix}ᴀɴᴛɪᴠɪʀᴛᴇx
⬡│▸ ${prefix}ɢʀᴏᴜᴘʟɪɴᴋ
⬡│▸ ${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ
⬡│▸ ${prefix}ɪɴᴠɪᴛᴇ
⬡│▸ ${prefix}ᴇᴘʜᴇᴍᴇʀᴀʟ
⬡│▸ ${prefix}ᴅᴇʟᴇᴛᴇ
⬡│▸ ${prefix}ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
⬡│▸ ${prefix}ᴅᴇʟᴘᴘɢʀᴏᴜᴘ
⬡│▸ ${prefix}ꜱᴇᴛɴᴀᴍᴇɢᴄ
⬡│▸ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
⬡│▸ ${prefix}ᴀᴅᴅ
⬡│▸ ${prefix}ᴋɪᴄᴋ
⬡│▸ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
⬡│▸ ${prefix}ᴅᴇᴍᴏᴛᴇ
⬡│▸ ${prefix}ᴋɪᴄᴋᴀʟʟ
⬡│▸ ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
⬡│▸ ${prefix}ᴅᴇʟᴍᴏᴛᴇᴀʟʟ
⬡│▸ ${prefix}ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ
⬡│▸ ${prefix}ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛ
⬡│▸ ${prefix}ꜱᴇɴᴅᴄᴏɴᴛᴀᴄᴛ
⬡│▸ ${prefix}ᴄᴏɴᴛᴀᴄᴛᴀɢ
⬡│▸ ${prefix}ʜɪᴅᴇᴛᴀɢ
⬡│▸ ${prefix}ᴛᴏᴛᴀɢ
⬡│▸ ${prefix}ᴛᴀɢᴀʟʟ
⬡│▸ ${prefix}ᴇᴅɪᴛɪɴꜰᴏ
⬡│▸ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
⬡│▸ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
⬡│▸ ${prefix}ʀᴇꜱᴇᴛʟɪɴᴋ
⬡│▸ ${prefix}ɢᴇɪʙɪᴏ
⬡│▸ ${prefix}ᴠᴏᴛᴇ
⬡│▸ ${prefix}ᴜᴘᴠᴏᴛᴇ
⬡│▸ ${prefix}ᴅᴏᴡɴᴠᴏᴛᴇ
⬡│▸ ${prefix}ᴄʜᴇᴄᴋᴠᴏᴛᴇ
⬡│▸ ${prefix}ᴅᴇʟᴠᴏᴛᴇ
⬡│▸ ${prefix}ᴀɴᴛɪᴠɪʀᴜꜱ
⬡│▸ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ
⬡│▸ ${prefix}ɴꜱꜰᴡ
⬡│▸ ${prefix}ʀᴇᴀᴄᴛ
⬡│▸ ${prefix}ɢᴇᴛᴊᴏɪɴʀᴇQᴜᴇꜱᴛ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *Sᴇᴀʀᴄʜ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ɢᴏᴏɢʟᴇ
⬡│▸  ${prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
⬡│▸  ${prefix}ʏᴛꜱᴇᴀʀᴄʜ
⬡│▸  ${prefix}xɴxxꜱᴇᴀʀᴄʜ
⬡│▸  ${prefix}xᴠɪᴅᴇᴏꜱᴇᴀʀᴄʜ
⬡│▸  ${prefix}ᴀᴘᴋꜱᴇᴀʀᴄʜ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ
⬡│▸  ${prefix}ɪᴍᴅʙ
⬡│▸  ${prefix}ᴡᴀɴᴜᴍʙᴇʀ
⬡│▸  ${prefix}ꜰʀɪᴇɴᴅ
⬡│▸  ${prefix}ʟʏʀɪᴄꜱ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Dᴏᴡɴʟᴏᴀᴅ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}xɴxxᴅʟ
⬡│▸  ${prefix}xᴠɪᴅᴇᴏᴅʟ
⬡│▸  ${prefix}ɪᴛᴜɴᴇꜱ
⬡│▸  ${prefix}ᴘʟᴀʏ
⬡│▸  ${prefix}ʏᴛᴍᴘ3
⬡│▸  ${prefix}ʏᴛᴍᴘ4
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ
⬡│▸  ${prefix}ɪɢᴠɪᴅᴇᴏ
⬡│▸  ${prefix}ꜰᴀᴄᴇʙᴏᴏᴋ
⬡│▸  ${prefix}ᴛᴡɪᴛᴛᴇʀ
⬡│▸  ${prefix}ᴄᴀᴘᴄᴜᴛ
⬡│▸  ${prefix}ᴀᴘᴋ
⬡│▸  ${prefix}ᴍᴇɢᴀ
⬡│▸  ${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ
⬡│▸  ${prefix}ɢᴏᴏɢʟᴇ
⬡│▸  ${prefix}ɢɪᴍᴀɢᴇ
⬡│▸  ${prefix}ᴡᴇᴀᴛʜᴇʀ
⬡│▸  ${prefix}ꜱᴘᴏᴛɪꜰʏ
⬡│▸  ${prefix}ɢɪᴛᴄʟᴏɴᴇ
⬡│▸  ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
⬡│▸  ${prefix}ɢᴅʀɪᴠᴇ
⬡│▸  ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
⬡│▸  ${prefix}ʀɪɴɢᴛᴏɴᴇ
⬡│▸  ${prefix}ᴀᴜᴛᴏᴅᴏᴡɴʟᴏᴀᴅ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Cᴏɴᴠᴇʀᴛ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴏʙꜰᴜꜱᴄᴀᴛᴇ
⬡│▸  ${prefix}ꜱᴛʏʟᴇᴛᴇxᴛ
⬡│▸  ${prefix}ꜰʟɪᴘᴛᴇxᴛ
⬡│▸  ${prefix}ᴛᴛꜱ
⬡│▸  ${prefix}ꜱᴀʏ
⬡│▸  ${prefix}ᴛᴏɢɪꜰ
⬡│▸  ${prefix}ᴛᴏQʀ
⬡│▸  ${prefix}ʙᴀꜱꜱ
⬡│▸  ${prefix}ʙʟᴏᴡɴ
⬡│▸  ${prefix}ᴅᴇᴇᴘ
⬡│▸  ${prefix}ᴇᴀʀʀᴀᴘᴇ
⬡│▸  ${prefix}ꜰᴀꜱᴛ
⬡│▸  ${prefix}ꜰᴀᴛ
⬡│▸  ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
⬡│▸  ${prefix}ʀᴇᴠᴇʀꜱᴇ
⬡│▸  ${prefix}ʀᴏʙᴏᴛ
⬡│▸  ${prefix}ꜱʟᴏᴡ
⬡│▸  ${prefix}ꜱᴍᴏᴏᴛʜ
⬡│▸  ${prefix}ꜱQᴜɪʀʀᴇʟ
⬡│▸  ${prefix}ᴛɪɴʏᴜʀʟ
⬡│▸  ${prefix}ᴛᴏᴠɴ
⬡│▸  ${prefix}ᴛᴏᴀᴜᴅɪᴏ
⬡│▸  ${prefix}ᴛᴏᴍᴘ3
⬡│▸  ${prefix}ᴛᴏᴍᴘ4
⬡│▸  ${prefix}ᴛᴏɪᴍɢ
⬡│▸  ${prefix}ᴛᴏᴏɴᴄᴇ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋᴇʀ
⬡│▸  ${prefix}ꜱᴍᴇᴍᴇ
⬡│▸  ${prefix}ꜱᴍᴇᴛᴀ
⬡│▸  ${prefix}ᴛᴀᴋᴇ
⬡│▸  ${prefix}ᴇᴍᴏᴊɪ
⬡│▸  ${prefix}ᴠᴏʟᴀᴜᴅɪᴏ
⬡│▸  ${prefix}ᴠᴏʟᴠɪᴅᴇᴏ
⬡│▸  ${prefix}ᴇʙɪɴᴀʀʏ
⬡│▸  ${prefix}ᴅʙɪɴᴀʀʏ
⬡│▸  ${prefix}ꜱꜱᴡᴇʙ
⬡│▸  ${prefix}Qᴜᴏᴛᴇᴅ
⬡│▸  ${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Lɪꜱᴛ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ʟɪꜱᴛᴘʀᴇᴍ
⬡│▸  ${prefix}ʟɪꜱᴛᴏᴡɴᴇʀ
⬡│▸  ${prefix}ʟɪꜱᴛꜱᴛɪᴄᴋᴇʀ
⬡│▸  ${prefix}ʟɪꜱᴛɪᴍᴀɢᴇ
⬡│▸  ${prefix}ʟɪꜱᴛᴠɪᴅᴇᴏ
⬡│▸  ${prefix}ʟɪꜱᴛᴠɴ
⬡│▸  ${prefix}ʟɪꜱᴛᴀᴘᴋ
⬡│▸  ${prefix}ʟɪꜱᴛᴢɪᴘ
⬡│▸  ${prefix}ʟɪꜱᴛᴘᴅꜰ
⬡│▸  ${prefix}ʟɪꜱᴛʙᴀᴅᴡᴏʀᴅ
⬡│▸  ${prefix}ʟɪꜱᴛᴘᴄ
⬡│▸  ${prefix}ʟɪꜱᴛɢᴄ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Rᴀɴᴅᴏᴍ Pʜᴏᴛᴏ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴀᴇꜱᴛʜᴇᴛɪᴠ
⬡│▸  ${prefix}ᴄᴏꜰꜰᴇᴇ
⬡│▸  ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
⬡│▸  ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
⬡│▸  ${prefix}ᴀʀᴛ
⬡│▸  ${prefix}ʙᴛꜱ
⬡│▸  ${prefix}ᴅᴏɢᴡᴏᴏꜰ
⬡│▸  ${prefix}ᴄᴀᴛᴍᴇᴏᴡ
⬡│▸  ${prefix}ʟɪᴢᴀʀᴅᴘɪᴄ
⬡│▸  ${prefix}8ʙᴀʟʟᴘᴏᴏʟ
⬡│▸  ${prefix}ᴄᴏꜱᴘʟᴀʏ
⬡│▸  ${prefix}ʜᴀᴄᴋᴇʀ
⬡│▸  ${prefix}ᴄʏʙᴇʀ
⬡│▸  ${prefix}ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
⬡│▸  ${prefix}ɪꜱʟᴀᴍɪᴄ
⬡│▸  ${prefix}ᴊᴇɴɴɪᴇ
⬡│▸  ${prefix}ᴊɪꜱᴏ
⬡│▸  ${prefix}ꜱᴀᴛᴀɴɪᴄ
⬡│▸  ${prefix}ᴊᴜꜱᴛɪɴᴀ
⬡│▸  ${prefix}ᴄᴀʀᴛᴏᴏɴ
⬡│▸  ${prefix}ᴘᴇɴᴛᴏʟ
⬡│▸  ${prefix}ᴄᴀᴛ
⬡│▸  ${prefix}ᴋᴘᴏᴘ
⬡│▸  ${prefix}ᴇxᴏ
⬡│▸  ${prefix}ʟɪꜱᴀ
⬡│▸  ${prefix}ꜱᴘᴀᴄᴇ
⬡│▸  ${prefix}ᴄᴀʀ
⬡│▸  ${prefix}ᴛᴇᴄʜɴᴏʟᴏɢʏ
⬡│▸  ${prefix}ʙɪᴋᴇ
⬡│▸  ${prefix}ꜱʜᴏʀᴛQᴜᴏᴛᴇ
⬡│▸  ${prefix}ᴀɴᴛɪᴡᴏʀᴋ
⬡│▸  ${prefix}ʜᴀᴄᴋɪɴɢ
⬡│▸  ${prefix}ʙᴏɴᴇᴋᴀ
⬡│▸  ${prefix}ʀᴏꜱᴇ
⬡│▸  ${prefix}ʀʏᴜᴊɪɴ
⬡│▸  ${prefix}ᴜʟᴢᴢᴀɴɢʙᴏʏ
⬡│▸  ${prefix}ᴜʟᴢᴢᴀɴɢɢɪʀʟ
⬡│▸  ${prefix}ᴡᴀʟʟᴍʟ
⬡│▸  ${prefix}ᴡᴀʟʟᴘʜᴏɴᴇ
⬡│▸  ${prefix}ᴍᴏᴜɴᴛᴀɪɴ
⬡│▸  ${prefix}ɢᴏᴏꜱᴇ
⬡│▸  ${prefix}ᴘʀᴏꜰɪʟʀᴘɪᴄ
⬡│▸  ${prefix}ᴄᴏᴜᴘʟᴇᴘᴘ
⬡│▸  ${prefix}ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
⬡│▸  ${prefix}ᴘᴜʙɢ
⬡│▸  ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
⬡│▸  ${prefix}ʀᴀɴᴅᴏᴍʙᴏʏ
⬡│▸  ${prefix}ʀᴀɴᴅᴏᴍɢɪʀʟ
⬡│▸  ${prefix}ʜɪᴊᴀʙ
⬡│▸  ${prefix}ᴄʜɪɴᴇꜱᴇ
⬡│▸  ${prefix}ɪɴᴅᴏ
⬡│▸  ${prefix}ᴊᴀᴘᴀɴᴇꜱᴇ
⬡│▸  ${prefix}ᴋᴏʀᴇᴀɴ
⬡│▸  ${prefix}ᴍᴀʟᴀʏ
⬡│▸  ${prefix}ᴛʜᴀɪ
⬡│▸  ${prefix}ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Rᴀɴᴅᴏᴍ Vɪᴅᴇᴏ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋɢɪʀʟ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋᴋɴᴜᴋᴛʜʏ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Sᴛᴀʟᴋᴇʀ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
⬡│▸  ${prefix}ᴍʟꜱᴛᴀʟᴋ
⬡│▸  ${prefix}ɴᴘᴍꜱᴛᴀʟᴋ
⬡│▸  ${prefix}ɢʜꜱᴛᴀʟᴋ 
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Oᴘᴇɴ Aɪ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴏᴘᴇɴᴀɪ-ɪɴᴅᴏ
⬡│▸  ${prefix}ɪɴᴅᴏ-ᴀɪ
⬡│▸  ${prefix}ᴅɪꜰꜰᴜꜱɪᴏɴ
⬡│▸  ${prefix}ᴘʜᴏᴛᴏʟᴇᴀᴘ
⬡│▸  ${prefix}ᴏᴘᴇɴᴀɪ
⬡│▸  ${prefix}ᴅᴀʟʟᴇ
⬡│▸  ${prefix}ᴀɪ
⬡│▸  ${prefix}ʀᴇᴍɪɴɪ
⬡│▸  ${prefix}ꜱɪᴍɪ
⬡│▸  ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
⬡│▸  ${prefix}ᴛᴏᴢᴏᴍʙɪᴇ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Gᴀᴍᴇ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴛʀᴜᴛʜ
⬡│▸  ${prefix}ᴅᴀʀᴇ
⬡│▸  ${prefix}ꜱᴜɪᴛ
⬡│▸  ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
⬡│▸  ${prefix}ᴍᴀᴛʜ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Fᴜɴ Mᴇɴᴜ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴅᴇꜰɪɴᴇ
⬡│▸  ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
⬡│▸  ${prefix}ꜰᴀᴄᴛ
⬡│▸  ${prefix}ᴄᴏᴜᴘʟᴇ
⬡│▸  ${prefix}ꜱᴏᴜʟᴍᴀᴛᴇ
⬡│▸  ${prefix}ꜱᴛᴜᴘɪᴅᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ʜᴀɴᴅꜱᴏᴍᴇᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴜɴᴄʟᴇᴀɴᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ʜᴏᴛᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ꜱᴍᴀʀᴛᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ɢʀᴇᴀᴛᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴇᴠɪʟᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴅᴏɢᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴄᴏᴏʟᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴡᴀɪꜰᴜᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴀᴡᴇꜱᴏᴍᴇᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ɢᴀʏᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴄᴜᴛᴇᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ʟᴇꜱʙɪᴀɴᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ʜᴏʀɴʏᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴘʀᴇᴛᴛʏᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ʟᴏᴠᴇʟʏᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴜɢʟʏᴄʜᴇᴄᴋ
⬡│▸  ${prefix}ᴘɪᴄᴋ
⬡│▸  ${prefix}ᴘɪᴄᴋᴜᴘʟɪɴᴇ
⬡│▸  ${prefix}Qᴜᴏᴛᴇꜱ
⬡│▸  ${prefix}ᴄᴀɴ
⬡│▸  ${prefix}ɪꜱ
⬡│▸  ${prefix}ᴡʜᴇɴ
⬡│▸  ${prefix}ᴡʜᴇʀᴇ
⬡│▸  ${prefix}ᴡʜᴀᴛ
⬡│▸  ${prefix}ʜᴏᴡ
⬡│▸  ${prefix}ʀᴀᴛᴇ
⬡│▸  ${prefix}ᴄʀʏ
⬡│▸  ${prefix}ᴋɪʟʟ
⬡│▸  ${prefix}ʜᴜɢ
⬡│▸  ${prefix}ᴘᴀᴛ
⬡│▸  ${prefix}ʟɪᴄᴋ
⬡│▸  ${prefix}ᴋɪꜱꜱ
⬡│▸  ${prefix}ʙɪᴛᴇ
⬡│▸  ${prefix}ʏᴇᴇᴛ
⬡│▸  ${prefix}ʙᴜʟʟʏ
⬡│▸  ${prefix}ʙᴏɴᴋ
⬡│▸  ${prefix}ᴡɪɴᴋ
⬡│▸  ${prefix}ᴘᴏᴋᴇ
⬡│▸  ${prefix}ɴᴏᴍ
⬡│▸  ${prefix}ꜱʟᴀᴘ
⬡│▸  ${prefix}ꜱᴍɪʟᴇ
⬡│▸  ${prefix}ᴡᴀᴠᴇ
⬡│▸  ${prefix}ᴀᴡᴏᴏ
⬡│▸  ${prefix}ʙʟᴜꜱʜ
⬡│▸  ${prefix}ꜱᴍᴜɢ
⬡│▸  ${prefix}ɢʟᴏᴍᴘ
⬡│▸  ${prefix}ʜᴀᴘᴘʏ
⬡│▸  ${prefix}ᴅᴀɴᴄᴇ
⬡│▸  ${prefix}ᴄʀɪɴɢᴇ
⬡│▸  ${prefix}ᴄᴜᴅᴅʟᴇ
⬡│▸  ${prefix}ʜɪɢʜꜰɪᴠᴇ
⬡│▸  ${prefix}ʜᴀɴᴅʜᴏʟᴅ
⬡│▸  ${prefix}ꜱᴘᴀɴᴋ
⬡│▸  ${prefix}ᴛɪᴄᴋʟʀ
⬡│▸  ${prefix}ꜰᴇᴇᴅ
⬡│▸  ${prefix}ᴄʜᴇᴄᴋᴍᴇ
⬡│▸  ${prefix}ꜱᴏᴜɴᴅ1 - ꜱᴏᴜɴᴅ161
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Sᴛɪᴄᴋᴇʀ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ɢᴏᴏꜱᴇ
⬡│▸  ${prefix}ᴡᴏᴏꜰ
⬡│▸  ${prefix}8ʙᴀʟʟ
⬡│▸  ${prefix}ʟɪᴢᴀʀᴅ
⬡│▸  ${prefix}ᴍᴇᴏᴡ
⬡│▸  ${prefix}ɢᴜʀᴀ
⬡│▸  ${prefix}ᴛᴇʟᴇꜱᴛɪᴄᴋ
⬡│▸  ${prefix}ᴛᴛᴘ
┬│
│╰───────────···▸▸
└───────────────···▸▸▸

┌──『•• 🎯 *Aɴɪᴍᴇ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ꜱᴛɪᴄᴋʜᴀɴᴅʜᴏʟᴅ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋꜱʜɪɴᴏʙᴜ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋᴄᴜᴅᴅʟᴇ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋʜɪɢʜꜰɪᴠᴇ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋᴅᴀɴᴄᴇ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋᴄʀɪɴɢᴇ
⬡│▸  ${prefix}ꜱᴛɪᴄᴋʜᴀᴘᴘʏ
⬡│▸  ${prefix}
⬡│▸  ${prefix}
⬡│▸  ${prefix}
⬡│▸  ${prefix}
⬡│▸  ${prefix}
⬡│▸  ${prefix}
⬡│▸  ${prefix}
┬│
│╰───────────···▸▸
└───────────────···▸▸▸
┆❏${prefix}stickglomp 🅕
┆❏${prefix}sticksmug 🅕
┆❏${prefix}stickblush 🅕
┆❏${prefix}stickawoo 🅕
┆❏${prefix}stickwave 🅕
┆❏${prefix}sticksmile 🅕
┆❏${prefix}stickslap 🅕
┆❏${prefix}stickpoke 🅕
┆❏${prefix}stickwink 🅕
┆❏${prefix}stickbonk 🅕
┆❏${prefix}stickbully 🅕
┆❏${prefix}stickyeet 🅕
┆❏${prefix}stickbike 🅕
┆❏${prefix}stickkiss 🅕
┆❏${prefix}sticklick 🅕
┆❏${prefix}stickpat 🅕
┆❏${prefix}stickhug 🅕
┆❏${prefix}stickkill 🅕
┆❏${prefix}stickcry 🅕
┆❏${prefix}stickspank 🅕
┆❏${prefix}sticktickle 🅕
┆❏${prefix}traceanime 🅕
┆❏${prefix}akira 🅕
┆❏${prefix}akiyama 🅕
┆❏${prefix}ana 🅕
┆❏${prefix}asuna 🅕
┆❏${prefix}ayuzawa 🅕
┆❏${prefix}boruto 🅕
┆❏${prefix}chiho 🅕
┆❏${prefix}chitoge 🅕
┆❏${prefix}cosplayloli 🅕
┆❏${prefix}cosplaysagiri 🅕
┆❏${prefix}deidara 🅕
┆❏${prefix}doraemon 🅕
┆❏${prefix}elaina 🅕
┆❏${prefix}emilia 🅕
┆❏${prefix}erza 🅕
┆❏${prefix}gremory 🅕
┆❏${prefix}hestia 🅕
┆❏${prefix}husbu 🅕
┆❏${prefix}inori 🅕
┆❏${prefix}isuzu 🅕
┆❏${prefix}itachi 🅕
┆❏${prefix}itori 🅕
┆❏${prefix}kaga 🅕
┆❏${prefix}kagura 🅕
┆❏${prefix}kakasih 🅕
┆❏${prefix}kaori 🅕
┆❏${prefix}keneki 🅕
┆❏${prefix}kotori 🅕
┆❏${prefix}kurumi 🅕
┆❏${prefix}loli 🅕
┆❏${prefix}loli2 🅕
┆❏${prefix}madara 🅕
┆❏${prefix}megumin 🅕
┆❏${prefix}mikasa 🅕
┆❏${prefix}mikey 🅕
┆❏${prefix}miku 🅕
┆❏${prefix}minato 🅕
┆❏${prefix}naruto 🅕
┆❏${prefix}neko 🅕
┆❏${prefix}nekonime 🅕
┆❏${prefix}nezuko 🅕
┆❏${prefix}onepiece 🅕
┆❏${prefix}pokemon 🅕
┆❏${prefix}randomnime 🅕
┆❏${prefix}randomnime2 🅕
┆❏${prefix}rize 🅕
┆❏${prefix}sagiri 🅕
┆❏${prefix}sakura 🅕
┆❏${prefix}sasuke 🅕
┆❏${prefix}shina 🅕
┆❏${prefix}shinka 🅕
┆❏${prefix}shinomiya 🅕
┆❏${prefix}shizuka 🅕
┆❏${prefix}shota 🅕
┆❏${prefix}tejina 🅕
┆❏${prefix}toukachan 🅕
┆❏${prefix}tsunade 🅕
┆❏${prefix}waifu 🅕
┆❏${prefix}waifu2 🅕
┆❏${prefix}animewall 🅕
┆❏${prefix}yotsuba 🅕
┆❏${prefix}yuki 🅕
┆❏${prefix}yulibocil 🅕
┆❏${prefix}yumeko 🅕
┆❏${prefix}8ball 🅕
┆❏${prefix}animeawoo 🅕
┆❏${prefix}animemegumin 🅕
┆❏${prefix}animeshinobu 🅕
┆❏${prefix}animehandhold 🅕
┆❏${prefix}animehighfive 🅕
┆❏${prefix}animecringe 🅕
┆❏${prefix}animedance 🅕
┆❏${prefix}animehappy 🅕
┆❏${prefix}animeglomp 🅕
┆❏${prefix}animeblush 🅕
┆❏${prefix}animesmug 🅕
┆❏${prefix}animewave 🅕
┆❏${prefix}animesmille 🅕
┆❏${prefix}animepoke 🅕
┆❏${prefix}animewink 🅕
┆❏${prefix}animebonk 🅕
┆❏${prefix}animebully 🅕
┆❏${prefix}animeyeet 🅕
┆❏${prefix}animebite 🅕
┆❏${prefix}animelick 🅕
┆❏${prefix}animekill 🅕
┆❏${prefix}animecry 🅕
┆❏${prefix}animewlp 🅕
┆❏${prefix}animekiss 🅕
┆❏${prefix}animehug 🅕
┆❏${prefix}animeneko 🅕
┆❏${prefix}animepat 🅕
┆❏${prefix}animeslap 🅕
┆❏${prefix}animecuddle 🅕
┆❏${prefix}animewaifu 🅕
┆❏${prefix}animenom 🅕
┆❏${prefix}animefoxgirl 🅕
┆❏${prefix}animegecg 🅕
┆❏${prefix}animetickle 🅕
┆❏${prefix}animefeed 🅕
┆❏${prefix}animeavatar 🅕
┆❏${prefix}anime 🅕
┆❏${prefix}avatar 🅕
┆❏${prefix}shinobu 🅕
┆❏${prefix}fox_girl 🅕
┆❏${prefix}gecg 🅕
╰–––––––––––––––༓

╭––『 Anime NSFW 』
┆❏${prefix}hentai 🅕
┆❏${prefix}gifblowjob 🅕
┆❏${prefix}hentaivid 🅕
┆❏${prefix}hneko 🅕
┆❏${prefix}nwaifu 🅕
┆❏${prefix}animespank 🅕
┆❏${prefix}trap 🅕
┆❏${prefix}blowjob 🅕
┆❏${prefix}cuckold 🅕
┆❏${prefix}milf 🅕
┆❏${prefix}eba 🅕
┆❏${prefix}pussy 🅕
┆❏${prefix}yuri 🅕
┆❏${prefix}zettai 🅕
╰–––––––––––––––༓

╭––『 PhotoOxy Maker 』
┆❏${prefix}shadow 🅕 
┆❏${prefix}write 🅕 
┆❏${prefix}romantic 🅕 
┆❏${prefix}burnpaper 🅕
┆❏${prefix}smoke 🅕 
┆❏${prefix}narutobanner 🅕 
┆❏${prefix}love 🅕 
┆❏${prefix}undergrass 🅕
┆❏${prefix}doublelove 🅕 
┆❏${prefix}coffecup 🅕
┆❏${prefix}underwaterocean 🅕
┆❏${prefix}smokyneon 🅕
┆❏${prefix}starstext 🅕
┆❏${prefix}rainboweffect 🅕
┆❏${prefix}balloontext 🅕
┆❏${prefix}metalliceffect 🅕
┆❏${prefix}embroiderytext 🅕
┆❏${prefix}flamingtext 🅕
┆❏${prefix}stonetext 🅕
┆❏${prefix}writeart 🅕
┆❏${prefix}summertext 🅕
┆❏${prefix}wolfmetaltext 🅕
┆❏${prefix}nature3dtext 🅕
┆❏${prefix}rosestext 🅕
┆❏${prefix}naturetypography 🅕
┆❏${prefix}quotesunder 🅕
┆❏${prefix}shinetext 🅕
╰–––––––––––––––༓

╭––『 Database 』
┆❏${prefix}setcmd 🅞
┆❏${prefix}delcmd 🅞
┆❏${prefix}listcmd 🅕
┆❏${prefix}lockcmd 🅞
┆❏${prefix}addmsg 🅞
┆❏${prefix}delmsg 🅞
┆❏${prefix}getmsg 🅕
┆❏${prefix}listmsg 🅕
╰–––––––––––––––༓

╭––『 Store 』
┆❏${prefix}list 🅕
┆❏${prefix}store 🅕
┆❏${prefix}shop 🅕
┆❏${prefix}addlist 🅞
┆❏${prefix}dellist 🅞
╰–––––––––––––––༓

╭––『 Religon 』
┆❏${prefix}bible 🅕
┆❏${prefix}quran 🅕
┆❏${prefix}gita 🅕
╰–––––––––––––––༓

╭––『 Bug & War 』
┆❏${prefix}xreact 🅟
┆❏${prefix}x 🅟
┆❏${prefix}x2 🅟
┆❏${prefix}iosbug 🅟
┆❏${prefix}iosbug2 🅟
┆❏${prefix}xaudio 🅟
┆❏${prefix}xaudio2 🅟
┆❏${prefix}xsticker 🅟
┆❏${prefix}xsticker2 🅟
┆❏${prefix}xloc 🅟
┆❏${prefix}xloc2 🅟
┆❏${prefix}xlist 🅟
┆❏${prefix}xlist2 🅟
┆❏${prefix}xkill 🅟
┆❏${prefix}xkill2 🅟
┆❏${prefix}xkillgc 🅟
┆❏${prefix}tempban 🅟
┆❏${prefix}xcrash 🅟
┆❏${prefix}xcrash2 🅟
┆❏${prefix}xioscrash 🅟
┆❏${prefix}xioscrash2 🅟
┆❏${prefix}iosgoogle 🅟
┆❏${prefix}iosgoogle2 🅟
┆❏${prefix}iosq 🅟
┆❏${prefix}amountbug 🅟
┆❏${prefix}pmbug 🅟
┆❏${prefix}delaybug 🅟
┆❏${prefix}docubug 🅟
┆❏${prefix}unlimitedbug 🅟
┆❏${prefix}bombug 🅟
┆❏${prefix}lagbug 🅟
┆❏${prefix}trollybug 🅟
┆❏${prefix}gcbug 🅟
┆❏${prefix}delaygcbug 🅟
┆❏${prefix}laggcbug 🅟
┆❏${prefix}bomgcbug 🅟
┆❏${prefix}unlimitedgcbug 🅟
┆❏${prefix}trollygcbug 🅟
┆❏${prefix}docugcbug 🅟
┆❏${prefix}verif 🅟
┆❏${prefix}banv1 🅟
┆❏${prefix}banv2 🅟
┆❏${prefix}banv3 🅟
┆❏${prefix}banv4 🅟
┆❏${prefix}banv5 🅟
┆❏${prefix}banv6 🅟
┆❏${prefix}unbanv1 🅟
┆❏${prefix}unbanv2 🅟
┆❏${prefix}unbanv3 🅟
┆❏${prefix}unbanv4 🅟
┆❏${prefix}unbanv5 🅟
╰–––––––––––––––༓

╭––『 Other Menu 』
┆❏${prefix}ping 🅕
┆❏${prefix}menu 🅕
┆❏${prefix}myip 🅕
┆❏${prefix}repo 🅕
┆❏${prefix}reportbug 🅕
┆❏${prefix}idgroup 🅕
┆❏${prefix}owner 🅕
┆❏${prefix}rentbot 🅕
┆❏${prefix}donate 🅕
┆❏${prefix}runtime 🅕
┆❏${prefix}checkaccount 🅕
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Anime 』
┆❏${prefix}stickhandhold 🅕
┆❏${prefix}stickshinobu 🅕
┆❏${prefix}stickcuddle 🅕
┆❏${prefix}stickhighfive 🅕
┆❏${prefix}stickdance 🅕
┆❏${prefix}stickcringe 🅕
┆❏${prefix}stickhappy 🅕
┆❏${prefix}stickglomp 🅕
┆❏${prefix}sticksmug 🅕
┆❏${prefix}stickblush 🅕
┆❏${prefix}stickawoo 🅕
┆❏${prefix}stickwave 🅕
┆❏${prefix}sticksmile 🅕
┆❏${prefix}stickslap 🅕
┆❏${prefix}stickpoke 🅕
┆❏${prefix}stickwink 🅕
┆❏${prefix}stickbonk 🅕
┆❏${prefix}stickbully 🅕
┆❏${prefix}stickyeet 🅕
┆❏${prefix}stickbike 🅕
┆❏${prefix}stickkiss 🅕
┆❏${prefix}sticklick 🅕
┆❏${prefix}stickpat 🅕
┆❏${prefix}stickhug 🅕
┆❏${prefix}stickkill 🅕
┆❏${prefix}stickcry 🅕
┆❏${prefix}stickspank 🅕
┆❏${prefix}sticktickle 🅕
┆❏${prefix}traceanime 🅕
┆❏${prefix}akira 🅕
┆❏${prefix}akiyama 🅕
┆❏${prefix}ana 🅕
┆❏${prefix}asuna 🅕
┆❏${prefix}ayuzawa 🅕
┆❏${prefix}boruto 🅕
┆❏${prefix}chiho 🅕
┆❏${prefix}chitoge 🅕
┆❏${prefix}cosplayloli 🅕
┆❏${prefix}cosplaysagiri 🅕
┆❏${prefix}deidara 🅕
┆❏${prefix}doraemon 🅕
┆❏${prefix}elaina 🅕
┆❏${prefix}emilia 🅕
┆❏${prefix}erza 🅕
┆❏${prefix}gremory 🅕
┆❏${prefix}hestia 🅕
┆❏${prefix}husbu 🅕
┆❏${prefix}inori 🅕
┆❏${prefix}isuzu 🅕
┆❏${prefix}itachi 🅕
┆❏${prefix}itori 🅕
┆❏${prefix}kaga 🅕
┆❏${prefix}kagura 🅕
┆❏${prefix}kakasih 🅕
┆❏${prefix}kaori 🅕
┆❏${prefix}keneki 🅕
┆❏${prefix}kotori 🅕
┆❏${prefix}kurumi 🅕
┆❏${prefix}loli 🅕
┆❏${prefix}loli2 🅕
┆❏${prefix}madara 🅕
┆❏${prefix}megumin 🅕
┆❏${prefix}mikasa 🅕
┆❏${prefix}mikey 🅕
┆❏${prefix}miku 🅕
┆❏${prefix}minato 🅕
┆❏${prefix}naruto 🅕
┆❏${prefix}neko 🅕
┆❏${prefix}nekonime 🅕
┆❏${prefix}nezuko 🅕
┆❏${prefix}onepiece 🅕
┆❏${prefix}pokemon 🅕
┆❏${prefix}randomnime 🅕
┆❏${prefix}randomnime2 🅕
┆❏${prefix}rize 🅕
┆❏${prefix}sagiri 🅕
┆❏${prefix}sakura 🅕
┆❏${prefix}sasuke 🅕
┆❏${prefix}shina 🅕
┆❏${prefix}shinka 🅕
┆❏${prefix}shinomiya 🅕
┆❏${prefix}shizuka 🅕
┆❏${prefix}shota 🅕
┆❏${prefix}tejina 🅕
┆❏${prefix}toukachan 🅕
┆❏${prefix}tsunade 🅕
┆❏${prefix}waifu 🅕
┆❏${prefix}waifu2 🅕
┆❏${prefix}animewall 🅕
┆❏${prefix}yotsuba 🅕
┆❏${prefix}yuki 🅕
┆❏${prefix}yulibocil 🅕
┆❏${prefix}yumeko 🅕
┆❏${prefix}8ball 🅕
┆❏${prefix}feed 🅕
┆❏${prefix}animeawoo 🅕
┆❏${prefix}animemegumin 🅕
┆❏${prefix}animeshinobu 🅕
┆❏${prefix}animehandhold 🅕
┆❏${prefix}animehighfive 🅕
┆❏${prefix}animecringe 🅕
┆❏${prefix}animedance 🅕
┆❏${prefix}animehappy 🅕
┆❏${prefix}animeglomp 🅕
┆❏${prefix}animeblush 🅕
┆❏${prefix}animesmug 🅕
┆❏${prefix}animewave 🅕
┆❏${prefix}animesmille 🅕
┆❏${prefix}animepoke 🅕
┆❏${prefix}animewink 🅕
┆❏${prefix}animebonk 🅕
┆❏${prefix}animebully 🅕
┆❏${prefix}animeyeet 🅕
┆❏${prefix}animebite 🅕
┆❏${prefix}animelick 🅕
┆❏${prefix}animekill 🅕
┆❏${prefix}animecry 🅕
┆❏${prefix}animewlp 🅕
┆❏${prefix}animekiss 🅕
┆❏${prefix}animehug 🅕
┆❏${prefix}animeneko 🅕
┆❏${prefix}animepat 🅕
┆❏${prefix}animeslap 🅕
┆❏${prefix}animecuddle 🅕
┆❏${prefix}animewaifu 🅕
┆❏${prefix}animenom 🅕
┆❏${prefix}animefoxgirl 🅕
┆❏${prefix}animegecg 🅕
┆❏${prefix}animetickle 🅕
┆❏${prefix}animefeed 🅕
┆❏${prefix}animeavatar 🅕
┆❏${prefix}anime 🅕
┆❏${prefix}animequote 🅕
┆❏${prefix}avatar 🅕
┆❏${prefix}shinobu 🅕
┆❏${prefix}fox_girl 🅕
┆❏${prefix}gecg 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Owner Menu 』
┆❏${prefix}autoread 🅞
┆❏${prefix}autobio 🅞
┆❏${prefix}autotype 🅞
┆❏${prefix}unavailable 🅞
┆❏${prefix}autorecord 🅞
┆❏${prefix}autorecordtype 🅞
┆❏${prefix}autoswview 🅞
┆❏${prefix}setautoblock 🅞
┆❏${prefix}setantiforeign 🅞
┆❏${prefix}autoblock 🅞
┆❏${prefix}onlygc 🅞
┆❏${prefix}onlypc 🅞
┆❏${prefix}onlyindia 🅞
┆❏${prefix}onlyindo 🅞
┆❏${prefix}anticall 🅞
┆❏${prefix}self 🅞
┆❏${prefix}public 🅞
┆❏${prefix}join 🅞
┆❏${prefix}poll 
┆❏${prefix}spam 🅞
┆❏${prefix}bc 🅞
┆❏${prefix}bcgroup 🅞
┆❏${prefix}setmenu 🅞
┆❏${prefix}setimgmenu 🅞
┆❏${prefix}setvidmenu 🅞
┆❏${prefix}setgifmenu 🅞
┆❏${prefix}setreply 🅞
┆❏${prefix}setprefix 🅞
┆❏${prefix}addlimit 🅞
┆❏${prefix}dellimit 🅞
┆❏${prefix}resethit 🅞
┆❏${prefix}resetuser 🅞
┆❏${prefix}creategc 🅞
┆❏${prefix}userjid 🅞
┆❏${prefix}setexif 🅞
┆❏${prefix}setbotbio 🅞
┆❏${prefix}delppbot 🅞
┆❏${prefix}shutdown 🅞
┆❏${prefix}setppbot 🅞
┆❏${prefix}addprem 🅞
┆❏${prefix}delprem 🅞
┆❏${prefix}addowner 🅞
┆❏${prefix}delowner 🅞
┆❏${prefix}addvn 🅞
┆❏${prefix}addapk 🅞
┆❏${prefix}addzip 🅞
┆❏${prefix}addpdf 🅞
┆❏${prefix}delapk 🅞
┆❏${prefix}delzip 🅞
┆❏${prefix}delpdf 🅞
┆❏${prefix}delvn 🅞
┆❏${prefix}addsticker 🅞
┆❏${prefix}delsticker 🅞
┆❏${prefix}addimage 🅞
┆❏${prefix}delimage 🅞
┆❏${prefix}addvideo 🅞
┆❏${prefix}delvideo 🅞
┆❏${prefix}addtitle 🅞
┆❏${prefix}deltitle 🅞
┆❏${prefix}upswtext 🅞
┆❏${prefix}upswvideo 🅞
┆❏${prefix}upswimage 🅞
┆❏${prefix}upswaudio 🅞
┆❏${prefix}autosticker 🅞
┆❏${prefix}block 🅞
┆❏${prefix}unblock 🅞
┆❏${prefix}leavegc 🅞
┆❏${prefix}pushcontact 🅞
┆❏${prefix}pushcontactv2 🅞
┆❏${prefix}pushcontactv3 🅞
┆❏${prefix}jpm 🅞
┆❏${prefix}post 🅞
┆❏${prefix}clearall 🅞
┆❏${prefix}pinchat 🅞
┆❏${prefix}unpinchat 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Other Menu 』
┆❏${prefix}ping 🅕
┆❏${prefix}menu 🅕
┆❏${prefix}myip 🅕
┆❏${prefix}repo 🅕
┆❏${prefix}reportbug 🅕
┆❏${prefix}idgroup 🅕
┆❏${prefix}owner 🅕
┆❏${prefix}rentbot 🅕
┆❏${prefix}donate 🅕
┆❏${prefix}checkaccount 🅕
┆❏${prefix}runtime 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Download Menu 』
┆❏${prefix}xnxxdl 🅕
┆❏${prefix}xvideodl 🅕
┆❏${prefix}itunes 🅕
┆❏${prefix}play 🅕
┆❏${prefix}ytmp3 🅕
┆❏${prefix}ytmp4 🅕
┆❏${prefix}tiktok 🅕
┆❏${prefix}tiktokaudio 🅕
┆❏${prefix}tiktokvideo 🅕
┆❏${prefix}tiktokslide 🅕
┆❏${prefix}igvideo 🅕
┆❏${prefix}igimage 🅕
┆❏${prefix}facebook 🅕
┆❏${prefix}twitter 🅕
┆❏${prefix}capcut 🅕
┆❏${prefix}apk 🅕
┆❏${prefix}mega 🅕
┆❏${prefix}mediafire 🅕
┆❏${prefix}google 🅕
┆❏${prefix}gimage 🅕
┆❏${prefix}weather 🅕
┆❏${prefix}spotify 🅟
┆❏${prefix}gitclone 🅕
┆❏${prefix}happymod 🅕
┆❏${prefix}gdrive 🅕
┆❏${prefix}pinterest 🅕
┆❏${prefix}ringtone 🅕
┆❏${prefix}autodownload 🅞
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Group Menu 』
┆❏${prefix}antibot 🅖
┆❏${prefix}readviewonce 🅖
┆❏${prefix}antiviewonce 🅖
┆❏${prefix}welcome 🅖
┆❏${prefix}adminevent 🅖
┆❏${prefix}groupevent 🅖
┆❏${prefix}antiforeign 🅖
┆❏${prefix}antimedia 🅖
┆❏${prefix}antiaudio 🅖
┆❏${prefix}antivideo 🅖
┆❏${prefix}antiimage 🅖
┆❏${prefix}antidocument 🅖
┆❏${prefix}antilocation 🅖
┆❏${prefix}anticontact 🅖
┆❏${prefix}antisticker 🅖
┆❏${prefix}antipoll 🅖
┆❏${prefix}antilink 🅖
┆❏${prefix}antilinkgc 🅖
┆❏${prefix}antipromotion 🅖
┆❏${prefix}antivirtex 🅖
┆❏${prefix}grouplink 🅖
┆❏${prefix}listadmin 🅖
┆❏${prefix}invite 🅖
┆❏${prefix}ephemeral 🅖
┆❏${prefix}delete 🅖
┆❏${prefix}setppgroup 🅖
┆❏${prefix}delppgroup 🅖
┆❏${prefix}setnamegc 🅖
┆❏${prefix}setdesc 🅖
┆❏${prefix}add 🅖
┆❏${prefix}kick 🅖
┆❏${prefix}promote 🅖
┆❏${prefix}demote 🅖
┆❏${prefix}kickall 🅖
┆❏${prefix}promoteall 🅖
┆❏${prefix}demoteall 🅖
┆❏${prefix}getcontact 🅞
┆❏${prefix}savecontact 🅞
┆❏${prefix}sendcontact 🅞
┆❏${prefix}contactag 🅞
┆❏${prefix}hidetag 🅖
┆❏${prefix}totag 🅖
┆❏${prefix}tagall 🅖
┆❏${prefix}editinfo 🅖
┆❏${prefix}opentime 🅖
┆❏${prefix}closetime 🅖
┆❏${prefix}resetlink 🅖
┆❏${prefix}getbio 🅖
┆❏${prefix}vote 🅖
┆❏${prefix}upvote 🅖
┆❏${prefix}downvote 🅖
┆❏${prefix}checkvote 🅖
┆❏${prefix}delvote 🅖
┆❏${prefix}antivirus 🅖
┆❏${prefix}antitoxic 🅖
┆❏${prefix}nsfw 🅖
┆❏${prefix}react 🅖
┆❏${prefix}getjoinrequest 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Fun Menu 』
┆❏${prefix}define 🅕
┆❏${prefix}readmore 🅕
┆❏${prefix}fact 🅕
┆❏${prefix}couple 🅕
┆❏${prefix}soulmate 🅕
┆❏${prefix}stupidcheck 🅕
┆❏${prefix}handsomecheck 🅕
┆❏${prefix}uncleancheck 🅕
┆❏${prefix}hotcheck 🅕
┆❏${prefix}smartcheck 🅕
┆❏${prefix}greatcheck 🅕
┆❏${prefix}evilcheck 🅕
┆❏${prefix}dogcheck 🅕
┆❏${prefix}coolcheck 🅕
┆❏${prefix}waifucheck 🅕
┆❏${prefix}awesomecheck 🅕
┆❏${prefix}gaycheck 🅕
┆❏${prefix}cutecheck 🅕
┆❏${prefix}lesbiancheck 🅕
┆❏${prefix}hornycheck 🅕
┆❏${prefix}prettycheck 🅕
┆❏${prefix}lovelycheck 🅕
┆❏${prefix}uglycheck 🅕
┆❏${prefix}pick 🅕
┆❏${prefix}pickupline 🅕
┆❏${prefix}quotes 🅕
┆❏${prefix}can 🅕
┆❏${prefix}is 🅕
┆❏${prefix}when 🅕
┆❏${prefix}where 🅕
┆❏${prefix}what 🅕
┆❏${prefix}how 🅕
┆❏${prefix}rate 🅕
┆❏${prefix}cry 🅕
┆❏${prefix}kill 🅕
┆❏${prefix}hug 🅕
┆❏${prefix}pat 🅕
┆❏${prefix}lick 🅕 
┆❏${prefix}kiss 🅕
┆❏${prefix}bite 🅕
┆❏${prefix}yeet 🅕
┆❏${prefix}bully 🅕
┆❏${prefix}bonk 🅕
┆❏${prefix}wink 🅕
┆❏${prefix}poke 🅕
┆❏${prefix}nom 🅕
┆❏${prefix}slap 🅕
┆❏${prefix}smile 🅕 
┆❏${prefix}wave 🅕
┆❏${prefix}awoo 🅕
┆❏${prefix}blush 🅕
┆❏${prefix}smug 🅕
┆❏${prefix}glomp 🅕 
┆❏${prefix}happy 🅕
┆❏${prefix}dance 🅕
┆❏${prefix}cringe ??
┆❏${prefix}cuddle 🅕
┆❏${prefix}highfive 🅕 
┆❏${prefix}handhold 🅕
┆❏${prefix}spank 🅕
┆❏${prefix}tickle 🅕
┆❏${prefix}feed 🅕
┆❏${prefix}checkme 🅕
┆❏${prefix}sound1 - sound161 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Stalker 』
┆❏${prefix}tiktokstalk 🅕
┆❏${prefix}mlstalk 🅕
┆❏${prefix}npmstalk 🅕
┆❏${prefix}ghstalk 🅕
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Sticker 』
┆❏${prefix}goose 🅕
┆❏${prefix}woof 🅕
┆❏${prefix}8ball 🅕
┆❏${prefix}lizard 🅕
┆❏${prefix}meow 🅕
┆❏${prefix}gura 🅕
┆❏${prefix}telestick 🅕
┆❏${prefix}ttp 🅕
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Database 』
┆❏${prefix}setcmd 🅞
┆❏${prefix}delcmd 🅞
┆❏${prefix}listcmd 🅕
┆❏${prefix}lockcmd 🅞
┆❏${prefix}addmsg 🅞
┆❏${prefix}delmsg 🅞
┆❏${prefix}getmsg 🅕
┆❏${prefix}listmsg 🅕
╰–––––––––––––––༓
`}

global.storemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Store 』
┆❏${prefix}list 🅕
┆❏${prefix}store 🅕
┆❏${prefix}shop 🅕
┆❏${prefix}addlist 🅞
┆❏${prefix}dellist 🅞
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 OpenAI 』
┆❏${prefix}openai-indo 🅕
┆❏${prefix}indo-ai 🅕
┆❏${prefix}diffusion 🅕
┆❏${prefix}photoleap 🅕
┆❏${prefix}openai 🅕
┆❏${prefix}dalle 🅕
┆❏${prefix}ai 🅕
┆❏${prefix}remini 🅕
┆❏${prefix}simi 🅕
┆❏${prefix}removebg 🅕
┆❏${prefix}tozombie 🅕
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Bug & War 』
┆❏${prefix}xreact 🅟
┆❏${prefix}x 🅟
┆❏${prefix}x2 🅟
┆❏${prefix}iosbug 🅟
┆❏${prefix}iosbug2 🅟
┆❏${prefix}xaudio 🅟
┆❏${prefix}xaudio2 🅟
┆❏${prefix}xsticker 🅟
┆❏${prefix}xsticker2 🅟
┆❏${prefix}xloc 🅟
┆❏${prefix}xloc2 🅟
┆❏${prefix}xlist 🅟
┆❏${prefix}xlist2 🅟
┆❏${prefix}xkill 🅟
┆❏${prefix}xkill2 🅟
┆❏${prefix}xkillgc 🅟
┆❏${prefix}tempban 🅟
┆❏${prefix}xcrash 🅟
┆❏${prefix}xcrash2 🅟
┆❏${prefix}xioscrash 🅟
┆❏${prefix}xioscrash2 🅟
┆❏${prefix}iosgoogle 🅟
┆❏${prefix}iosgoogle2 🅟
┆❏${prefix}iosq 🅟
┆❏${prefix}amountbug 🅟
┆❏${prefix}pmbug 🅟
┆❏${prefix}delaybug 🅟
┆❏${prefix}docubug 🅟
┆❏${prefix}unlimitedbug 🅟
┆❏${prefix}bombug 🅟
┆❏${prefix}lagbug 🅟
┆❏${prefix}trollybug 🅟
┆❏${prefix}gcbug 🅟
┆❏${prefix}delaygcbug 🅟
┆❏${prefix}laggcbug 🅟
┆❏${prefix}bomgcbug 🅟
┆❏${prefix}unlimitedgcbug 🅟
┆❏${prefix}trollygcbug 🅟
┆❏${prefix}docugcbug 🅟
┆❏${prefix}verif 🅟
┆❏${prefix}banv1 🅟
┆❏${prefix}banv2 🅟
┆❏${prefix}banv3 🅟
┆❏${prefix}banv4 🅟
┆❏${prefix}banv5 🅟
┆❏${prefix}banv6 🅟
┆❏${prefix}unbanv1 🅟
┆❏${prefix}unbanv2 🅟
┆❏${prefix}unbanv3 🅟
┆❏${prefix}unbanv4 🅟
┆❏${prefix}unbanv5 🅟
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Random Photo 』
┆❏${prefix}aesthetic 🅕
┆❏${prefix}coffee 🅕
┆❏${prefix}wikimedia 🅕
┆❏${prefix}wallpaper 🅕
┆❏${prefix}art 🅕
┆❏${prefix}bts 🅕
┆❏${prefix}dogwoof 🅕
┆❏${prefix}catmeow 🅕
┆❏${prefix}lizardpic 🅕
┆❏${prefix}goosebird 🅕
┆❏${prefix}8ballpool 🅕
┆❏${prefix}cosplay 🅕
┆❏${prefix}hacker 🅕
┆❏${prefix}cyber 🅕
┆❏${prefix}gamewallpaper 🅕
┆❏${prefix}islamic 🅕
┆❏${prefix}jennie 🅕
┆❏${prefix}jiso 🅕
┆❏${prefix}satanic 🅕
┆❏${prefix}justina 🅕
┆❏${prefix}cartoon 🅕
┆❏${prefix}pentol 🅕
┆❏${prefix}cat 🅕
┆❏${prefix}kpop 🅕
┆❏${prefix}exo 🅕
┆❏${prefix}lisa 🅕
┆❏${prefix}space 🅕
┆❏${prefix}car 🅕
┆❏${prefix}technology 🅕
┆❏${prefix}bike 🅕
┆❏${prefix}shortquote 🅕
┆❏${prefix}antiwork 🅕
┆❏${prefix}hacking 🅕
┆❏${prefix}boneka 🅕
┆❏${prefix}rose 🅕
┆❏${prefix}ryujin 🅕
┆❏${prefix}ulzzangboy 🅕
┆❏${prefix}ulzzanggirl 🅕
┆❏${prefix}wallml 🅕
┆❏${prefix}wallphone 🅕
┆❏${prefix}mountain 🅕
┆❏${prefix}goose 🅕
┆❏${prefix}profilepic 🅕
┆❏${prefix}couplepp 🅕
┆❏${prefix}programming 🅕
┆❏${prefix}pubg 🅕
┆❏${prefix}blackpink 🅕
┆❏${prefix}randomboy 🅕  
┆❏${prefix}randomgirl 🅕
┆❏${prefix}hijab 🅕  
┆❏${prefix}chinese 🅕
┆❏${prefix}indo 🅕
┆❏${prefix}japanese 🅕
┆❏${prefix}korean 🅕
┆❏${prefix}malay 🅕
┆❏${prefix}thai 🅕
┆❏${prefix}vietnamese 🅕
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Random Video 』
┆❏${prefix}tiktokgirl 🅕
┆❏${prefix}tiktoknukthy 🅕
┆❏${prefix}tiktokkayes 🅕
┆❏${prefix}tiktokpanrika 🅕
┆❏${prefix}tiktoknotnot 🅕
┆❏${prefix}tiktokghea 🅕
┆❏${prefix}tiktoksantuy 🅕
┆❏${prefix}tiktokbocil 🅕
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 PhotoOxy Maker 』
┆❏${prefix}shadow 🅕 
┆❏${prefix}write 🅕 
┆❏${prefix}romantic 🅕 
┆❏${prefix}burnpaper 🅕
┆❏${prefix}smoke 🅕 
┆❏${prefix}narutobanner 🅕 
┆❏${prefix}love 🅕 
┆❏${prefix}undergrass 🅕
┆❏${prefix}doublelove 🅕 
┆❏${prefix}coffecup 🅕
┆❏${prefix}underwaterocean 🅕
┆❏${prefix}smokyneon 🅕
┆❏${prefix}starstext 🅕
┆❏${prefix}rainboweffect 🅕
┆❏${prefix}balloontext 🅕
┆❏${prefix}metalliceffect 🅕
┆❏${prefix}embroiderytext 🅕
┆❏${prefix}flamingtext 🅕
┆❏${prefix}stonetext 🅕
┆❏${prefix}writeart 🅕
┆❏${prefix}summertext 🅕
┆❏${prefix}wolfmetaltext 🅕
┆❏${prefix}nature3dtext 🅕
┆❏${prefix}rosestext 🅕
┆❏${prefix}naturetypography 🅕
┆❏${prefix}quotesunder 🅕
┆❏${prefix}shinetext 🅕
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Anime NSFW 』
┆❏${prefix}hentai 🅕
┆❏${prefix}gifblowjob 🅕
┆❏${prefix}hentaivid 🅕
┆❏${prefix}hneko 🅕
┆❏${prefix}nwaifu 🅕
┆❏${prefix}animespank 🅕
┆❏${prefix}trap 🅕
┆❏${prefix}blowjob 🅕
┆❏${prefix}cuckold 🅕
┆❏${prefix}milf 🅕
┆❏${prefix}eba 🅕
┆❏${prefix}pussy 🅕
┆❏${prefix}yuri 🅕
┆❏${prefix}zettai 🅕
╰–––––––––––––––༓
`}

global.gamemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Game 』
┆❏${prefix}truth 🅕
┆❏${prefix}dare 🅕
┆❏${prefix}suit 🅕
┆❏${prefix}tictactoe 🅕
┆❏${prefix}math 🅕
╰–––––––––––––––༓
`}

global.religionmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Religon 』
┆❏${prefix}bible 🅕
┆❏${prefix}quran 🅕
┆❏${prefix}gita 🅕
╰–––––––––––––––༓
`}

global.searchmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Search 』
┆❏${prefix}google 🅕
┆❏${prefix}wikipedia 🅕
┆❏${prefix}ytsearch 🅕
┆❏${prefix}xnxxsearch 🅕
┆❏${prefix}xvideosearch 🅕
┆❏${prefix}apksearch 🅕
┆❏${prefix}stickersearch 🅕
┆❏${prefix}imdb 🅕
┆❏${prefix}wanumber 🅕
┆❏${prefix}friend 🅕
┆❏${prefix}lyrics 🅕
╰–––––––––––––––༓
`}

global.convertmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 Convert 』
┆❏${prefix}obfuscate 🅕
┆❏${prefix}styletext 🅕
┆❏${prefix}fliptext 🅕
┆❏${prefix}tts 🅕
┆❏${prefix}say 🅕
┆❏${prefix}togif 🅕
┆❏${prefix}toqr 🅕
┆❏${prefix}bass 🅕
┆❏${prefix}blown 🅕
┆❏${prefix}deep 🅕
┆❏${prefix}earrape 🅕
┆❏${prefix}fast 🅕
┆❏${prefix}fat 🅕
┆❏${prefix}nightcore 🅕
┆❏${prefix}reverse 🅕
┆❏${prefix}robot 🅕
┆❏${prefix}slow 🅕
┆❏${prefix}smooth 🅕
┆❏${prefix}squirrel 🅕
┆❏${prefix}tinyurl 🅕
┆❏${prefix}tovn 🅕
┆❏${prefix}toaudio 🅕
┆❏${prefix}tomp3 🅕
┆❏${prefix}tomp4🅕
┆❏${prefix}toimg 🅕
┆❏${prefix}toonce 🅕
┆❏${prefix}sticker 🅕
┆❏${prefix}smeme 🅕
┆❏${prefix}smeta 🅕
┆❏${prefix}take 🅟
┆❏${prefix}emoji 🅕
┆❏${prefix}volaudio 🅕
┆❏${prefix}volvideo 🅕
┆❏${prefix}ebinary 🅕
┆❏${prefix}dbinary 🅕
┆❏${prefix}ssweb 🅕
┆❏${prefix}quoted 🅕
┆❏${prefix}translate 🅕
╰–––––––––––––––༓
`}

global.listmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

╭––『 List 』
┆❏${prefix}listprem 🅕
┆❏${prefix}listowner 🅕
┆❏${prefix}liststicker 🅕
┆❏${prefix}listimage 🅕
┆❏${prefix}listvideo 🅕
┆❏${prefix}listvn 🅕
┆❏${prefix}listapk 🅕
┆❏${prefix}listzip 🅕
┆❏${prefix}listpdf 🅕
┆❏${prefix}listbadword 🅕
┆❏${prefix}listpc 🅕
┆❏${prefix}listgc 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})