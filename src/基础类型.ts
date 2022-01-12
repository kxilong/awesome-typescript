// 布尔值
let isDone: boolean = false;

// 数字：支持整数，浮点数，进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// 字符串
let sentence: string = `我是小T，你好啊`;

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; //泛型

// 元组(Tuple):已知元素数量和类型的数组，各元素类型不必相同
let x: [number, string];
x = [1, "2"];

// 枚举:默认从0开始为元素编号,可修改开始元素编号
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Status {
  Success = 1,
  Fail,
}
let s: Status = Status.Success;

//任意值：当你知道部分值
let anyList: any[] = [1, "2"];

// 空值
function warnUser(): void {
  console.log("this is warn message");
}

let u: undefined = undefined;
let n: null = null;

// Never:表示那些永远不存在的值得类型
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("this is error message");
}

function infiniteLoop(): never {
  while (true) {}
}

// 类型断言：写代码的人比typescript更懂
let str: string = "this is str";
let strLength: number = (<string>str).length;
let strLength2: number = (str as string).length;
