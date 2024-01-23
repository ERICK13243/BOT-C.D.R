import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
  const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑬𝑹𝑰𝑪𝑲✞︎:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰²⁵ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
  await conn.sendMessage(m.chat, {text: `.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑬𝑹𝑰𝑪𝑲✞︎:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰²⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑬𝑹𝑰𝑪𝑲✞︎:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰ ⁴⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})                                               
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑬𝑹𝑰𝑪𝑲✞︎:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰▰▰▰ ⁸⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑬𝑹𝑰𝑪𝑲✞︎:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
      ▰▰▰▰▰▰▰▰▰▰ ¹⁰⁰ %
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
await conn.sendMessage(m.chat, {text: `╭̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩.....․⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.....╮̟̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩̩
      ┈┈┈┈┈⃐ᤢ࣪࣪ Cẚᵣgᵃₙdₒ┈⃐ᤢ࣪࣪┈┈┈┈   
 li.𒉡.𓂃.𝑬𝑹𝑰𝑪𝑲✞︎:.ᯤ̸ׄ↯ׄᤷ♡..ᴏғɪͦᴄᷫɪͨᴀʟ°.il
『𖤍𝐄𝐱𝐢𝐭𝐨 𝐩𝐫𝐨𝐧𝐭𝐨 𝐭𝐞𝐧𝐝𝐫𝐚 𝐞𝐥 𝐦𝐞𝐧𝐮́𖤍』
╰▭ׄ▭ׅ▭ׄ▭ׅ▭ׄ  ✿ໍ ▭ׅ▭ׄ▭ׅ▭ׄ▭ׅ╯
     `, edit: key})
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    
✞︎-------------------✞︎
✧: ➪ *𝑸𝑼𝑬 𝑯𝑶𝑵𝑫𝑨シ︎,  ${taguser}* gracias por su preferencia😊
╰──────────────✧ ✞︎

✞︎-------------------✞︎
✞︎ *Creador de 𝑩𝑶𝑻-𝑪.𝑫.𝑹:* ✞︎ℝ𝔼𝕐𝔼𝕊 & 𝔼ℝ𝕀ℂ𝕂✞︎*
✞︎ *Numero de mi creador: wa.me/+447397301062 
✞︎*Bot ofc:* wa.me/+447397301062  
✞︎-------------------✞︎

✞︎----------------✞︎
┃ *< *pareja />*
✞︎----------------✞︎
┣ 
✞︎-----------------✞︎

╭┈ ✞︎ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
• ✞︎; Ajeite seu relógio.
✞︎-----------------✞︎
✞︎: *Data:* ${date} 
✞︎: *Atividade:* ${uptime}
✞︎: *usuarios reg:* ${rtotalreg}
✞︎: *Usuarios:* 9${rtotal}
╰──────────────✞︎

✞︎─────────────────✞︎
│   *「 Info Usuario.*
✞︎─────────────────✞︎
✞─────────────────✞︎
╭──╮ -✞︎ 𝑩𝑶𝑻-𝑪.𝑫.𝑹 
┊ ✞︎ ------¡ Tu nivel:
╰──╯ ✞︎----- ${level}
╰───────────────────
╰──── +˚🧰 Experiencia:.
˙·.˙··.˙·.┊ *°*+↷❯  ${exp}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚⚓ Rango:.
˙·.˙··.˙·.┊ *°*+↷❯ ${role}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚💎 Diamantes:.
˙·.˙··.˙·.┊ *°*+↷❯ ${limit}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚👾 *𝐃.𝐑-𝐂𝐎𝐈𝐍𝐒✞︎* :.
˙·.˙··.˙·.┊ *°*+↷❯ ${money}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🪙 Tokens:.
˙·.˙··.˙·.┊ *°*+↷❯ ${joincount}
˙·.˙˙·.˙·.╰──────〰─◠─〰─◠─
╰──── +˚🎟️ Premium:.
┊ *°*+↷❯ ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
˙·.˙˙·.˙·.╰──────〰─◠─〰
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
✞︎---------------------✞︎
┃ *< *𝑩𝑶𝑻 𝑶𝑭𝑪* />*
✞︎---------------------✞︎
┣ 𖤍 ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n║✞︎✞︎✞︎✞︎✞︎✞︎𝑩𝑶𝑻-𝑪.𝑫.𝑹 𝑆𝑈𝐵 𝐵𝑂𝑇 ⇢ *@${global.conn.user.jid.split`@`[0]}`}
 𖤍
 ✞︎---------------------✞︎

✞︎----------------------✞︎
┃ *< 𝑺𝑶𝑳𝑼𝑪𝑰𝑶𝑵 𝑬𝑹𝑹𝑶𝑹𝑬𝑺 />*
✞︎---------------------✞︎
┣➤ Mensajes en espera
┣ ✞︎ _${usedPrefix}fixmsgespera_
┣➤ Mensajes en espera (creador)
┣ ✞︎ _${usedPrefix}dsowner_
✞︎--------------------✞︎

✞︎-------------------✞︎
├┈ ✞︎    𝑰𝑵𝑭𝑶
├•        𝑩𝑶𝑻 .
✞︎-------------------✞︎
┣ ✞︎ _${usedPrefix}terminosycondiciones_
┣ ✞︎ _${usedPrefix}grupos_
┣ ✞︎ _${usedPrefix}estado_
┣ ✞︎ _${usedPrefix}infobot_
┣ ✞︎ _${usedPrefix}speedtest_
┣ ✞︎ _${usedPrefix}donar_
┣ ✞︎ _${usedPrefix}owner_
┣ ✞︎ _${usedPrefix}script_
✞︎-------------------------✞︎

✞︎------------------------✞︎
├┈ ✞︎   𝑼𝑵𝑬 𝑼𝑵 𝑩𝑶𝑻
├•         𝑨 𝑻𝑼 𝑮𝑹𝑼𝑷𝑶  .
✞︎-----------------------✞︎
┣ ✞︎ _${usedPrefix}join *<enlace>
✞︎-----------------------✞︎

✞︎-----------------------✞︎
├┈ ✞︎   𝑺𝑬𝑹 𝑩𝑶𝑻
├• 𝑩𝑶𝑻-𝑪.𝑫.𝑹.
✞︎-----------------------✞︎
┣ ✞︎ _${usedPrefix}serbot --code_
┣ ✞︎ _${usedPrefix}serbot_
┣ ✞︎ _${usedPrefix}deletebot_
┣ ✞︎ _${usedPrefix}token
┣ ✞︎ _${usedPrefix}stop_
┣ ✞︎ _${usedPrefix}bots_
✞︎----------------------✞︎

✞︎----------------------✞︎
├┈ ✞︎   𝑱𝑼𝑬𝑮𝑶𝑺
├•  𝑩𝑶𝑻-𝑪.𝑫.𝑹 .
✞︎-----------------------✞︎
┣ ✞︎ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ✞︎ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┣ ✞︎ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ✞︎ _${usedPrefix}prostituto *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}prostituta *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}gay2 *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}pajero *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}pajera *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}puto *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}puta *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}manco *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}manca *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}rata *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}love *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}doxear *<nombre / @tag>*_
┣ ✞︎ _${usedPrefix}pregunta *<texto>*_
┣ ✞︎ _${usedPrefix}suitpvp *<@tag>*_
┣ ✞︎ _${usedPrefix}slot *<apuesta>*_
┣ ✞︎ _${usedPrefix}ttt *<nombre sala>*_
┣ ✞︎ _${usedPrefix}delttt_
┣ ✞︎ _${usedPrefix}acertijo_
┣ ✞︎ _${usedPrefix}simi *<texto>*_
┣ ✞︎ _${usedPrefix}top *<texto>*_
┣ ✞︎ _${usedPrefix}topgays_
┣ ✞︎ _${usedPrefix}topotakus_
┣ ✞︎ _${usedPrefix}formarpareja_
┣ ✞︎ _${usedPrefix}verdad_
┣ ✞︎ _${usedPrefix}reto_
┣ ✞︎ _${usedPrefix}cancion_
┣ ✞︎ _${usedPrefix}pista_
┣ ✞︎ _${usedPrefix}akinator_
┣ ✞︎ _${usedPrefix}wordfind_
✞︎----------------------✞︎

