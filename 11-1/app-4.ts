interface StudentIFace {
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : string;
    course? : string;
    completed? : boolean;

    setName : (name : string) => void;
    getName : () => string;
}

class MyStudent implements StudentIFace {
    stdId = 980425;
    stdName = "Gong";
    age = 27;
    gender = "male";
    course = "node.js";
    completed = true;

    setName(name : string) : void {
        this.stdName= name;
        console.log("이름이 설정됨 : " + this.stdName);
    }
    getName() : string {
        return this.stdName;
    }
}

const newInstance = new MyStudent();
newInstance.setName("Jason");