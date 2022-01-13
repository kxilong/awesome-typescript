// 函数类型
function add(x: number, y: number): number {
  return x + y;
}

// 可选参数和默认参数
function buildName(firstName: string, lastName?: string, name = "Simit") {
  return firstName + lastName;
}

// 剩余参数
function concatName(firstName: string, ...resetOfName: string[]) {
  return firstName + "" + resetOfName.join(",");
}

let employeeName = concatName("kxl", "1", "2");

// this和箭头函数
let deck = {
  suits: [1, 2, 3],
  createCardPicker: function () {
    return () => {
      return { suits: this.suits };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(pickedCard);

// 函数重载
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1(a: any, b: any) {
  // type Combinable = string | number;
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// 重载类中成员
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: any, b: any) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add("Semlinker", " Kakuqo");
