// 类
class Greeter {
  greeter: string;
  constructor(message: string) {
    this.greeter = message;
  }
  greet() {
    return `Hello,${this.greeter}`;
  }
}

let greeter = new Greeter("world");

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
class Animal {
  name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  move(distanceInMeters: string) {
    console.log(`Animal move ${distanceInMeters}`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  bark() {
    console.log("Woof! Woof !");
  }
  move(distanceInMeters: string) {
    console.log(`Dog move ${distanceInMeters}`);
    super.move(distanceInMeters);
  }
}

let dog: Animal = new Dog("小狗");
dog.move("111");

// 公共，私有与受保护的修饰符
// 1) 默认public
// 2) private：只能在声明他的类访问
// 3) protected: 跟private类似，但是在派生类任然可以访问
class Sex {
  private name: string;
  protected age: number;
  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
}

class Femal extends Sex {
  constructor(_name: string, _age: number) {
    super(_name, _age);
  }
  public getName() {
    return this.age;
  }
}
let sex1 = new Sex("男", 1);
let sex2 = new Sex("男", 1);
console.log((sex1 = sex2));
// console.log(sex.name);//不能够访问
// 以下案例说明：类的构造函数也可以被protected修饰，但是不能够在声明类外部实例化，可以在继承类中实例化
class Person {
  protected name: string;
  protected constructor(_name: string) {
    this.name = _name;
  }
}

class Employee extends Person {
  constructor(_name: string) {
    super(_name);
  }
}
// let person = new Person("kxl"); //不能够被实例化
let employee = new Employee("kxl");

// readonly修饰符
class Octopus {
  readonly name: string;
  //   _name属性声明和赋值合并至一处
  constructor(readonly _name: string) {
    this.name = _name;
  }
}
let dad = new Octopus("My Name is Octopus!!!");
// dad.name = '11111' //不能被修改

// 存取器
let password = "secret passcode";
class Company {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (password && password == "secret passcode") {
      console.log(1);

      this._fullName = newName;
    } else {
      console.log("Error");
    }
  }
}

let company = new Company();
company.fullName = "koala";

// 静态属性 类名.来访问静态属性

// 抽象类: 1)不能实例化
abstract class Food {
  abstract makeSound(): void;
  move(): void {
    console.log("this is move  function ");
  }
}

class Water extends Food {
  makeSound(): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let food: Food;
// food = new Food();//1)不能实例化
food = new Water();
food.move();
// food.generateReports(); //错误：方法在声明的抽象类中不存在

// 把类当做接口使用
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let pointsd: Point3d = { x: 1, y: 1, z: 1 };
