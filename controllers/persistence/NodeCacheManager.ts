import NodeCache from "node-cache"
import GameRoom from "../../models/GameRoom";
import Player from "../../models/Player";
import { User } from "../../models/User";
class UserNodeCache{
    cache = new NodeCache();
    async getUserStage(contact:string):Promise<User | any>{
        const user : User | any = this.cache.get(contact)
        if(user){
            return await user.stage
        }else{
        }   
    }
    async setUser(contact:string, stage ?: number){
        const newUser = new User(contact)
        this.cache.set(contact, newUser)
    }
    async setUserName(contact:string, name:string){
        const oldUser : User = await this.takeUser(contact)
        oldUser.setName(name)
        const newUser = oldUser
        this.cache.set(contact, newUser)
    }
    async setUserStage(contact:string, stage:number){
        const oldUser : User = await this.takeUser(contact)
        oldUser.setStage(stage)
        const newUser = oldUser
        console.log("new user", newUser)
        this.cache.set(contact, newUser)
    }
    async takeUser(contact : string) : Promise<User>{
        console.log("contact:",contact)
        const oldUser : User | any = await this.cache.take(contact)
        if(oldUser){
            return oldUser
        }else{
            return new User(contact)
        }
    }
}
class PlayersNodeCache{
    cache = new NodeCache();
    async playerIsPlaying(contact:string) : Promise<boolean>{
        return await this.cache.has(contact)
    }
    getPlayer(contact:string):Player | any{
        const player = this.cache.get(contact)
        return player
    }
    async setPlayer(player:Player):Promise<void>{
        await this.cache.set(player.contact, player)
    }
}
class RoomsNodeCache{
    cache = new NodeCache();
    gameRoomIsPlaying(id:string) : boolean{
        return this.cache.has(id)
    }
    setGameRoom(gameRoom:GameRoom):void{
        this.cache.set(gameRoom.getId(), gameRoom)
    }
    getGameRoom(id:string):GameRoom | any{
        return this.cache.get(id)
    }
    getGameRoomRound(id:string):number{
        const gameRoom : GameRoom | any = this.cache.get(id)
        return gameRoom.round
    }
    getGameRoomContacts(id:string):string[] | any{
        return this.getGameRoom(id).getPlayersContacts()
    }
}
class NodeCacheManager{
    playersCache = new PlayersNodeCache()
    roomsCache = new RoomsNodeCache()
    userCache = new UserNodeCache()
}
export {PlayersNodeCache, RoomsNodeCache, UserNodeCache, NodeCacheManager}