༒︎---------------------༒︎
├┈ ✞︎    𝑨𝑪𝑻𝑰𝑽𝑨𝑹
├•          𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑹.
✞︎-----------------------✞︎
┣ ☑️ _${usedPrefix}enable *welcome*_
┣ ❎ _${usedPrefix}disable *welcome*_
┣ ☑️ _${usedPrefix}enable *antilink*_
┣ ❎ _${usedPrefix}disable *antilink*_
┣ ☑️ _${usedPrefix}enable *antilink2*_
┣ ❎ _${usedPrefix}disable *antilink2*_
┣ ☑️ _${usedPrefix}enable *detect*_
┣ ❎ _${usedPrefix}disable *detect*_
┣ ☑️ _${usedPrefix}enable *autosticker*_
┣ ❎ _${usedPrefix}disable *autosticker*_
┣ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ❎ _${usedPrefix}disable *antiviewonce*_
┣ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ❎ _${usedPrefix}disable *antitoxic*_
┣ ☑️ _.${usedPrefix}nable *antitraba*_
┣ ❎ _${usedPrefix}disable *antitraba*_
┣ ☑️ _${usedPrefix}enable *antiarabes*_
┣ ❎ _${usedPrefix}disable *antiarabes*_
┣ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ❎ _${usedPrefix}disable *modoadmin*_
┣ ☑️ _${usedPrefix}enable *antidelete*_
┣ ❎ _${usedPrefix}disable *antidelete*_
✞︎-----------------------✞︎

