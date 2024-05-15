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

const _0x44ced9 = _0x2e87;
(function (_0x6a0bd3, _0x151f9a) {
  const _0x5a0e8c = _0x2e87,
    _0x1a5464 = _0x6a0bd3();
  while (!![]) {
    try {
      const _0x560459 =
        parseInt(_0x5a0e8c(0x169)) / 0x1 +
        -parseInt(_0x5a0e8c(0x154)) / 0x2 +
        parseInt(_0x5a0e8c(0x1d9)) / 0x3 +
        (-parseInt(_0x5a0e8c(0x131)) / 0x4) *
          (parseInt(_0x5a0e8c(0x156)) / 0x5) +
        -parseInt(_0x5a0e8c(0x170)) / 0x6 +
        parseInt(_0x5a0e8c(0x181)) / 0x7 +
        (parseInt(_0x5a0e8c(0x13f)) / 0x8) *
          (-parseInt(_0x5a0e8c(0x140)) / 0x9);
      if (_0x560459 === _0x151f9a) break;
      else _0x1a5464["push"](_0x1a5464["shift"]());
    } catch (_0x49a208) {
      _0x1a5464["push"](_0x1a5464["shift"]());
    }
  }
})(_0x33fb, 0xb87fd),
  require("./settings");
const makeWASocket = require("@whiskeysockets/baileys")["default"],
  { uncache, nocache } = require(_0x44ced9(0x1bf)),
  { color } = require(_0x44ced9(0x1d2)),
  NodeCache = require(_0x44ced9(0x13d)),
  readline = require("readline"),
  pino = require("pino"),
  { Boom } = require("@hapi/boom"),
  { Low, JSONFile } = require(_0x44ced9(0x1cb)),
  yargs = require("yargs/yargs"),
  fs = require("fs"),
  chalk = require(_0x44ced9(0x1a0)),
  FileType = require("file-type"),
  path = require(_0x44ced9(0x1c6)),
  axios = require(_0x44ced9(0x13b)),
  _ = require("lodash"),
  moment = require(_0x44ced9(0x18f)),
  PhoneNumber = require(_0x44ced9(0x1d1)),
  { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require(_0x44ced9(
    0x15b
  )),
  {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetch,
    await,
    sleep,
    reSize,
  } = require("./lib/myfunc"),
  {
    default: XliconBotIncConnect,
    getAggregateVotesInPollMessage,
    delay,
    PHONENUMBER_MCC,
    makeCacheableSignalKeyStore,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    Browsers,
  } = require("@whiskeysockets/baileys"),
  store = makeInMemoryStore({
    logger: pino()[_0x44ced9(0x1f0)]({
      level: _0x44ced9(0x1b7),
      stream: _0x44ced9(0x123),
    }),
  });
(global[_0x44ced9(0x18c)] = new Object(
  yargs(process[_0x44ced9(0x127)][_0x44ced9(0x1df)](0x2))
    [_0x44ced9(0x179)](![])
    [_0x44ced9(0x16b)]()
)),
  (global["db"] = new Low(new JSONFile("src/database.json"))),
  (global[_0x44ced9(0x162)] = global["db"]),
  (global[_0x44ced9(0x150)] = async function loadDatabase() {
    const _0x8b779 = _0x44ced9;
    if (global["db"][_0x8b779(0x1d0)])
      return new Promise((_0x256466) =>
        setInterval(function () {
          const _0x56b943 = _0x8b779;
          !global["db"]["READ"]
            ? (clearInterval(this),
              _0x256466(
                global["db"]["data"] == null
                  ? global[_0x56b943(0x150)]()
                  : global["db"][_0x56b943(0x160)]
              ))
            : null;
        }, 0x1 * 0x3e8)
      );
    if (global["db"][_0x8b779(0x160)] !== null) return;
    (global["db"][_0x8b779(0x1d0)] = !![]),
      await global["db"][_0x8b779(0x13e)](),
      (global["db"][_0x8b779(0x1d0)] = ![]),
      (global["db"][_0x8b779(0x160)] = {
        users: {},
        database: {},
        chats: {},
        game: {},
        settings: {},
        message: {},
        ...(global["db"][_0x8b779(0x160)] || {}),
      }),
      (global["db"]["chain"] = _["chain"](global["db"]["data"]));
  }),
  loadDatabase();
if (global["db"])
  setInterval(async () => {
    if (global["db"]["data"]) await global["db"]["write"]();
  }, 0x1e * 0x3e8);
require("./XLICON-V3.js"),
  nocache(_0x44ced9(0x1c0), (_0x1c564d) =>
    console[_0x44ced9(0x177)](
      color(_0x44ced9(0x198), _0x44ced9(0x17f)),
      color("\x27" + _0x1c564d + "\x27", _0x44ced9(0x17f)),
      "Updated"
    )
  ),
  require("./main.js"),
  nocache(_0x44ced9(0x1ba), (_0x51e2f6) =>
    console[_0x44ced9(0x177)](
      color(_0x44ced9(0x198), _0x44ced9(0x17f)),
      color("\x27" + _0x51e2f6 + "\x27", _0x44ced9(0x17f)),
      _0x44ced9(0x139)
    )
  );
function _0x2e87(_0x2900c3, _0x24346) {
  const _0x33fb76 = _0x33fb();
  return (
    (_0x2e87 = function (_0x2e87ff, _0x486bc1) {
      _0x2e87ff = _0x2e87ff - 0x10e;
      let _0x2d456f = _0x33fb76[_0x2e87ff];
      return _0x2d456f;
    }),
    _0x2e87(_0x2900c3, _0x24346)
  );
}
let phoneNumber = _0x44ced9(0x1d8),
  owner = JSON[_0x44ced9(0x16b)](fs[_0x44ced9(0x1ec)](_0x44ced9(0x1a4)));
const pairingCode =
    !!phoneNumber || process[_0x44ced9(0x127)]["includes"](_0x44ced9(0x1bd)),
  useMobile = process[_0x44ced9(0x127)]["includes"](_0x44ced9(0x144)),
  rl = readline[_0x44ced9(0x1b0)]({
    input: process["stdin"],
    output: process["stdout"],
  }),
  question = (_0x5a86ab) =>
    new Promise((_0x329a39) => rl[_0x44ced9(0x16d)](_0x5a86ab, _0x329a39));
function _0x33fb() {
  const _0xabc722 = [
    "🎀\x20Connected\x20to\x20=>\x20",
    "voice",
    "--mobile",
    "Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+923184070915",
    "groupMetadata",
    ",\x20you\x20have\x20been\x20*demoted*\x20from\x20*admin*\x20😬",
    "./XLICON-V3",
    "\x0a🏮Connecting...",
    "Unknown\x20DisconnectReason:\x20",
    "existsSync",
    "redBright",
    "Asia/Kolkata",
    "th\x0a\x20\x20\x20\x20│\x20➪\x20\x20\x20*Tɪᴍᴇ\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20",
    "cyan",
    "loadDatabase",
    "*\x20can\x27t\x20receive\x20",
    "replace",
    "key",
    "1557400rSkSOi",
    "「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!",
    "220RetnhC",
    "registered",
    "startsWith",
    "bgGreen",
    "isBuffer",
    "./lib/exif",
    "connecting",
    "BEGIN:VCARD\x0aVERSION:3.0\x0aN:",
    "blue",
    "add",
    "data",
    "badSession",
    "DATABASE",
    "viewOnceMessage",
    "\x20Contact",
    "Connection\x20closed,\x20reconnecting....",
    "Xeon",
    "endsWith",
    "creds.update",
    "1358741szmgnd",
    "concat",
    "parse",
    "contacts.update",
    "question",
    "message",
    "statusCode",
    "1977456WMwbxU",
    "withoutContact",
    "end",
    "includes",
    "demote",
    "image",
    "\x20\x0a\x20\x20\x20\x20│\x20➪\x20\x20*Mᴇᴍʙᴇʀ\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20",
    "log",
    "loggedOut",
    "exitProcess",
    "format",
    "matchAll",
    "yellow",
    "bind",
    "exit",
    "green",
    "user",
    "10426150cBFuKH",
    "receivedPendingNotifications",
    "international",
    "restrict",
    "writeFileSync",
    "server",
    "getNumber",
    "bold",
    "creds",
    "copyNForward",
    "sendContact",
    "opts",
    "video",
    "length",
    "moment-timezone",
    ",\x20you\x20have\x20been\x20*promoted*\x20to\x20*admin*\x20🥳",
    "ext",
    "map",
    "bgBlack",
    "notify",
    "sendImageAsSticker",
    "false",
    "\x20𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉\x20@",
    "[\x20CHANGE\x20]",
    "conflict",
    "Error\x20in\x20Connection.update\x20",
    "uncaughtException",
    "\x0a\x20\x20\x20\x20│\x20➪\x20\x20\x20*Support\x20by\x20Subscribe\x20My\x20Channel\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20youtube.com/@s4salmanyt\x0a\x20\x20\x20\x20└─────────────|",
    "Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again",
    "PHOTO",
    "@s.whatsapp.net",
    "chalk",
    "connectionLost",
    "desc",
    "true",
    "./src/data/role/owner.json",
    "Connection\x20Lost\x20from\x20Server,\x20reconnecting...",
    "fromBuffer",
    "verifiedName",
    "remoteJid",
    "messages.upsert",
    "announce",
    "downloadMediaMessage",
    "from",
    "adminevent",
    "conversation",
    "greenBright",
    "createInterface",
    "Timed\x20Out",
    "updateBlockStatus",
    "public",
    "\x0aitem1.TEL;waid=",
    "magenta",
    "@g.us",
    "silent",
    "some",
    "𝗢𝗼𝗽𝘀‼️\x20@",
    "../main.js",
    "offer",
    "msg",
    "--pairing-code",
    "welcome",
    "./lib/loader",
    "../XLICON-V3.js",
    "Value\x20not\x20found",
    "error",
    "\x20GITHUB:\x20salmanytofficial\x20",
    "Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.",
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60",
    "path",
    "Connection\x20TimedOut,\x20Reconnecting...",
    "botname",
    "call",
    "windows",
    "./lib/lowdb",
    "unlinkSync",
    "mimetype",
    "white",
    "connection",
    "READ",
    "awesome-phonenumber",
    "./lib/color",
    "contextInfo",
    "isGroup",
    "fromMe",
    "Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api",
    "participants",
    "923184070915",
    "3418767taDLjB",
    "fatal",
    "antiswview",
    "subject",
    "type",
    "mtype",
    "slice",
    "「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20description\x20has\x20been\x20changed\x20to*\x0a\x0a",
    "split",
    "packname",
    "Firefox",
    "name",
    "connection.update",
    "sendTextWithMentions",
    "Socket\x20connection\x20timeout",
    "readViewOnce",
    "sendVideoAsSticker",
    "decodeJid",
    "remove",
    "readFileSync",
    "then",
    "already-exists",
    "keys",
    "child",
    "status",
    "\x20YT\x20CHANNEL:\x20S4\x20Salman\x20YT",
    "ephemeralMessage",
    "\x0aFN:",
    "downloadAndSaveMediaMessage",
    "promote",
    "https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60",
    "getName",
    "HH:mm:ss",
    "Please\x20type\x20your\x20WhatsApp\x20number\x20😍\x0aFor\x20example:\x20+923184070915\x20:\x20",
    "th\x20\x0a\x20\x20\x20\x20│\x20➪\x20\x20\x20*Jᴏɪɴᴇᴅ\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20",
    "alloc",
    "sendMessage",
    "timedOut",
    "group-participants.update",
    "\x20WA\x20NUMBER:\x20",
    "「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20name\x20has\x20been\x20changed\x20to*\x0a\x0a*",
    "sendImage",
    "contacts",
    "「\x20Group\x20Settings\x20Change\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!",
    "ignore",
    "store",
    "\x20\x20」\x0a\x20\x20\x20\x20│\x20➪\x20\x20*Lᴇғᴛ\x20ғʀᴏᴍ*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20",
    "profilePictureUrl",
    "test",
    "argv",
    "┌─❖\x0a│『\x20\x20*Hi..!!\x20🐦*\x20\x20』\x0a└┬\x0a\x20\x20\x20\x20◎\x20「\x20\x20@",
    "parseMention",
    "status@broadcast",
    "base64",
    "close",
    "groupAcceptInvite",
    "\x20CREDIT:\x20",
    "\x20you\x20will\x20be\x20blocked.\x20If\x20called\x20accidentally\x20please\x20contact\x20the\x20owner\x20to\x20be\x20unblocked\x20!",
    "isVideo",
    "82936yhxYkL",
    "authState",
    "viewOnce",
    "\x20INSTAGRAM:\x20@ahmmikun\x20",
    "Kjm8rnDFcpb04gQNSTbW2d",
    "groups.update",
    "readMessages",
    "DD/MM/YYYY",
    "Updated",
    "action",
    "axios",
    "output",
    "node-cache",
    "read",
    "1076888MamUBm",
    "81QnqtwM",
    "messages",
  ];
  _0x33fb = function () {
    return _0xabc722;
  };
  return _0x33fb();
}
async function startXliconBotInc() {
  const _0x366451 = _0x44ced9;
  let { version: _0xee7341, isLatest: _0x37097a } =
    await fetchLatestBaileysVersion();
  const { state: _0xb172e4, saveCreds: _0x3a30d3 } =
      await useMultiFileAuthState("./session"),
    _0x3d4711 = new NodeCache(),
    _0x1bbc17 = makeWASocket({
      logger: pino({ level: _0x366451(0x1b7) }),
      printQRInTerminal: !pairingCode,
      browser: Browsers[_0x366451(0x1ca)](_0x366451(0x1e3)),
      auth: {
        creds: _0xb172e4["creds"],
        keys: makeCacheableSignalKeyStore(
          _0xb172e4[_0x366451(0x1ef)],
          pino({ level: _0x366451(0x1da) })[_0x366451(0x1f0)]({
            level: _0x366451(0x1da),
          })
        ),
      },
      markOnlineOnConnect: !![],
      generateHighQualityLinkPreview: !![],
      getMessage: async (_0x43a3fc) => {
        const _0x1e442e = _0x366451;
        let _0x1d4217 = jidNormalizedUser(_0x43a3fc[_0x1e442e(0x1a8)]),
          _0x1b19bd = await store["loadMessage"](_0x1d4217, _0x43a3fc["id"]);
        return _0x1b19bd?.[_0x1e442e(0x16e)] || "";
      },
      msgRetryCounterCache: _0x3d4711,
      defaultQueryTimeoutMs: undefined,
    });
  store[_0x366451(0x17d)](_0x1bbc17["ev"]);
  if (
    pairingCode &&
    !_0x1bbc17[_0x366451(0x132)][_0x366451(0x189)][_0x366451(0x157)]
  ) {
    if (useMobile) throw new Error(_0x366451(0x1d6));
    let _0x3345a6;
    !!_0x3345a6
      ? ((_0x3345a6 = _0x3345a6["replace"](/[^0-9]/g, "")),
        !Object["keys"](PHONENUMBER_MCC)[_0x366451(0x1b8)]((_0x40e1f6) =>
          _0x3345a6[_0x366451(0x158)](_0x40e1f6)
        ) &&
          (console[_0x366451(0x177)](
            chalk[_0x366451(0x193)](
              chalk[_0x366451(0x14c)](
                "Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+923184070915"
              )
            )
          ),
          process[_0x366451(0x17e)](0x0)))
      : ((_0x3345a6 = await question(
          chalk["bgBlack"](chalk[_0x366451(0x1af)](_0x366451(0x117)))
        )),
        (_0x3345a6 = _0x3345a6[_0x366451(0x152)](/[^0-9]/g, "")),
        !Object["keys"](PHONENUMBER_MCC)[_0x366451(0x1b8)]((_0x5f2e9f) =>
          _0x3345a6["startsWith"](_0x5f2e9f)
        ) &&
          (console[_0x366451(0x177)](
            chalk[_0x366451(0x193)](chalk["redBright"](_0x366451(0x145)))
          ),
          (_0x3345a6 = await question(
            chalk["bgBlack"](chalk["greenBright"](_0x366451(0x117)))
          )),
          (_0x3345a6 = _0x3345a6["replace"](/[^0-9]/g, "")),
          rl[_0x366451(0x12c)]())),
      setTimeout(async () => {
        const _0x2cc80c = _0x366451;
        let _0x147ccb = await _0x1bbc17["requestPairingCode"](_0x3345a6);
        (_0x147ccb =
          _0x147ccb?.["match"](/.{1,4}/g)?.["join"]("-") || _0x147ccb),
          console[_0x2cc80c(0x177)](
            chalk["black"](
              chalk[_0x2cc80c(0x159)]("Your\x20Pairing\x20Code\x20:\x20")
            ),
            chalk["black"](chalk[_0x2cc80c(0x1ce)](_0x147ccb))
          );
      }, 0xbb8);
  }
  return (
    _0x1bbc17["ev"]["on"](_0x366451(0x1e5), async (_0x106812) => {
      const _0x435342 = _0x366451,
        { connection: _0x26792e, lastDisconnect: _0x5d709f } = _0x106812;
      try {
        if (_0x26792e === _0x435342(0x12c)) {
          let _0x1e6943 = new Boom(_0x5d709f?.[_0x435342(0x1c2)])?.[
            _0x435342(0x13c)
          ][_0x435342(0x16f)];
          if (_0x1e6943 === DisconnectReason[_0x435342(0x161)])
            console["log"](_0x435342(0x19d)), startXliconBotInc();
          else {
            if (_0x1e6943 === DisconnectReason["connectionClosed"])
              console[_0x435342(0x177)](_0x435342(0x165)), startXliconBotInc();
            else {
              if (_0x1e6943 === DisconnectReason[_0x435342(0x1a1)])
                console[_0x435342(0x177)](_0x435342(0x1a5)),
                  startXliconBotInc();
              else {
                if (_0x1e6943 === DisconnectReason["connectionReplaced"])
                  console["log"](
                    "Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First"
                  ),
                    startXliconBotInc();
                else {
                  if (_0x1e6943 === DisconnectReason[_0x435342(0x178)])
                    console[_0x435342(0x177)](_0x435342(0x1c4)),
                      startXliconBotInc();
                  else {
                    if (_0x1e6943 === DisconnectReason["restartRequired"])
                      console[_0x435342(0x177)](
                        "Restart\x20Required,\x20Restarting..."
                      ),
                        startXliconBotInc();
                    else {
                      if (_0x1e6943 === DisconnectReason[_0x435342(0x11b)])
                        console[_0x435342(0x177)](_0x435342(0x1c7)),
                          startXliconBotInc();
                      else
                        _0x1bbc17[_0x435342(0x172)](
                          _0x435342(0x14a) + _0x1e6943 + "|" + _0x26792e
                        );
                    }
                  }
                }
              }
            }
          }
        }
        (_0x106812["connection"] == _0x435342(0x15c) ||
          _0x106812[_0x435342(0x182)] == _0x435342(0x196)) &&
          console["log"](color(_0x435342(0x149), _0x435342(0x17c))),
          (_0x106812[_0x435342(0x1cf)] == "open" ||
            _0x106812[_0x435342(0x182)] == _0x435342(0x1a3)) &&
            (console[_0x435342(0x177)](color("\x20", "magenta")),
            console[_0x435342(0x177)](
              color(
                _0x435342(0x142) +
                  JSON["stringify"](_0x1bbc17[_0x435342(0x180)], null, 0x2),
                _0x435342(0x17c)
              )
            ),
            await delay(0x7cf),
            console[_0x435342(0x177)](
              chalk["yellow"](
                "\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  chalk[_0x435342(0x188)][_0x435342(0x15e)](
                    "[\x20" + botname + "\x20]"
                  ) +
                  "\x0a\x0a"
              )
            ),
            console[_0x435342(0x177)](
              color(
                "<\x20==================================================\x20>",
                _0x435342(0x14f)
              )
            ),
            console[_0x435342(0x177)](
              color("\x0a" + themeemoji + _0x435342(0x10f), _0x435342(0x1b5))
            ),
            console[_0x435342(0x177)](
              color(themeemoji + _0x435342(0x1c3), _0x435342(0x1b5))
            ),
            console[_0x435342(0x177)](
              color(themeemoji + _0x435342(0x134), _0x435342(0x1b5))
            ),
            console[_0x435342(0x177)](
              color(themeemoji + _0x435342(0x11d) + owner, _0x435342(0x1b5))
            ),
            console[_0x435342(0x177)](
              color(
                themeemoji + _0x435342(0x12e) + wm + "\x0a",
                _0x435342(0x1b5)
              )
            ),
            await delay(0x3e8 * 0x2),
            _0x1bbc17[_0x435342(0x12d)](_0x435342(0x135)));
      } catch (_0x572e3e) {
        console[_0x435342(0x177)](_0x435342(0x19a) + _0x572e3e),
          startXliconBotInc();
      }
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x168), _0x3a30d3),
    _0x1bbc17["ev"]["on"](_0x366451(0x1a9), () => {}),
    _0x1bbc17["ev"]["on"](_0x366451(0x11c), async (_0x1036b8) => {
      const _0x4b0255 = _0x366451;
      if (global[_0x4b0255(0x1be)]) {
        console[_0x4b0255(0x177)](_0x1036b8);
        try {
          let _0x2d596c = await _0x1bbc17[_0x4b0255(0x146)](_0x1036b8["id"]),
            _0x4de7ee = _0x1036b8[_0x4b0255(0x1d7)];
          for (let _0x5c4581 of _0x4de7ee) {
            try {
              ppuser = await _0x1bbc17[_0x4b0255(0x125)](_0x5c4581, "image");
            } catch (_0x59bee8) {
              ppuser = _0x4b0255(0x1c5);
            }
            try {
              ppgroup = await _0x1bbc17[_0x4b0255(0x125)](
                _0x1036b8["id"],
                _0x4b0255(0x175)
              );
            } catch (_0x258f42) {
              ppgroup = _0x4b0255(0x114);
            }
            (memb = _0x2d596c["participants"]["length"]),
              (XeonWlcm = await getBuffer(ppuser)),
              (XeonLft = await getBuffer(ppuser));
            if (_0x1036b8[_0x4b0255(0x13a)] == _0x4b0255(0x15f)) {
              const _0x336eda = await getBuffer(ppuser);
              let _0x267a50 = _0x5c4581;
              const _0x270bc2 = moment["tz"](_0x4b0255(0x14d))[
                  _0x4b0255(0x17a)
                ](_0x4b0255(0x116)),
                _0x568ccd = moment["tz"](_0x4b0255(0x14d))[_0x4b0255(0x17a)](
                  _0x4b0255(0x138)
                ),
                _0x553b79 = _0x2d596c[_0x4b0255(0x1d7)][_0x4b0255(0x18e)];
              (xeonbody =
                _0x4b0255(0x128) +
                _0x267a50[_0x4b0255(0x1e1)]("@")[0x0] +
                "\x20\x20」\x0a\x20\x20\x20\x20│\x20➪\x20\x20*Wᴇʟᴄᴏᴍᴇ\x20Tᴏ*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20\x20" +
                _0x2d596c[_0x4b0255(0x1dc)] +
                _0x4b0255(0x176) +
                _0x553b79 +
                _0x4b0255(0x118) +
                _0x270bc2 +
                "\x20" +
                _0x568ccd +
                _0x4b0255(0x19c)),
                _0x1bbc17[_0x4b0255(0x11a)](_0x1036b8["id"], {
                  text: xeonbody,
                  contextInfo: {
                    mentionedJid: [_0x5c4581],
                    externalAdReply: {
                      showAdAttribution: !![],
                      containsAutoReply: !![],
                      title: "\x20" + global[_0x4b0255(0x1c8)],
                      body: "" + ownername,
                      previewType: _0x4b0255(0x19e),
                      thumbnailUrl: "",
                      thumbnail: XeonWlcm,
                      sourceUrl: "" + wagc,
                    },
                  },
                });
            } else {
              if (_0x1036b8[_0x4b0255(0x13a)] == _0x4b0255(0x1eb)) {
                const _0x313220 = await getBuffer(ppuser),
                  _0x420046 = moment["tz"](_0x4b0255(0x14d))["format"](
                    _0x4b0255(0x116)
                  ),
                  _0x3aa69c = moment["tz"]("Asia/Kolkata")[_0x4b0255(0x17a)](
                    _0x4b0255(0x138)
                  );
                let _0x518a2e = _0x5c4581;
                const _0xb0a5db = _0x2d596c["participants"][_0x4b0255(0x18e)];
                (xeonbody =
                  "┌─❖\x0a│『\x20\x20*Gᴏᴏᴅʙʏᴇ..!!\x20🍁*\x20\x20』\x0a└┬\x0a\x20\x20\x20\x20◎\x20「\x20@" +
                  _0x518a2e["split"]("@")[0x0] +
                  _0x4b0255(0x124) +
                  _0x2d596c[_0x4b0255(0x1dc)] +
                  _0x4b0255(0x176) +
                  _0xb0a5db +
                  _0x4b0255(0x14e) +
                  _0x420046 +
                  "\x20" +
                  _0x3aa69c +
                  "\x0a\x20\x20\x20\x20│\x20➪\x20\x20\x20*Support\x20by\x20Subscribe\x20My\x20Channel\x20:*\x0a\x20\x20\x20\x20◎\x20\x20\x20\x20\x20youtube.com/@s4salmanyt\x0a\x20\x20\x20\x20└─────────────||"),
                  _0x1bbc17["sendMessage"](_0x1036b8["id"], {
                    text: xeonbody,
                    contextInfo: {
                      mentionedJid: [_0x5c4581],
                      externalAdReply: {
                        showAdAttribution: !![],
                        containsAutoReply: !![],
                        title: "\x20" + global[_0x4b0255(0x1c8)],
                        body: "" + ownername,
                        previewType: _0x4b0255(0x19e),
                        thumbnailUrl: "",
                        thumbnail: XeonLft,
                        sourceUrl: "" + wagc,
                      },
                    },
                  });
              }
            }
          }
        } catch (_0x3068ee) {
          console[_0x4b0255(0x177)](_0x3068ee);
        }
      }
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x1c9), async (_0x26d535) => {
      const _0x17d4a5 = _0x366451;
      if (global["anticall"]) {
        console["log"](_0x26d535);
        for (let _0xfe9495 of _0x26d535) {
          if (_0xfe9495[_0x17d4a5(0x1d4)] == ![]) {
            if (_0xfe9495[_0x17d4a5(0x10e)] == _0x17d4a5(0x1bb)) {
              let _0x4fd3e6 = await _0x1bbc17[_0x17d4a5(0x1e6)](
                _0xfe9495[_0x17d4a5(0x1ac)],
                "*" +
                  _0x1bbc17[_0x17d4a5(0x180)][_0x17d4a5(0x1e4)] +
                  _0x17d4a5(0x151) +
                  (_0xfe9495[_0x17d4a5(0x130)]
                    ? _0x17d4a5(0x18d)
                    : _0x17d4a5(0x143)) +
                  "\x20call.\x20Sorry\x20@" +
                  _0xfe9495[_0x17d4a5(0x1ac)][_0x17d4a5(0x1e1)]("@")[0x0] +
                  _0x17d4a5(0x12f)
              );
              _0x1bbc17[_0x17d4a5(0x18b)](
                _0xfe9495[_0x17d4a5(0x1ac)],
                owner,
                _0x4fd3e6
              ),
                await sleep(0x1f40),
                await _0x1bbc17[_0x17d4a5(0x1b2)](
                  _0xfe9495[_0x17d4a5(0x1ac)],
                  "block"
                );
            }
          }
        }
      }
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x1a9), async (_0x500c32) => {
      const _0x4fd372 = _0x366451;
      global[_0x4fd372(0x1db)] &&
        ((mek = _0x500c32[_0x4fd372(0x141)][0x0]),
        mek[_0x4fd372(0x153)] &&
          mek[_0x4fd372(0x153)][_0x4fd372(0x1a8)] === _0x4fd372(0x12a) &&
          (await _0x1bbc17[_0x4fd372(0x137)]([mek[_0x4fd372(0x153)]])));
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x11c), async (_0x42e7de) => {
      const _0x9c1122 = _0x366451;
      if (global[_0x9c1122(0x1ad)]) {
        console["log"](_0x42e7de);
        try {
          let _0x3c6151 = _0x42e7de[_0x9c1122(0x1d7)];
          for (let _0x84f559 of _0x3c6151) {
            try {
              ppuser = await _0x1bbc17[_0x9c1122(0x125)](
                _0x84f559,
                _0x9c1122(0x175)
              );
            } catch (_0x23b5a8) {
              ppuser = _0x9c1122(0x1c5);
            }
            try {
              ppgroup = await _0x1bbc17[_0x9c1122(0x125)](
                _0x42e7de["id"],
                _0x9c1122(0x175)
              );
            } catch (_0x521288) {
              ppgroup = _0x9c1122(0x114);
            }
            if (_0x42e7de[_0x9c1122(0x13a)] == _0x9c1122(0x113)) {
              const _0x734fa8 = moment["tz"](_0x9c1122(0x14d))[
                  _0x9c1122(0x17a)
                ]("HH:mm:ss"),
                _0xf4c0fc = moment["tz"](_0x9c1122(0x14d))["format"](
                  _0x9c1122(0x138)
                );
              let _0x4bd062 = _0x84f559;
              (xeonbody =
                _0x9c1122(0x197) +
                _0x4bd062[_0x9c1122(0x1e1)]("@")[0x0] +
                _0x9c1122(0x190)),
                _0x1bbc17[_0x9c1122(0x11a)](_0x42e7de["id"], {
                  text: xeonbody,
                  contextInfo: {
                    mentionedJid: [_0x84f559],
                    externalAdReply: {
                      showAdAttribution: !![],
                      containsAutoReply: !![],
                      title: "\x20" + global["botname"],
                      body: "" + ownername,
                      previewType: "PHOTO",
                      thumbnailUrl: "",
                      thumbnail: XeonWlcm,
                      sourceUrl: "" + wagc,
                    },
                  },
                });
            } else {
              if (_0x42e7de[_0x9c1122(0x13a)] == _0x9c1122(0x174)) {
                const _0x2b720d = moment["tz"](_0x9c1122(0x14d))[
                    _0x9c1122(0x17a)
                  ](_0x9c1122(0x116)),
                  _0xbce0aa = moment["tz"](_0x9c1122(0x14d))[_0x9c1122(0x17a)](
                    "DD/MM/YYYY"
                  );
                let _0x1f3f02 = _0x84f559;
                (xeonbody =
                  _0x9c1122(0x1b9) +
                  _0x1f3f02[_0x9c1122(0x1e1)]("@")[0x0] +
                  _0x9c1122(0x147)),
                  _0x1bbc17[_0x9c1122(0x11a)](_0x42e7de["id"], {
                    text: xeonbody,
                    contextInfo: {
                      mentionedJid: [_0x84f559],
                      externalAdReply: {
                        showAdAttribution: !![],
                        containsAutoReply: !![],
                        title: "\x20" + global[_0x9c1122(0x1c8)],
                        body: "" + ownername,
                        previewType: _0x9c1122(0x19e),
                        thumbnailUrl: "",
                        thumbnail: XeonLft,
                        sourceUrl: "" + wagc,
                      },
                    },
                  });
              }
            }
          }
        } catch (_0xe34cb4) {
          console["log"](_0xe34cb4);
        }
      }
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x136), async (_0x3d4306) => {
      const _0x269ae9 = _0x366451;
      if (global["groupevent"]) {
        try {
          ppgroup = await _0x1bbc17[_0x269ae9(0x125)](
            anu["id"],
            _0x269ae9(0x175)
          );
        } catch (_0x280331) {
          ppgroup = _0x269ae9(0x114);
        }
        console[_0x269ae9(0x177)](_0x3d4306);
        const _0x53262f = _0x3d4306[0x0];
        if (_0x53262f[_0x269ae9(0x1aa)] == !![])
          await sleep(0x7d0),
            _0x1bbc17[_0x269ae9(0x11a)](_0x53262f["id"], {
              text: "「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admins\x20can\x20send\x20messages\x20!",
            });
        else {
          if (_0x53262f[_0x269ae9(0x1aa)] == ![])
            await sleep(0x7d0),
              _0x1bbc17["sendMessage"](_0x53262f["id"], {
                text: _0x269ae9(0x121),
              });
          else {
            if (_0x53262f[_0x269ae9(0x184)] == !![])
              await sleep(0x7d0),
                _0x1bbc17["sendMessage"](_0x53262f["id"], {
                  text: _0x269ae9(0x155),
                });
            else {
              if (_0x53262f[_0x269ae9(0x184)] == ![])
                await sleep(0x7d0),
                  _0x1bbc17[_0x269ae9(0x11a)](_0x53262f["id"], {
                    text: "「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!",
                  });
              else
                !_0x53262f["desc"] == ""
                  ? (await sleep(0x7d0),
                    _0x1bbc17["sendMessage"](_0x53262f["id"], {
                      text: _0x269ae9(0x1e0) + _0x53262f[_0x269ae9(0x1a2)],
                    }))
                  : (await sleep(0x7d0),
                    _0x1bbc17[_0x269ae9(0x11a)](_0x53262f["id"], {
                      text:
                        _0x269ae9(0x11e) + _0x53262f[_0x269ae9(0x1dc)] + "*",
                    }));
            }
          }
        }
      }
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x1a9), async (_0x2f843f) => {
      const _0x347270 = _0x366451;
      try {
        mek = _0x2f843f[_0x347270(0x141)][0x0];
        if (!mek[_0x347270(0x16e)]) return;
        mek[_0x347270(0x16e)] =
          Object[_0x347270(0x1ef)](mek[_0x347270(0x16e)])[0x0] ===
          _0x347270(0x110)
            ? mek["message"][_0x347270(0x110)][_0x347270(0x16e)]
            : mek[_0x347270(0x16e)];
        if (
          mek[_0x347270(0x153)] &&
          mek["key"][_0x347270(0x1a8)] === _0x347270(0x12a)
        )
          return;
        if (
          !_0x1bbc17[_0x347270(0x1b3)] &&
          !mek["key"][_0x347270(0x1d5)] &&
          _0x2f843f[_0x347270(0x1dd)] === _0x347270(0x194)
        )
          return;
        if (
          mek[_0x347270(0x153)]["id"][_0x347270(0x158)](_0x347270(0x166)) &&
          mek[_0x347270(0x153)]["id"][_0x347270(0x18e)] === 0x10
        )
          return;
        if (mek[_0x347270(0x153)]["id"][_0x347270(0x158)]("BAE5")) return;
        (m = smsg(_0x1bbc17, mek, store)),
          require(_0x347270(0x148))(_0x1bbc17, m, _0x2f843f, store);
      } catch (_0x4d7276) {
        console[_0x347270(0x177)](_0x4d7276);
      }
    }),
    (_0x1bbc17["decodeJid"] = (_0x654cb3) => {
      const _0x4dd078 = _0x366451;
      if (!_0x654cb3) return _0x654cb3;
      if (/:\d+@/gi["test"](_0x654cb3)) {
        let _0x19bbb5 = jidDecode(_0x654cb3) || {};
        return (
          (_0x19bbb5[_0x4dd078(0x180)] &&
            _0x19bbb5[_0x4dd078(0x186)] &&
            _0x19bbb5["user"] + "@" + _0x19bbb5[_0x4dd078(0x186)]) ||
          _0x654cb3
        );
      } else return _0x654cb3;
    }),
    _0x1bbc17["ev"]["on"](_0x366451(0x16c), (_0x32fe46) => {
      const _0x3cc800 = _0x366451;
      for (let _0x197a40 of _0x32fe46) {
        let _0x5022ad = _0x1bbc17[_0x3cc800(0x1ea)](_0x197a40["id"]);
        if (store && store[_0x3cc800(0x120)])
          store["contacts"][_0x5022ad] = {
            id: _0x5022ad,
            name: _0x197a40[_0x3cc800(0x194)],
          };
      }
    }),
    (_0x1bbc17["getName"] = (_0x563511, _0x4d1a2f = ![]) => {
      const _0x4def62 = _0x366451;
      (id = _0x1bbc17[_0x4def62(0x1ea)](_0x563511)),
        (_0x4d1a2f = _0x1bbc17[_0x4def62(0x171)] || _0x4d1a2f);
      let _0x481102;
      if (id[_0x4def62(0x167)](_0x4def62(0x1b6)))
        return new Promise(async (_0x53103) => {
          const _0x2e3104 = _0x4def62;
          _0x481102 = store["contacts"][id] || {};
          if (!(_0x481102[_0x2e3104(0x1e4)] || _0x481102[_0x2e3104(0x1dc)]))
            _0x481102 = _0x1bbc17[_0x2e3104(0x146)](id) || {};
          _0x53103(
            _0x481102[_0x2e3104(0x1e4)] ||
              _0x481102[_0x2e3104(0x1dc)] ||
              PhoneNumber("+" + id["replace"](_0x2e3104(0x19f), ""))[
                _0x2e3104(0x187)
              ](_0x2e3104(0x183))
          );
        });
      else
        _0x481102 =
          id === "0@s.whatsapp.net"
            ? { id: id, name: "WhatsApp" }
            : id ===
              _0x1bbc17[_0x4def62(0x1ea)](_0x1bbc17[_0x4def62(0x180)]["id"])
            ? _0x1bbc17[_0x4def62(0x180)]
            : store["contacts"][id] || {};
      return (
        (_0x4d1a2f ? "" : _0x481102[_0x4def62(0x1e4)]) ||
        _0x481102[_0x4def62(0x1dc)] ||
        _0x481102[_0x4def62(0x1a7)] ||
        PhoneNumber("+" + _0x563511[_0x4def62(0x152)](_0x4def62(0x19f), ""))[
          _0x4def62(0x187)
        ](_0x4def62(0x183))
      );
    }),
    (_0x1bbc17[_0x366451(0x18b)] = async (
      _0x19faf5,
      _0x397122,
      _0x599817 = "",
      _0x1e9537 = {}
    ) => {
      const _0x2714b2 = _0x366451;
      let _0x363f37 = [];
      for (let _0x4124e2 of _0x397122) {
        _0x363f37["push"]({
          displayName: await _0x1bbc17[_0x2714b2(0x115)](_0x4124e2),
          vcard:
            _0x2714b2(0x15d) +
            (await _0x1bbc17[_0x2714b2(0x115)](_0x4124e2)) +
            _0x2714b2(0x111) +
            (await _0x1bbc17["getName"](_0x4124e2)) +
            _0x2714b2(0x1b4) +
            _0x4124e2[_0x2714b2(0x1e1)]("@")[0x0] +
            ":" +
            _0x4124e2[_0x2714b2(0x1e1)]("@")[0x0] +
            "\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD",
        });
      }
      _0x1bbc17[_0x2714b2(0x11a)](
        _0x19faf5,
        {
          contacts: {
            displayName: _0x363f37[_0x2714b2(0x18e)] + _0x2714b2(0x164),
            contacts: _0x363f37,
          },
          ..._0x1e9537,
        },
        { quoted: _0x599817 }
      );
    }),
    (_0x1bbc17["public"] = !![]),
    (_0x1bbc17["serializeM"] = (_0x4c0e12) =>
      smsg(_0x1bbc17, _0x4c0e12, store)),
    (_0x1bbc17["sendText"] = (
      _0x52a05c,
      _0x238ab4,
      _0x2319e6 = "",
      _0x31388c
    ) =>
      _0x1bbc17["sendMessage"](
        _0x52a05c,
        { text: _0x238ab4, ..._0x31388c },
        { quoted: _0x2319e6, ..._0x31388c }
      )),
    (_0x1bbc17[_0x366451(0x11f)] = async (
      _0x1eb905,
      _0x5ac993,
      _0x355ad2 = "",
      _0x5d7842 = "",
      _0x49a09c
    ) => {
      const _0x5b1d6c = _0x366451;
      let _0x3451d5 = Buffer[_0x5b1d6c(0x15a)](_0x5ac993)
        ? _0x5ac993
        : /^data:.*?\/.*?;base64,/i[_0x5b1d6c(0x126)](_0x5ac993)
        ? Buffer["from"](_0x5ac993["split"]`,`[0x1], _0x5b1d6c(0x12b))
        : /^https?:\/\//[_0x5b1d6c(0x126)](_0x5ac993)
        ? await await getBuffer(_0x5ac993)
        : fs[_0x5b1d6c(0x14b)](_0x5ac993)
        ? fs[_0x5b1d6c(0x1ec)](_0x5ac993)
        : Buffer["alloc"](0x0);
      return await _0x1bbc17[_0x5b1d6c(0x11a)](
        _0x1eb905,
        { image: _0x3451d5, caption: _0x355ad2, ..._0x49a09c },
        { quoted: _0x5d7842 }
      );
    }),
    (_0x1bbc17["sendTextWithMentions"] = async (
      _0x3d7da0,
      _0x5beaef,
      _0xa2a55e,
      _0x3faab6 = {}
    ) =>
      _0x1bbc17["sendMessage"](
        _0x3d7da0,
        {
          text: _0x5beaef,
          mentions: [..._0x5beaef[_0x366451(0x17b)](/@(\d{0,16})/g)][
            _0x366451(0x192)
          ]((_0x108413) => _0x108413[0x1] + _0x366451(0x19f)),
          ..._0x3faab6,
        },
        { quoted: _0xa2a55e }
      )),
    (_0x1bbc17[_0x366451(0x195)] = async (
      _0x1d9762,
      _0x6009a0,
      _0x4b84e1,
      _0x6057a1 = {}
    ) => {
      const _0x198b5b = _0x366451;
      let _0x12f78c = Buffer[_0x198b5b(0x15a)](_0x6009a0)
          ? _0x6009a0
          : /^data:.*?\/.*?;base64,/i[_0x198b5b(0x126)](_0x6009a0)
          ? Buffer[_0x198b5b(0x1ac)](
              _0x6009a0[_0x198b5b(0x1e1)]`,`[0x1],
              _0x198b5b(0x12b)
            )
          : /^https?:\/\//[_0x198b5b(0x126)](_0x6009a0)
          ? await await getBuffer(_0x6009a0)
          : fs[_0x198b5b(0x14b)](_0x6009a0)
          ? fs[_0x198b5b(0x1ec)](_0x6009a0)
          : Buffer["alloc"](0x0),
        _0x4809ae;
      _0x6057a1 && (_0x6057a1["packname"] || _0x6057a1["author"])
        ? (_0x4809ae = await writeExifImg(_0x12f78c, _0x6057a1))
        : (_0x4809ae = await imageToWebp(_0x12f78c)),
        await _0x1bbc17[_0x198b5b(0x11a)](
          _0x1d9762,
          { sticker: { url: _0x4809ae }, ..._0x6057a1 },
          { quoted: _0x4b84e1 }
        )[_0x198b5b(0x1ed)]((_0x232415) => {
          const _0x2f4e38 = _0x198b5b;
          return fs[_0x2f4e38(0x1cc)](_0x4809ae), _0x232415;
        });
    }),
    (_0x1bbc17[_0x366451(0x1e9)] = async (
      _0x5d2854,
      _0x48d7b8,
      _0xe505f0,
      _0x58fd1e = {}
    ) => {
      const _0x43e9ac = _0x366451;
      let _0x3e4ad7 = Buffer[_0x43e9ac(0x15a)](_0x48d7b8)
          ? _0x48d7b8
          : /^data:.*?\/.*?;base64,/i[_0x43e9ac(0x126)](_0x48d7b8)
          ? Buffer[_0x43e9ac(0x1ac)](
              _0x48d7b8[_0x43e9ac(0x1e1)]`,`[0x1],
              _0x43e9ac(0x12b)
            )
          : /^https?:\/\//[_0x43e9ac(0x126)](_0x48d7b8)
          ? await await getBuffer(_0x48d7b8)
          : fs[_0x43e9ac(0x14b)](_0x48d7b8)
          ? fs[_0x43e9ac(0x1ec)](_0x48d7b8)
          : Buffer[_0x43e9ac(0x119)](0x0),
        _0x12569f;
      return (
        _0x58fd1e && (_0x58fd1e[_0x43e9ac(0x1e2)] || _0x58fd1e["author"])
          ? (_0x12569f = await writeExifVid(_0x3e4ad7, _0x58fd1e))
          : (_0x12569f = await videoToWebp(_0x3e4ad7)),
        await _0x1bbc17[_0x43e9ac(0x11a)](
          _0x5d2854,
          { sticker: { url: _0x12569f }, ..._0x58fd1e },
          { quoted: _0xe505f0 }
        ),
        _0x12569f
      );
    }),
    (_0x1bbc17[_0x366451(0x112)] = async (
      _0x453ab6,
      _0x2ce87e,
      _0x4e7904 = !![]
    ) => {
      const _0x38cdc8 = _0x366451;
      let _0x2d1f43 = _0x453ab6[_0x38cdc8(0x1bc)]
          ? _0x453ab6[_0x38cdc8(0x1bc)]
          : _0x453ab6,
        _0x3b3acc =
          (_0x453ab6[_0x38cdc8(0x1bc)] || _0x453ab6)[_0x38cdc8(0x1cd)] || "",
        _0x40fc48 = _0x453ab6["mtype"]
          ? _0x453ab6[_0x38cdc8(0x1de)][_0x38cdc8(0x152)](/Message/gi, "")
          : _0x3b3acc[_0x38cdc8(0x1e1)]("/")[0x0];
      const _0x18a79e = await downloadContentFromMessage(_0x2d1f43, _0x40fc48);
      let _0x52643c = Buffer[_0x38cdc8(0x1ac)]([]);
      for await (const _0x327ae8 of _0x18a79e) {
        _0x52643c = Buffer[_0x38cdc8(0x16a)]([_0x52643c, _0x327ae8]);
      }
      let _0x554b36 = await FileType[_0x38cdc8(0x1a6)](_0x52643c);
      return (
        (trueFileName = _0x4e7904
          ? _0x2ce87e + "." + _0x554b36[_0x38cdc8(0x191)]
          : _0x2ce87e),
        await fs[_0x38cdc8(0x185)](trueFileName, _0x52643c),
        trueFileName
      );
    }),
    (_0x1bbc17[_0x366451(0x18a)] = async (
      _0x54279f,
      _0x12ad3c,
      _0x41de88 = ![],
      _0x18e537 = {}
    ) => {
      const _0x514a4c = _0x366451;
      let _0x4f1d7b;
      _0x18e537[_0x514a4c(0x1e8)] &&
        ((_0x12ad3c["message"] =
          _0x12ad3c[_0x514a4c(0x16e)] &&
          _0x12ad3c[_0x514a4c(0x16e)]["ephemeralMessage"] &&
          _0x12ad3c[_0x514a4c(0x16e)]["ephemeralMessage"][_0x514a4c(0x16e)]
            ? _0x12ad3c[_0x514a4c(0x16e)][_0x514a4c(0x110)][_0x514a4c(0x16e)]
            : _0x12ad3c[_0x514a4c(0x16e)] || undefined),
        (_0x4f1d7b = Object[_0x514a4c(0x1ef)](
          _0x12ad3c["message"][_0x514a4c(0x163)][_0x514a4c(0x16e)]
        )[0x0]),
        delete (_0x12ad3c[_0x514a4c(0x16e)] &&
        _0x12ad3c["message"][_0x514a4c(0x122)]
          ? _0x12ad3c[_0x514a4c(0x16e)]["ignore"]
          : _0x12ad3c[_0x514a4c(0x16e)] || undefined),
        delete _0x12ad3c[_0x514a4c(0x16e)]["viewOnceMessage"]["message"][
          _0x4f1d7b
        ][_0x514a4c(0x133)],
        (_0x12ad3c[_0x514a4c(0x16e)] = {
          ..._0x12ad3c[_0x514a4c(0x16e)][_0x514a4c(0x163)]["message"],
        }));
      let _0x2f8f54 = Object[_0x514a4c(0x1ef)](_0x12ad3c["message"])[0x0],
        _0x3d3c6e = await generateForwardMessageContent(_0x12ad3c, _0x41de88),
        _0x2136f5 = Object["keys"](_0x3d3c6e)[0x0],
        _0x39d4aa = {};
      if (_0x2f8f54 != _0x514a4c(0x1ae))
        _0x39d4aa = _0x12ad3c["message"][_0x2f8f54]["contextInfo"];
      _0x3d3c6e[_0x2136f5][_0x514a4c(0x1d3)] = {
        ..._0x39d4aa,
        ..._0x3d3c6e[_0x2136f5][_0x514a4c(0x1d3)],
      };
      const _0x398b03 = await generateWAMessageFromContent(
        _0x54279f,
        _0x3d3c6e,
        _0x18e537
          ? {
              ..._0x3d3c6e[_0x2136f5],
              ..._0x18e537,
              ...(_0x18e537["contextInfo"]
                ? {
                    contextInfo: {
                      ..._0x3d3c6e[_0x2136f5][_0x514a4c(0x1d3)],
                      ..._0x18e537[_0x514a4c(0x1d3)],
                    },
                  }
                : {}),
            }
          : {}
      );
      return (
        await _0x1bbc17["relayMessage"](
          _0x54279f,
          _0x398b03[_0x514a4c(0x16e)],
          { messageId: _0x398b03[_0x514a4c(0x153)]["id"] }
        ),
        _0x398b03
      );
    }),
    (_0x1bbc17["sendPoll"] = (
      _0x5ab5f7,
      _0x407526 = "",
      _0x24b99e = [],
      _0x4b440a = 0x1
    ) => {
      const _0x17007a = _0x366451;
      return _0x1bbc17[_0x17007a(0x11a)](_0x5ab5f7, {
        poll: {
          name: _0x407526,
          values: _0x24b99e,
          selectableCount: _0x4b440a,
        },
      });
    }),
    (_0x1bbc17[_0x366451(0x129)] = (_0x1177b6 = "") => {
      const _0x398c99 = _0x366451;
      return [..._0x1177b6[_0x398c99(0x17b)](/@([0-9]{5,16}|0)/g)][
        _0x398c99(0x192)
      ]((_0x1b2792) => _0x1b2792[0x1] + _0x398c99(0x19f));
    }),
    (_0x1bbc17[_0x366451(0x1ab)] = async (_0x23bb09) => {
      const _0x4bd7cf = _0x366451;
      let _0x39946f = (_0x23bb09["msg"] || _0x23bb09)[_0x4bd7cf(0x1cd)] || "",
        _0x4b5478 = _0x23bb09[_0x4bd7cf(0x1de)]
          ? _0x23bb09[_0x4bd7cf(0x1de)][_0x4bd7cf(0x152)](/Message/gi, "")
          : _0x39946f["split"]("/")[0x0];
      const _0x3fb670 = await downloadContentFromMessage(_0x23bb09, _0x4b5478);
      let _0x22f468 = Buffer["from"]([]);
      for await (const _0x1eb4bb of _0x3fb670) {
        _0x22f468 = Buffer[_0x4bd7cf(0x16a)]([_0x22f468, _0x1eb4bb]);
      }
      return _0x22f468;
    }),
    _0x1bbc17
  );
}
startXliconBotInc(),
  process["on"](_0x44ced9(0x19b), function (_0x42a38b) {
    const _0x5257de = _0x44ced9;
    let _0x4a2d7f = String(_0x42a38b);
    if (_0x4a2d7f[_0x5257de(0x173)](_0x5257de(0x199))) return;
    if (_0x4a2d7f[_0x5257de(0x173)](_0x5257de(0x1e7))) return;
    if (_0x4a2d7f["includes"]("not-authorized")) return;
    if (_0x4a2d7f["includes"](_0x5257de(0x1ee))) return;
    if (_0x4a2d7f[_0x5257de(0x173)]("rate-overlimit")) return;
    if (_0x4a2d7f[_0x5257de(0x173)]("Connection\x20Closed")) return;
    if (_0x4a2d7f[_0x5257de(0x173)](_0x5257de(0x1b1))) return;
    if (_0x4a2d7f[_0x5257de(0x173)](_0x5257de(0x1c1))) return;
    console[_0x5257de(0x177)]("Caught\x20exception:\x20", _0x42a38b);
  });