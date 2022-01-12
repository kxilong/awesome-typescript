interface LabelledValue {
  label: string;
  //   可选属性
  color?: string;
  width?: number;
  //   索引签名
  [propName: string]: any;
}

function printLable(labelledIbj: LabelledValue) {
  console.log(labelledIbj.label);
}

let myObj = { label: "1" };
printLable(myObj);

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

// 数组只读
let ro: ReadonlyArray<number> = [1, 2, 3, 4];
// ro.push(1); //不可以这样操作

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearchFunc: SearchFunc;
mySearchFunc = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

// 可索引类型:通过索引得到的类型
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bolb", "Fred"];
myArray = {
  0: "1",
};

interface NumberDictionary {
  [index: string]: number;
  length: number; // 可以，length是number类型
  name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
}

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}
// a[100] == a['100']
interface NotKey {
  [x: number]: Animal;
  [y: string]: Dog;
}

// 类类型
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
//   setTime(d: Date) {
//     throw new Error("Method not implemented.");
//   }
// }

// 类静态部分与实例部分的区别
/**
 * 以下例子 new只修饰类静态部分
 */
// interface ClockConstructor {
//   new (hour: number, minute: number): any;
// }

// class Clock implements ClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }
/**
 * 修改
 */
// 用于类的静态部分使用
interface ClockInterface {
  tick(): void;
}
// 用于类的实例部分使用
interface ClockConstructor {
  new (h: number, m: number);
}

// 创建对象
function createClock(
  ctor: ClockConstructor,
  h: number,
  m: number
): ClockInterface {
  return new ctor(h, m);
}

class DigitalClock implements ClockInterface {
  tick(): void {
    console.log("DigitalClock");
  }
}

class AnalogClock implements ClockInterface {
  tick(): void {
    console.log("AnalogClock");
  }
}
let digital = createClock(DigitalClock, 1, 1);
let analog = createClock(AnalogClock, 1, 2);

// 继承接口
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.penWidth = 1;
square.sideLength = 2;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

// 一个对象可以同时做为函数和对象使用，并带有额外的属性。
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

//接口继承
class Control {
  private state: any;
  status: boolean;
}

interface SelectableControl extends Control {
  select(): void;
}

// 必须是 Control的子类才能够实现SelectableControl接口
class Box extends Control implements SelectableControl {
  select(): void {}
}