༒︎----------------------༒︎
├┈ ✞︎  𝑹𝑬𝑷𝑶𝑹𝑻𝑨𝑹
├•           𝑬𝑹𝑹𝑶𝑹𝑬𝑺 .
✞︎-----------------------✞︎
┣ ☏︎ ${usedPrefix}reporte *<texto>*_
✞︎------------------------✞︎

༒︎----------------------༒︎
✞︎-----------------------✞︎
├•      𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺.
✞︎-----------------------✞︎
┣ ▶ _${usedPrefix}instagram *<enlace / link / url>*_
┣ ▶ _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ▶ _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ▶ _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ▶ _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ▶ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣ ▶ _${usedPrefix}twitter *<enlace / link / url>*_
┣ ▶ _${usedPrefix}fb *<enlace / link / url>*_
┣ ▶ _${usedPrefix}ytshort *<enlace / link / url>*_
┣ ▶ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ▶ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ▶ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ▶ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ▶ _${usedPrefix}videodoc *<enlace / link / url>*_
┣ ▶ _${usedPrefix}dapk2 *<enlace / link / url>*_
┣ ▶ _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ▶ _${usedPrefix}play *<texto>*_
┣ ▶ _${usedPrefix}play2 *<texto>*_
┣ ▶ _${usedPrefix}playdoc *<texto>*_
┣ ▶ _${usedPrefix}playdoc2 *<texto>*_
┣ ▶ _${usedPrefix}playlist *<texto>*_
┣ ▶ _${usedPrefix}spotify *<texto>*_
┣ ▶ _${usedPrefix}pinterest *<texto>*_
┣ ▶ _${usedPrefix}wallpaper *<texto>*_
┣ ▶ _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ▶ _${usedPrefix}tiktokstalk *<username>*_
✞︎--------------------✞︎

༒︎-------------------༒︎
├┈ ✞︎  𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺
├• 𝑩𝑶𝑻-𝑪.𝑫.𝑹
✞︎--------------------✞︎
┣ ✞︎ _${usedPrefix}githubsearch *<texto>*_
┣ ✞︎ _${usedPrefix}pelisplus *<texto>*_
┣ ✞︎ _${usedPrefix}modapk *<texto>*_
┣ ✞︎ _${usedPrefix}stickersearch *<texto>*_
┣ ✞︎ _${usedPrefix}stickersearch2 *<texto>*_
┣ ✞︎ _${usedPrefix}animeinfo *<texto>*_
┣ ✞︎ _${usedPrefix}google *<texto>*_
┣ ✞︎ _${usedPrefix}letra *<texto>*_
┣ ✞︎ _${usedPrefix}wikipedia *<texto>*_
┣ ✞︎ _${usedPrefix}ytsearch *<texto>*_
┣ ✞︎ _${usedPrefix}playstore *<texto>*_
✞︎------------------✞︎

