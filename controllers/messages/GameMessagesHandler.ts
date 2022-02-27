import { Chat, Client, Message } from "whatsapp-web.js";
import { NodeCacheManager } from "../persistence/NodeCacheManager";
import MessagesHandler from "./MessagesHandler";
export class GameMessagesHandler extends MessagesHandler{
    constructor( msg: Message,  client:Client,  chat:Chat,
        cache:NodeCacheManager){
            super(msg, client, chat, cache)
        }
    public play():void{
        this.client.sendMessage(this.msg.from,"you're playing right now");
    }
    async responseMessage(userStage:number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

