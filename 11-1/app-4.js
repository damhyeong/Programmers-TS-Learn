var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 980425;
        this.stdName = "Gong";
        this.age = 27;
        this.gender = "male";
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름이 설정됨 : " + this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return this.stdName;
    };
    return MyStudent;
}());
var newInstance = new MyStudent();
newInstance.setName("Jason");
