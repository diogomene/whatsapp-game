import Player from "./Player"
class GameRoom{
    round : Number = 0
    constructor(private id:string , private master:Player, private players:Player[]){
        this.master = master
        this.players = players
    }
    getPlayersContacts():string[]{
        const playersContacts : string [] = []
        this.players.forEach( player => playersContacts.push(player.contact))
        return playersContacts
    }
    getMaster():Player{
        return this.master
    }
    getId():string{
        return this.id
    }
}

export default GameRoom