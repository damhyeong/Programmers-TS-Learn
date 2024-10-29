let empName : string;
let age : number;
let empJob : string;

function printEmp(empName : string, age : number, empJob : string) : void {
    console.log(`${empName} 의 나이는 ${age} 이고, 직업은 ${empJob} 입니다.`);
}

printEmp("공담형", 27, "FullStack");


class Employee {
    private _empName : string;
    private _age : number | undefined;
    private _empJob : string | undefined;

    constructor(empName : string, age? : number, empJob? : string) {
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }

    get empName(){
        return this._empName;
    }
    set empName(name : string) {
        this._empName = name;
    }


    printEmp() : void {
        console.log(this._empName + "의 나이는 " + this._age + "이고, 직업은 " + this._empJob + " 입니다.");
    }
}

let employee1 = new Employee("Gong", 27, "FullStack");
employee1.printEmp();

employee1.empName = "Jason";
employee1.printEmp();


class Employee1 {
    constructor(private _empName : string,
                private _age? : number,
                private _empJob? : string) {
    }

    get empName(){
        return this._empName;
    }
    set empName(name : string) {
        this._empName = name;
    }


    printEmp() : void {
        console.log(this._empName + "의 나이는 " + this._age + "이고, 직업은 " + this._empJob + " 입니다.");
    }
}

