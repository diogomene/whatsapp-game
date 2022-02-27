export class User{
    contact: string
    stage: number
    name: string = ""
    constructor(contact:string, stage?:number){
        this.contact = contact
        this.stage = stage || 0
    }
    setName(name:string){
        this.name = name
    }
    setStage(stage:number){
        this.stage = stage
    }
}