༒︎------------------༒︎
├┈ ✞︎  𝑮𝑹𝑼𝑷𝑶𝑺
├• 𝑩𝑶𝑻𝑪.𝑫.𝑹
✞︎------------------✞︎
┣ ☠︎︎ _${usedPrefix}kick *<@tag>*_
┣ ☠︎︎ _${usedPrefix}kick2 *<@tag>*_
┣ ✞︎ _${usedPrefix}listanum *<texto>*_
┣ ☠︎︎ _${usedPrefix}kicknum *<texto>*_
┣ ✔︎ _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ✞︎ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ✔︎ _${usedPrefix}promote *<@tag>*_
┣ ✔︎ _${usedPrefix}demote *<@tag>*_
┣ ✔︎ _${usedPrefix}admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ✞︎ _${usedPrefix}demote *<@tag>*_
┣ ✔︎ _${usedPrefix}infogroup_
┣ ☹︎ _${usedPrefix}resetlink_
┣ ✞︎ _${usedPrefix}link_
┣ ✞︎ _${usedPrefix}setname *<texto>*_
┣ ✞︎ _${usedPrefix}setdesc *<texto>*_
┣ ✞︎ _${usedPrefix}invocar *<texto>*_
┣ ✞︎ _${usedPrefix}hidetag *<texto>*_
┣ ☠︎︎ _${usedPrefix}warn *<@tag>*_
┣ ✞︎ _${usedPrefix}unwarn *<@tag>*_
┣ ☠︎︎ _${usedPrefix}listwarn_
┣ ☠︎︎ _${usedPrefix}fantasmas_
┣ ✞︎ _${usedPrefix}destraba_
┣ ✞︎ _${usedPrefix}setpp *<imagen>*_
✞︎-------------------✞︎

༒︎------------------༒︎
├┈ ✞︎  𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺
├• 𝑩𝑶𝑻-𝑪.𝑫.𝑹
✞︎-------------------✞︎
┣ ✞︎ ♻️ _${usedPrefix}toanime *<imagen>*_
┣ ✞︎ ♻️ _${usedPrefix}togifaud *<video>*_
┣ ✞︎ ♻️ _${usedPrefix}toimg *<sticker>*_
┣ ✞︎ ♻️ _${usedPrefix}tomp3 *<video>*_
┣ ✞︎ ♻️ _${usedPrefix}tomp3 *<nota de voz>*_
┣ ✞︎ ♻️ _${usedPrefix}toptt *<video / audio>*_
┣ ✞︎ ♻️ _${usedPrefix}tovideo *<sticker>*_
┣ ✞︎ ♻️ _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ✞︎ ♻️ _${usedPrefix}tts *<idioma> <texto>*_
┣ ✞︎ ♻️ _${usedPrefix}tts *<efecto> <texto>*_
✞︎------------------✞︎

༒︎------------------༒︎
┃ *< 𝑭𝑹𝑨𝑺𝑬𝑺 𝒀 𝑻𝑬𝑿𝑻𝑶𝑺 />*
✞︎-------------------✞︎
┣ ✞︎ 🖤 _${usedPrefix}piropo_
┣ ✞︎ 🖤 _${usedPrefix}consejo_
┣ ✞︎ 🖤 _${usedPrefix}fraseromantica_
┣ ✞︎ 🖤 _${usedPrefix}historiaromantica_
✞︎-------------------✞︎

༒︎------------------༒︎
┃ *< 𝑹𝑨𝑵𝑫-𝑨𝑵𝑰𝑴𝑬𝑺 />*
✞︎-------------------✞︎
┣ ✞︎ 😉 _${usedPrefix}menuanimes_
༒︎------------------༒︎

