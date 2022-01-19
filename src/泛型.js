"use strict";
/******泛型 ：创建可重用组件 https://juejin.cn/post/6844904184894980104#heading-15*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// function identity<T, U>(value: T[], message: U): T[] {
//   return value;
// }
// console.log(identity(1, 2));
// console.log(identity("hello", "world"));
// console.log(identity<Number, Number>([1, 1, 2], 2));
// *想要返回两种类型的函数*************
// 1)第一种方法：元组的方式
function identity(value, message) {
    return [value, message];
}
function identity2(value, message) {
    var indentites = {
        value: value,
        message: message,
    };
    return indentites;
}
console.log(identity2(1, 2));
var IdentityClass = /** @class */ (function () {
    function IdentityClass(_value) {
        this.value = _value;
    }
    IdentityClass.prototype.getIndentity = function () {
        return this.value;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass(1); //const myNumberClass = new IdentityClass<Number>(1);
var myStringClass = new IdentityClass("1"); //const myStringClass = new IdentityClass<String>("1");
function identity3(args) {
    console.log(args.length);
    return args;
}
// console.log(identity3(68)); //数字不含有length属性
function identity4(args) {
    console.log(args.length);
    return args;
}
console.log(identity4([68]));
// 2)检查对象上的键是否存在
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
function getProperty(obj, key) {
    return obj[key];
}
var tsInfo = {
    a: 1,
    b: 1,
    c: Difficulty.Hard,
};
var difficulty = getProperty(tsInfo, "c");
var strA = { name: "lili" };
var numA = { name: 1 };
// 六、泛型条件类型
function stringPromise() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "Hello, Semlinker!"];
        });
    });
}
function personPromise() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, { name: "Semlinker", age: 30 }];
        });
    });
}
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
var x = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
};
var todo = {
    title: "Clean room",
    completed: false,
};
// 7.5 ReturnType:ReturnType<T> 的作用是用于获取函数 T 的返回类型。
// type T0 = ReturnType<() => string>; // string
// type T1 = ReturnType<(s: string) => void>; // void
// type T2 = ReturnType<<T>() => T>; // {}
// type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
// type T4 = ReturnType<any>; // any
// type T5 = ReturnType<never>; // any
// type T6 = ReturnType<string>; // Error
// type T7 = ReturnType<Function>; // Error
// 八、使用泛型创建对象
// 8.1 构造签名
var FirstClass = /** @class */ (function () {
    function FirstClass() {
    }
    return FirstClass;
}());
var SecondClass = /** @class */ (function () {
    function SecondClass() {
    }
    return SecondClass;
}());
// class GenericCreator<T> {
//   create(): T {
//     return new T();
//   }
// }
// const creator1 = new GenericCreator<FirstClass>();
// const firstClass: FirstClass = creator1.create();
// const creator2 = new GenericCreator<SecondClass>();
// const secondClass: SecondClass = creator2.create();
// interface Point {
//   new (x: number, y: number): Point;
// }
// 8.2 构造函数类型
// new < T1, T2, ... > ( p1, p2, ... ) => R
// 8.3 构造函数类型的应用
// interface Point {
//   new (x: number, y: number): Point;
//   x: number;
//   y: number;
// }
// class Point2D implements Point {
//   readonly x: number;
//   readonly y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// const point: Point = new Point2D(1, 2);
// 8.4 使用泛型创建对象
var GenericCreator1 = /** @class */ (function () {
    function GenericCreator1() {
    }
    GenericCreator1.prototype.create = function (c) {
        return new c();
    };
    return GenericCreator1;
}());
var creatorA = new GenericCreator1();
var firstClassA = creatorA.create(FirstClass);
var creatorB = new GenericCreator1();
var secondClassB = creatorB.create(SecondClass);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.create = function (c) {
        return new c();
    };
    return Animal;
}());
var animal = new Animal();
var firstClass1 = animal.create(FirstClass);
console.log(firstClass1);
