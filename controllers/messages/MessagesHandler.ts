import { Client, Message, Chat} from 'whatsapp-web.js'
import { NodeCacheManager} from '../persistence/NodeCacheManager'
import {StandardErrorMessages} from "../standardMessages"

abstract class MessagesHandler{
    [key : string] : any
    get msg():Message{
        return this._msg
    }
    get cache(){
        return this._cache
    }
    constructor(protected _msg: Message, protected client:Client, protected chat:Chat,
         protected _cache:NodeCacheManager){
        this._msg = _msg;
        this.client = client;
        this.chat = chat
        this._cache = _cache;
    }

    public async main():Promise<void>{
        
        if(!this.chat.isGroup){ //TODO: Remove '!'
            if(this.msg.body.startsWith("!")){
                const filteredMsg = this.msg.body.substring(1)
                const [command, ...args] = filteredMsg.split(/\s+/)
                if(command.length>0 && command.toLowerCase() != "main"){
                    try{
                        if(args.length>0){
                            this[command](args)
                        }else{
                            this[command]()
                        }
                    }catch(err : any){
                        console.error(err.message)
                        if(err.message === "this[command] is not a function"){
                            this.msg.reply(StandardErrorMessages.COMMAND_NOT_FOUND)
                        }else{
                            this.msg.reply(StandardErrorMessages.UNKNOWN_ERR)
                        }
                    }
                }
            }else{
                const userStage = await this.cache.userCache.getUserStage(this.msg.from) 
                if(userStage > 0){
                    this.responseMessage(userStage)
                }
            }

        }
    }
    abstract responseMessage(userStage:number) : Promise<void>

}

export default MessagesHandler