✞-------------------✞︎
┃ *< 𝑹𝑨𝑵𝑫𝑶𝑴 />*
༒︎------------------༒︎
┣ ✞︎ 🕹️ _${usedPrefix}kpop *<blackpink _
┣ ✞︎ 🕹️ _${usedPrefix}cat_
┣ ✞︎ 🕹️ _${usedPrefix}dog_
┣ ✞︎ 🕹️ _${usedPrefix}meme_
┣ ✞︎ 🕹️ _${usedPrefix}itzy_
┣ ✞︎ 🕹️ _${usedPrefix}blackpink_
┣ ✞︎ 🕹️ _${usedPrefix}navidad_
┣ ✞︎ 🕹️ _${usedPrefix}wpmontaña_
┣ ✞︎ 🕹️ _${usedPrefix}pubg_
┣ ✞︎ 🕹️ _${usedPrefix}wpgaming_
┣ ✞︎ 🕹️ _${usedPrefix}wpaesthetic_
┣ ✞︎ 🕹️ _${usedPrefix}wpaesthetic2_
┣ ✞︎ 🕹️ _${usedPrefix}wprandom_
┣ ✞︎ 🕹️ _${usedPrefix}wallhp_
┣ ✞︎ 🕹️ _${usedPrefix}wpvehiculo_
┣ ✞︎ 🕹️ _${usedPrefix}wpmoto_
┣ ✞︎ 🕹️ _${usedPrefix}coffee_
┣ ✞︎ 🕹️ _${usedPrefix}pentol_
┣ ✞︎ 🕹️ _${usedPrefix}caricatura_
┣ ✞︎ 🕹️ _${usedPrefix}ciberespacio_
┣ ✞︎ 🕹️ _${usedPrefix}technology_
┣ ✞︎ 🕹️ _${usedPrefix}doraemon_
┣ ✞︎ 🕹️ _${usedPrefix}hacker_
┣ ✞︎ 🕹️ _${usedPrefix}planeta_
┣ ✞︎ 🕹️ _${usedPrefix}randomprofile_
✞︎-------------------✞︎

✞︎-------------------✞︎
├┈ ✞︎ 𝑳𝑨 𝑩𝑰𝑩𝑳𝑰𝑨🫣
├•   𝑩𝑶𝑻-𝑪.𝑫.𝑹.
✞︎-------------------✞︎
┣ 🔞 _${usedPrefix}labiblia_
✞︎-------------------✞︎

✞︎-------------------✞︎
├┈  𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝑫𝑬 
├---------𝑨𝑼𝑫𝑰𝑶𝑺 .
✞︎-------------------✞︎
┃*- 𝑹𝑬𝑺𝑷𝑶𝑵𝑫𝑨 𝑨 𝑨𝑼𝑫𝑰𝑶 𝑶 𝑵𝑶𝑻𝑨 𝑫𝑬 𝑽𝑶𝒁*
┣ ✞︎ _${usedPrefix}bass_
┣ ✞︎ _${usedPrefix}blown_
┣ ✞︎ _${usedPrefix}deep_
┣ ✞︎ _${usedPrefix}earrape_
┣ ✞︎ _${usedPrefix}fast_
┣ ✞︎ _${usedPrefix}fat_
┣ ✞︎ _${usedPrefix}nightcore_
┣ ✞︎ _${usedPrefix}reverse_
┣ ✞︎ _${usedPrefix}robot_
┣ ✞︎ _${usedPrefix}slow_
┣ ✞︎ _${usedPrefix}smooth_
┣ ✞︎ _${usedPrefix}tupai_
✞︎----------------✞︎

✞︎----------------✞︎.
├┈ ✞︎   𝑪𝑯𝑨𝑻
├-------✞︎ 𝑨𝑵𝑶𝑵𝑰𝑴𝑶.
✞︎-----------------✞︎
┣ ✞︎ _${usedPrefix}start_
┣ ✞︎ _${usedPrefix}next_
┣ ✞︎ _${usedPrefix}leave_
✞︎-----------------✞︎

✞︎-----------------✞︎
├┈ ✞︎ 𝑨𝑼𝑫𝑰𝑶𝑺
├• 𝑩𝑶𝑻-𝑪.𝑫.𝑹
✞︎-----------------✞︎
┣ ✞︎ 🎧 _${usedPrefix}menuaudios_
✞︎-----------------✞︎

