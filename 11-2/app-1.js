var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var NewStudent = /** @class */ (function () {
    function NewStudent() {
        this.stdId = 1234;
        this.stdName = "Kong";
        this.age = 27;
        this.gender = "male";
        this.course = "TypeScript";
        this.completed = false;
    }
    NewStudent.prototype.setName = function (name) {
        this.stdName = name;
    };
    NewStudent.prototype.getName = function () {
        return this.stdName;
    };
    return NewStudent;
}());
var user = {
    name: "gong",
    age: 27
};
