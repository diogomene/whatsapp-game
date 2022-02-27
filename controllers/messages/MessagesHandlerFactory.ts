import { Client, Message } from "whatsapp-web.js"
import { NodeCacheManager } from "../persistence/NodeCacheManager"
import { GameMessagesHandler } from "./GameMessagesHandler"
import { NormalMessagesHandler } from "./NormalMessagesHandler"

class MessagesHandlerFactory{
    public static async build(msg: Message, client:Client, cache:NodeCacheManager){
        const chat = await msg.getChat()
        if(await cache.playersCache.playerIsPlaying(msg.from)){
            return new GameMessagesHandler(msg, client, chat, cache)
        }
        else{
            return new NormalMessagesHandler(msg, client, chat, cache)
        }
    }
}

export default MessagesHandlerFactory
