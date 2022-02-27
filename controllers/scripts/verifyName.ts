const regName = /^[a-zA-Z]+[a-zA-Z1-9]{4,20}$/;

const nameState = {
    "VALID":true,
    "NOT_VALID":false
}

export function verifyName(name:string):boolean{
    if(regName.test(name)){
        return nameState["VALID"]
    }
    else{
        return nameState["NOT_VALID"]
    }
}