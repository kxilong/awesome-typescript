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
// 类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeter = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeter;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// 继承
// class Animal {
//   move(distanceInMeters: string) {
//     console.log(`Animal move ${distanceInMeters}`);
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log("Woof! Woof !");
//   }
// }
// let dog = new Dog();
var Animal = /** @class */ (function () {
    function Animal(_name) {
        this.name = _name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log("Animal move " + distanceInMeters);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof !");
    };
    Dog.prototype.move = function (distanceInMeters) {
        console.log("Dog move " + distanceInMeters);
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Dog;
}(Animal));
var dog = new Dog("小狗");
dog.move("111");
// 公共，私有与受保护的修饰符
// 1) 默认public
// 2) private：只能在声明他的类访问
// 3) protected: 跟private类似，但是在派生类任然可以访问
var Sex = /** @class */ (function () {
    function Sex(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return Sex;
}());
var Femal = /** @class */ (function (_super) {
    __extends(Femal, _super);
    function Femal(_name, _age) {
        return _super.call(this, _name, _age) || this;
    }
    Femal.prototype.getName = function () {
        return this.age;
    };
    return Femal;
}(Sex));
var sex1 = new Sex("男", 1);
var sex2 = new Sex("男", 1);
console.log((sex1 = sex2));
// console.log(sex.name);//不能够访问
// 以下案例说明：类的构造函数也可以被protected修饰，但是不能够在声明类外部实例化，可以在继承类中实例化
var Person = /** @class */ (function () {
    function Person(_name) {
        this.name = _name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(_name) {
        return _super.call(this, _name) || this;
    }
    return Employee;
}(Person));
// let person = new Person("kxl"); //不能够被实例化
var employee = new Employee("kxl");
// readonly修饰符
var Octopus = /** @class */ (function () {
    //   _name属性声明和赋值合并至一处
    function Octopus(_name) {
        this._name = _name;
        this.name = _name;
    }
    return Octopus;
}());
var dad = new Octopus("My Name is Octopus!!!");
// dad.name = '11111' //不能被修改
// 存取器
var password = "secret passcode";
var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (password && password == "secret passcode") {
                console.log(1);
                this._fullName = newName;
            }
            else {
                console.log("Error");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Company;
}());
var company = new Company();
company.fullName = "koala";
// 静态属性 类名.来访问静态属性
// 抽象类: 1)不能实例化
var Food = /** @class */ (function () {
    function Food() {
    }
    Food.prototype.move = function () {
        console.log("this is move  function ");
    };
    return Food;
}());
var Water = /** @class */ (function (_super) {
    __extends(Water, _super);
    function Water() {
        return _super.call(this) || this;
    }
    Water.prototype.makeSound = function () {
        throw new Error("Method not implemented.");
    };
    Water.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return Water;
}(Food));
var food;
// food = new Food();//1)不能实例化
food = new Water();
food.move();
// food.generateReports(); //错误：方法在声明的抽象类中不存在
// 把类当做接口使用
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var pointsd = { x: 1, y: 1, z: 1 };