✞︎-----------------✞︎
├┈ ↷ 𝑯𝑬𝑹𝑹𝑨𝑴𝑰𝑬𝑵𝑻𝑨𝑺
├• 𝑩𝑶𝑻-𝑪.𝑫.𝑹
✞︎-----------------✞︎
┣ ✞︎ ⚙️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ✞︎ ⚙️ _${usedPrefix}chatgpt *<texto>*_
┣ ✞︎ ⚙️ _${usedPrefix}delchatgpt
┣ ✞︎ ⚙️ _${usedPrefix}gptvoz *<texto>*_
┣ ✞︎ ⚙️ _${usedPrefix}dall-e *<texto>*_
┣ ✞︎ ⚙️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ✞︎ ⚙️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ✞︎ ⚙️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ✞︎ ⚙️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ✞︎ ⚙️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ✞︎ ⚙️ _${usedPrefix}afk *<motivo>*_
┣ ✞︎ ⚙️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ✞︎ ⚙️ _${usedPrefix}hd *<responde a imagen>*_
┣ ✞︎ ⚙️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ✞︎ ⚙️ _${usedPrefix}calc *<operacion math>*_
┣ ✞︎ ⚙️ _${usedPrefix}del *<mensaje>*_
┣ ✞︎ ⚙️ _${usedPrefix}whatmusic *<audio>*_
┣ ✞︎ ⚙️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ✞︎ ⚙️ _${usedPrefix}qrcode *<texto>*_
┣ ✞︎ ⚙️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ✞︎ ⚙️ _${usedPrefix}styletext *<texto>*_
┣ ✞︎ ⚙️ _${usedPrefix}traducir *<texto>*_
┣ ✞︎ ⚙️ _${usedPrefix}nowa *<numero>*_
┣ ✞︎ ⚙️ _${usedPrefix}covid *<pais>*_
┣ ✞︎ ⚙️ _${usedPrefix}horario_
┣ ✞︎ ⚙️ _${usedPrefix}dropmail_
✞︎--------------------✞︎

✞︎--------------------✞︎
├-- ✞︎ 𝑹𝑷𝑮 - 𝑳𝑰𝑴𝑰𝑻𝑬𝑺
✞︎-------- 💸𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑨.
✞︎--------------------✞︎
┣ ✞︎ _${usedPrefix}adventure_
┣ ✞︎ _${usedPrefix}cazar_
┣ ✞︎ _${usedPrefix}cofre_
┣ ✞︎ _${usedPrefix}balance_
┣ ✞︎ _${usedPrefix}claim_
┣ ✞︎ _${usedPrefix}heal_
┣ ✞︎ _${usedPrefix}lb_
┣ ✞︎ _${usedPrefix}levelup_
┣ ✞︎ _${usedPrefix}myns_
┣ ✞︎ _${usedPrefix}perfil_
┣ ✞︎ _${usedPrefix}work_
┣ ✞︎ _${usedPrefix}minar_
┣ ✞︎ _${usedPrefix}minar2_
┣ ✞︎ _${usedPrefix}buy_
┣ ✞︎ _${usedPrefix}buyall_
┣ ✞︎ _${usedPrefix}verificar_
┣ ✞︎ _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ✞︎ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ✞︎ _${usedPrefix}unreg *<numero de serie>*_
✞︎--------------------✞︎

✞︎--------------------✞︎
┣ ✞︎  𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺
├ 𝑩𝑶𝑻-𝑪.𝑫.𝑹 ✞︎
✞︎--------------------✞︎
┣ ✞︎ _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ✞︎ _${usedPrefix}sticker *<enlace / link / url>*_
┣ ✞︎ _${usedPrefix}s *<responder a imagen o video>*_
┣ ✞︎ _${usedPrefix}s *<enlace / link / url>*_
┣ ✞︎ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ✞︎ _${usedPrefix}scircle *<imagen>*_
┣ ✞︎ _${usedPrefix}sremovebg *<imagen>*_
┣ ✞︎ _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ✞︎ _${usedPrefix}qc *<texto>*_
┣ ✞︎ _${usedPrefix}attp *<texto>*_
┣ ✞︎ _${usedPrefix}attp2 *<texto>*_
┣ ✞︎ _${usedPrefix}attp3 *<texto>*_
┣ ✞︎ _${usedPrefix}ttp *<texto>*_
┣ ✞︎ _${usedPrefix}ttp2 *<texto>*_
┣ ✞︎ _${usedPrefix}ttp3 *<texto>*_
┣ ✞︎ _${usedPrefix}ttp4 *<texto>*_
┣ ✞︎ _${usedPrefix}ttp5 *<texto>*_
┣ ✞︎ _${usedPrefix}pat *<@tag>*_
┣ ✞︎ _${usedPrefix}slap *<@tag>*_
┣ ✞︎ _${usedPrefix}kiss *<@tag>*_
┣ ✞︎ _${usedPrefix}dado_
┣ ✞︎ _${usedPrefix}wm *<packname> <author>*_
┣ ✞︎ _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ✞︎ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
✞︎----------------------------✞︎

