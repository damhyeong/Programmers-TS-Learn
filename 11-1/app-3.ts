
interface Student {
    stdId : number,
    stdName : string,
    age : number,
    gender : string,
    course : string,
    completed : boolean
}

function getInfo(id : number) : Student {
    return {
        stdId : id,
        stdName : "Gong",
        age : 27,
        gender : "female",
        course : "TypeScript",
        completed : true,
    }
}

