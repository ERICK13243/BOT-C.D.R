const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*Opción:* ✨ | WELCOME
*Comando:* ${usedPrefix + command} welcome
*Descripción:* Activa o desactiva la bienvenida en el grupo.

--------------------------------

*𝑂𝑝𝑐𝑖𝑜́𝑛:* ☆ | 𝑀𝑂𝐷𝑂 𝑃𝑈𝐵𝐿𝐼𝐶𝑂
*𝐶𝑜𝑚𝑎𝑛𝑑𝑜:* ${usedPrefix + command} public
*𝐷𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖𝑜́𝑛:* 𝐸𝑙 𝐵𝑜𝑡 𝑠𝑒 𝑣𝑢𝑒𝑙𝑣𝑒 𝑑𝑒 𝑢𝑠𝑜 𝑝𝑢𝑏𝑙𝑖𝑐𝑜 𝑦/𝑜 𝑝𝑟𝑖𝑣𝑎𝑑𝑜.
*𝑁𝑜𝑡𝑎:* 𝐸𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑠𝑜𝑙𝑜 𝑝𝑜𝑑𝑟 𝑠𝑒𝑟 𝑢𝑠𝑎𝑑𝑜 𝑝𝑜𝑟 𝑀𝑖 𝑃𝑟𝑜𝑝𝑖𝑒𝑡𝑎𝑟𝑖𝑜(𝐴) del Bot.

--------------------------------

*𝑂𝑝𝑐𝑖𝑜́𝑛:* 🥵 | 𝑀𝑂𝐷𝑂 𝐻𝑂𝑅𝑁𝑌
*𝐶𝑜𝑚𝑎𝑛𝑑𝑜:* ${usedPrefix + command} modohorny
*𝐷𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖:* 𝐴𝑐𝑡𝑖𝑣𝑎 𝑜 𝑑𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎 𝑙𝑜𝑠 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠 +18 𝑒𝑛 𝑒𝑙 𝑔𝑟𝑢𝑝𝑜.

--------------------------------

*𝑂𝑝𝑐𝑖𝑜́𝑛:* 🔗 | 𝐴𝑁𝑇𝐼𝐿𝐼𝑁𝐾
*𝐶𝑜𝑚𝑎𝑛𝑑𝑜:* ${usedPrefix + command} antilink
*𝐷𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖:* 𝐴𝑐𝑡𝑖𝑣𝑎 𝑜 𝑑𝑒𝑠𝑎𝑐𝑡𝑖𝑣𝑎 𝑒𝑙 𝑎𝑛𝑡𝑖-𝑒𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝.
*𝑁𝑜𝑡𝑎:* 𝑆𝑒 𝑛𝑒𝑐𝑒𝑠𝑖𝑡𝑎 𝑡𝑒𝑛𝑒𝑟 𝑎𝑐𝑡𝑖𝑣𝑜 𝑒𝑙 𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡.

--------------------------------

*𝑂𝑝𝑐𝑖:* 🔗 | 𝐴𝑁𝑇𝐼𝐿𝐼𝑁𝐾 2
*𝐶𝑜𝑚𝑎𝑛𝑑𝑜:* ${usedPrefix + command} antilink2
*𝐷𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖𝑜́𝑛:* Activa o desactiva el anti-enlaces que inician en HTTPS.
*𝑁𝑜𝑡𝑎:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🔎 | DETECT
*Comando:* ${usedPrefix + command} detect
*Descripción:* Activa o desacriva las notificaciones de cambios en el grupo.

--------------------------------

*Opción:* 🔎 | DETECT 2
*Comando:* ${usedPrefix + command} detect2
*Descripción:* Detecta modificaciones en el grupo y mantiene una mejor gestion.

--------------------------------

