import {Role} from './Role'
class Player{
    name:string
    contact:string
    role : Role
    constructor(name : string, contact : string, role : Role){
        this.name = name;
        this.contact = contact;
        this.role = role
    }
}

export default Player