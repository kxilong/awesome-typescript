"use strict";
// 函数类型
function add(x, y) {
    return x + y;
}
// 可选参数和默认参数
function buildName(firstName, lastName, name) {
    if (name === void 0) { name = "Simit"; }
    return firstName + lastName;
}
// 剩余参数
function concatName(firstName) {
    var resetOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resetOfName[_i - 1] = arguments[_i];
    }
    return firstName + "" + resetOfName.join(",");
}
var employeeName = concatName("kxl", "1", "2");
// this和箭头函数
var deck = {
    suits: [1, 2, 3],
    createCardPicker: function () {
        var _this = this;
        return function () {
            return { suits: _this.suits };
        };
    },
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard);
function add1(a, b) {
    // type Combinable = string | number;
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// 重载类中成员
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    };
    return Calculator;
}());
var calculator = new Calculator();
var result = calculator.add("Semlinker", " Kakuqo");
