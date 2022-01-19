"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLable(labelledIbj) {
    console.log(labelledIbj.label);
}
var myObj = { label: "1" };
printLable(myObj);
// 数组只读
var ro = [1, 2, 3, 4];
var mySearchFunc;
mySearchFunc = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bolb", "Fred"];
myArray = {
    0: "1",
};
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
// 创建对象
function createClock(ctor, h, m) {
    return new ctor(h, m);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock() {
    }
    DigitalClock.prototype.tick = function () {
        console.log("DigitalClock");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock() {
    }
    AnalogClock.prototype.tick = function () {
        console.log("AnalogClock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 1, 1);
var analog = createClock(AnalogClock, 1, 2);
var square = {};
square.color = "blue";
square.penWidth = 1;
square.sideLength = 2;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
// 一个对象可以同时做为函数和对象使用，并带有额外的属性。
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//接口继承
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// 必须是 Control的子类才能够实现SelectableControl接口
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.select = function () { };
    return Box;
}(Control));
