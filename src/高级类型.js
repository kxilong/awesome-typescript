"use strict";
/**
 * 交叉类型
 * @param first
 * @param second
 * @returns
 */
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log(this);
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
/**
 * 联合类型(Union Types)
 */
function padLeft(value, padding) { }
function getSmallPet() {
    return {
        fly: function () {
            return "fly";
        },
        layEggs: function () {
            return "layEggs";
        },
        swim: function () {
            return "swim";
        },
    };
}
var pet = getSmallPet();
console.log(pet);
// pet.fly();  //errors
pet.layEggs();
// pet.swim(); //errors
/**
 * 类型保护与区分类型
 */
var pet2 = getSmallPet();
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
/**
 * typeof类型保护
 */
function padRight(value, padding) {
    if (typeof padding === "string") {
    }
    if (typeof padding === "number") {
    }
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
}
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder.getPaddingString();
}
if (padder instanceof StringPadder) {
    padder.getPaddingString();
}
/**
 * 可以为null的类型
 */
var sn = "bar";
sn = null;
/**
 * 索引类型（Index types）
 */
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: "Jarid",
    age: 35,
};
var strings = pluck(person, ["name"]); // ok, string[]
