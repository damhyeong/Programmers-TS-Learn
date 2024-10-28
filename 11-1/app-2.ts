interface IFace {
    name : string,
    course : string,
    score : number,
    grade : () => void,
}

let student: IFace = {
    name : "Kong",
    course : "TypeScript",
    score : 95,
    grade : () => {
        console.log("A+");
    }
}

student.name = "Gong";