✞︎----------------------------✞︎.
├ ✞︎ *Para mi creador(a) y*
✞︎---------✞︎︰*𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹𝑬𝑺.*
✞︎----------------------------✞︎
┣ ✞︎ _${usedPrefix}autoadmin_
┣ ✞︎ _${usedPrefix}grouplist_
┣ ✞︎ _${usedPrefix}chetar_
┣ ✞︎ _${usedPrefix}leavegc_
┣ ✞︎ _${usedPrefix}cajafuerte_
┣ ✞︎ _${usedPrefix}blocklist_
┣ ✞︎ _${usedPrefix}addowner *<@tag>*_
┣ ✞︎ _${usedPrefix}delowner *<@tag*_
┣ ✞︎ _${usedPrefix}block *<@tag*_
┣ ✞︎ _${usedPrefix}unblock *<@tag*_
┣ ✞︎ _${usedPrefix}msg *<texto>*_
┣ ✞︎ _${usedPrefix}banchat_
┣ ✞︎ _${usedPrefix}unbanchat_
┣ ✞︎ _${usedPrefix}resetuser *<@tag>*_
┣ ✞︎ _${usedPrefix}banuser *<@tag>*_
┣ ✞︎ _${usedPrefix}unbanuser *_@tag_*
┣ ✞︎ _${usedPrefix}dardiamantes *<@tag>*_
┣ ✞︎ _${usedPrefix}añadirxp *<@tag> 
┣ ✞︎ _${usedPrefix}banuser *<@tag>*_
┣ ✞︎ _${usedPrefix}bc *<texto>*_
┣ ✞︎ _${usedPrefix}bcchats *<texto>*_
┣ ✞︎ _${usedPrefix}bcgc *<texto>*_
┣ ✞︎ _${usedPrefix}bcgc2 *<audio>*_
┣ ✞︎ _${usedPrefix}bcgc2 *<video>*_
┣ ✞︎ _${usedPrefix}bcgc2 *<imagen>*_
┣ ✞︎ _${usedPrefix}bcbot *<texto>*_
┣ ✞︎ _${usedPrefix}cleartpm_
┣ ✞︎ _${usedPrefix}restart_
┣ ✞︎ _${usedPrefix}update_
┣ ✞︎ _${usedPrefix}banlist_
┣ ✞︎ _${usedPrefix}addprem *<@tag> 
┣ ✞︎ _${usedPrefix}addprem2 *<@tag>*_
┣ ✞︎ _${usedPrefix}addprem3 *<@tag>*_
┣ ✞︎ _${usedPrefix}addprem4 *<@tag>*_
┣ ✞︎ _${usedPrefix}delprem *<@tag>*_
┣ ✞︎ _${usedPrefix}listcmd_
┣ ✞︎ _*${usedPrefix}setppbot*_
┣ ✞︎ _${usedPrefix}addcmd *<texto> 
┣ ✞︎ _${usedPrefix}delcmd
┣ ✞︎ _${usedPrefix}saveimage
┣ ✞︎ _${usedPrefix}viewimage
╰✞︎----|𝑪𝑹𝑬𝑨𝑻𝑬 𝑩𝒀 𝑬𝑹𝑰𝑪𝑲|----✞︎`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
/*╭ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╮
┃ *< *pareja />*
├┈・─・﹕₊˚ ✦・୨୧・
┣'pareja' ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
╰ - ̗̀↳ꕤ—— 𖤍 —— ꕤ╯*/

handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
