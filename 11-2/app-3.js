var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
var mixed = ["one", 2, "three", 4];
var readOnlyArray = [1, 2, 3];
var greeting = [1, 'Hello', true];
var firstArr = [1, 2, 3];
var secondArr = [4, 5, 6];
var combine = __spreadArray(__spreadArray([], firstArr, true), secondArr, true);
