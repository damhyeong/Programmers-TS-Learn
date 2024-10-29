enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
}

interface Student {
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : "male" | "female" | "neutral";
    course? : string;
    completed? : boolean;
    setName(name : string) : void;
    getName() : string;
}

class NewStudent implements Student {
    stdId = 1234;
    stdName = "Kong";
    age = 27;
    gender : "male" = "male";
    course = "TypeScript";
    completed = false;
    setName(name : string) : void{
        this.stdName = name;
    }
    getName() : string {
        return this.stdName;
    }
}

const user : {name : string, age : number} = {
    name : "gong",
    age : 27
}