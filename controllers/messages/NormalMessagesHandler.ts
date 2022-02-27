import { Chat, Client, Message } from "whatsapp-web.js";
import { NodeCacheManager } from "../persistence/NodeCacheManager";
import { verifyName } from "../scripts/verifyName";
import MessagesHandler from "./MessagesHandler";
import { stageNormalActions } from "./normalActions/stageNormalActions";

export class NormalMessagesHandler extends MessagesHandler{
    constructor( msg: Message,  client:Client,  chat:Chat,
        cache:NodeCacheManager){
            super(msg, client, chat, cache)
        }
        public start():void{
            this.client.sendMessage(this.msg.from,"Certo, qual seu nome?");
            this.cache.userCache.setUserStage(this.msg.from, 1)
        }
        async responseMessage(userStage:number): Promise<void> {
            stageNormalActions[userStage].action(this)
        }
        

}
