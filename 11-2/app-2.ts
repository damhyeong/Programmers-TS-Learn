let anyValue : number | string = 100;
anyValue = "any";

type numOrStr = number | string;

function convertToString(val : numOrStr) : string {
    return String(val);
}

function convertToNumber(val : numOrStr) : number {
    if(typeof val === "string"){
        return parseInt(val);
    } else {
        return val;
    }
}

