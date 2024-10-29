var empName;
var age;
var empJob;
function printEmp(empName, age, empJob) {
    console.log("".concat(empName, " \uC758 \uB098\uC774\uB294 ").concat(age, " \uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(empJob, " \uC785\uB2C8\uB2E4."));
}
printEmp("공담형", 27, "FullStack");
var Employee = /** @class */ (function () {
    function Employee(empName, age, empJob) {
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (name) {
            this._empName = name;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.printEmp = function () {
        console.log(this._empName + "의 나이는 " + this._age + "이고, 직업은 " + this._empJob + " 입니다.");
    };
    return Employee;
}());
var employee1 = new Employee("Gong", 27, "FullStack");
employee1.printEmp();
employee1.empName = "Jason";
employee1.printEmp();
var Employee1 = /** @class */ (function () {
    function Employee1(_empName, _age, _empJob) {
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
    }
    Object.defineProperty(Employee1.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (name) {
            this._empName = name;
        },
        enumerable: false,
        configurable: true
    });
    Employee1.prototype.printEmp = function () {
        console.log(this._empName + "의 나이는 " + this._age + "이고, 직업은 " + this._empJob + " 입니다.");
    };
    return Employee1;
}());
