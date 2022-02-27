import { verifyName } from "../../scripts/verifyName"
import { NormalMessagesHandler } from "../NormalMessagesHandler"

export const stageNormalActions: {[key : number] : any} = {
    1: {
        action : function(_this:NormalMessagesHandler){
            console.log("Boa")
            console.log("mensagem:",_this.msg.body)
            if(verifyName(_this.msg.body)){
                console.log("Válido!")
            }
       } 
    }
}