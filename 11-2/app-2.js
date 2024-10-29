var anyValue = 100;
anyValue = "any";
function convertToString(val) {
    return String(val);
}
function convertToNumber(val) {
    if (typeof val === "string") {
        return parseInt(val);
    }
    else {
        return val;
    }
}