*Opción:* ❗ | RESTRICT
*Comando:* ${usedPrefix + command} restrict
*Descripción:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* ☑️ | AUTOREAD
*Comando:* ${usedPrefix + command} autoread
*Descripción:* Marca como leido los mensajes y los estados automáticamente.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🔊 | AUDIOS
*Comando:* ${usedPrefix + command} audios
*Descripción:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.

--------------------------------

*Opción:* 👾 | AUTOSTICKER
*Comando:* ${usedPrefix + command} autosticker 
*Descripción:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 

--------------------------------

*Opción:* 💬 | PCONLY
*Comando:* ${usedPrefix + command} pconly
*Descripción:* El Bot solo responderá a los comandos si es un chat privado.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🏢 | GCONLY
*Comando:* ${usedPrefix + command} gconly
*Descripción:* El Bot solo respondera a los comandos si es un grupo. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* ❌ | ANTIVIEWONCE 
*Comando:* ${usedPrefix + command} antiviewonce
*Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 

--------------------------------

*Opción:* 📵 | ANTILLAMADAS
*Comando:* ${usedPrefix + command} anticall
*Descripción:* El Bot bloquerá a las personas que llamen al Bot. 
*Nota:* Este comando solo podra ser usado por owners del Bot.

--------------------------------

*Opción:* 💬 | ANTIPRIVADO
*Comando:* ${usedPrefix + command} antiprivado
*Descripción:* El Bot bloquerá a las personas que escriban al privado del Bot. 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🤬 | ANTITOXIC
*Comando:* ${usedPrefix + command} antitoxic
*Descripción:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🕸️ | ANTITRABAS
*Comando:* ${usedPrefix + command} antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 👎 | ANTIARABES
*Comando:* ${usedPrefix + command} antiarabes
*Descripción:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el welcome y el restrict.

--------------------------------

*Opción:* 👎 | ANTIARABES 2
*Comando:* ${usedPrefix + command} antiarabes2
*Descripción:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🤖 | MODEJADIBOT
*Comando:* ${usedPrefix + command} modejadibot
*Descripción:* Activa o desactiva el uso del comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 👑 | MODOADMIN
*Comando:* ${usedPrefix + command} modoadmin
*Descripción:* El Bot solo responderá a los admins del grupo.

--------------------------------

*Opción:* 😃 | SIMSIMI
*Comando:* ${usedPrefix + command} simsimi
*Descripción:* El Bot empezará a responder a los mensajes usando la IA de SimSimi.

--------------------------------

*Opción:* ⏳ | ANTISPAM
*Comando:* ${usedPrefix + command} antispam
*Descripción:* El Bot detecta cuando un usuario hace spam de comando y lo banea por 5 segundos y lo advierte.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🛡️ | ANTIDELETE
*Comando:* ${usedPrefix + command} antidelete
*Descripción:* El Bot detecta cuando un usuario elimina un mensaje y lo reenvía.

--------------------------------

*Opción:* 🔊 | AUDIOS_BOT
*Comando:* ${usedPrefix + command} audios_bot
*Descripción:* Se desactivan los audios del Bot del menuaudios para todos los chats privados.
*Nota:* Este comando solo podrá ser usado por owners del Bot.

--------------------------------

*Opción:* 🤖 | MODOIA
*Comando:* ${usedPrefix + command} modoia
*Descripción:* Se activa el modo "Inteligencia Artificial" con GPT en todos los chats privados.
*Nota:* Este comando solo podrá ser usado por owners del Bot.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🔰𝑂𝑃𝐶𝐼́𝑂𝑁: ${type}\n💹 𝐸𝑆𝑇𝐴𝐷𝑂: ${isEnable ? '𝐴𝐶𝑇𝐼𝑉𝐴𝐷𝑂✅' : '𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝐴𝐷𝑂❎'}\n📣 𝑃𝐴𝑅𝐴: ${isAll ? '𝐸𝑆𝑇𝐸 𝐵𝑂𝑇' : isUser ? '' : '𝐸𝑆𝑇𝐸 𝐶𝐻𝐴𝑇'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;