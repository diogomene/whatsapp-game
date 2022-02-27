import {Client} from "whatsapp-web.js";
import {NodeCacheManager} from "./controllers/persistence/NodeCacheManager"
import {default as MsgHandlerFactory} from "./controllers/messages/MessagesHandlerFactory";
import fs from "fs"
import qrcode from "qrcode-terminal/"

const nodeCache = new NodeCacheManager()

const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({ puppeteer: { headless: true }, session: sessionCfg, clientId:""});

client.initialize();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on("message", async (msg)=>{
    const msgHandler = await MsgHandlerFactory.build(msg, client, nodeCache)
    msgHandler.main()
})
