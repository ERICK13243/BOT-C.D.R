import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botNumercode = ""
global.confirmCode = ""

global.owner = [
  ['447397301062', '𝗖𝗥𝗘𝗔𝗗𝗢𝗥', true],
  ['50369550973', '𝑩𝑶𝑻-𝑪.𝑫.𝑹- colaborador', true],
  ['447397301062', 'Owner', true],
  ['447397301062', 'creador', true],
  ['447397301062'], ['51986548489']
];

global.suittag = ['447397301062'];
global.prems = ['447397301062'];


global.official = [
["447397301062", 'CREADOR🥷', 1],
["447397301062", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹', 1], 
["447397301062", '𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗢𝗳𝗶𝗰𝗶𝗮𝗹', 1], 
["447397301062", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹', 1], 
["50369550973", 'Colaborador oficial', 1]]

global.creator = `✞︎𝐑𝐄𝐘𝐄𝐒 & 𝑬𝑹𝑰𝑪𝑲✞︎`
global.pegatina = `┏━━━━━━°❀•° :°: °•❀°━━━━━━┓\n𝐁𝐎𝐓 𝐔𝐒𝐀𝐃𝐎: 𝑩𝑶𝑻-𝑪.𝑫.𝑹\n╔═════ °❀•°✮°•❀° ══════╗\n 𝑃𝑅𝑂𝑃𝐼𝐸𝑇𝐴𝑅𝐼𝑂(𝐀) 𝐑𝐄𝐘𝐄𝐒 & 𝐄𝐑𝐈𝐂𝐊\n╚═════ °❀•°✮°•❀° ══════╝`;
global.packname = '✞︎𝑩𝑶𝑻-𝑪.𝑫.𝑹✞︎';
global.author = `𝐵𝑦 𝑬𝑹𝑰𝑪𝑲👺`;
global.wm = '𝑩𝑶𝑻-𝑪.𝑫.𝑹';
global.titulowm = '🥷 𝑩𝑶𝑻-𝑪.𝑫.𝑹 🥷';
global.titulowm2 = `乂 𝑩𝑶𝑻-𝑪.𝑫.𝑹 乂`
global.igfg = '✞︎𝑩𝑶𝑻-𝑪.𝑫.𝑹✞︎';
global.wait = '*⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.\n\n┈┈┈Cargando┈⃐ᤢ࣪┈┈\n\n▰▰ ²⁰ %*'

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝑩𝑶𝑻-𝑪.𝑫.𝑹`;
global.gt = '✞︎𝑩𝑶𝑻-𝑪.𝑫.𝑹✞︎';
global.mysticbot = '☠︎︎𝑩𝑶𝑻-𝑪.𝑫.𝑹☠︎︎';
global.md = 'https://github.com/ERICK13243/BOT-C.D.R';
global.mysticbot = 'https://github.com/ERICK13243/BOT-C.D.R';
global.waitt = '⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.\n\n┈┈┈Cargando┈⃐ᤢ࣪┈┈\n\n▰▰▰▰▰ ⁵⁰ %*';
global.waittt = '⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.\n\n┈┈┈Cargando┈⃐ᤢ࣪┈┈\n\n▰▰▰▰▰▰▰ ⁸⁰  %*';
global.waitttt = '⁀⸱⁀⸱︵૰⳹․㊪․⳼૰︵⸱⁀⸱⁀․.\n\n┈┈┈Cargando┈⃐ᤢ࣪┈┈\n\n▰▰▰▰▰▰▰▰▰ ¹⁰⁰ %*';
global.nomorown = '447397301062';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '𖤍';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `𖤍 Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
