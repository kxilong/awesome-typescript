/******泛型 ：创建可重用组件 https://juejin.cn/post/6844904184894980104#heading-15*/

// function identity<T, U>(value: T[], message: U): T[] {
//   return value;
// }
// console.log(identity(1, 2));
// console.log(identity("hello", "world"));
// console.log(identity<Number, Number>([1, 1, 2], 2));

// *想要返回两种类型的函数*************
// 1)第一种方法：元组的方式
function identity<T, U>(value: T, message: U): [T, U] {
  return [value, message];
}
// 2)第二种方法: 泛型接口
interface Indentities<V, M> {
  value: V;
  message: M;
}

function identity2<T, U>(value: T, message: U): Indentities<T, U> {
  let indentites: Indentities<T, U> = {
    value,
    message,
  };
  return indentites;
}
console.log(identity2(1, 2));

// 三。泛型类
interface GenericInterface<T> {
  value: T;
  getIndentity(): T;
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T;
  constructor(_value: T) {
    this.value = _value;
  }
  getIndentity(): T {
    return this.value;
  }
}

const myNumberClass = new IdentityClass(1); //const myNumberClass = new IdentityClass<Number>(1);
const myStringClass = new IdentityClass("1"); //const myStringClass = new IdentityClass<String>("1");

// 四。泛型约束
// 1）确保属性是否存在
interface Length {
  length: number;
}
function identity3<T extends Length>(args: T): T {
  console.log(args.length);
  return args;
}

// console.log(identity3(68)); //数字不含有length属性
function identity4<T>(args: T[]): T[] {
  console.log(args.length);
  return args;
}
console.log(identity4([68]));

// 2)检查对象上的键是否存在
enum Difficulty {
  Easy,
  Intermediate,
  Hard,
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
let tsInfo = {
  a: 1,
  b: 1,
  c: Difficulty.Hard,
};
let difficulty: Difficulty = getProperty(tsInfo, "c");
// let supersetOf: Difficulty = getProperty(tsInfo, "_c"); // tsInfo对象不包含_c键

// 五、泛型参数默认类型
interface A<T = string> {
  name: T;
}
const strA: A = { name: "lili" };
const numA: A<Number> = { name: 1 };

// 六、泛型条件类型
async function stringPromise() {
  return "Hello, Semlinker!";
}

interface Person {
  name: string;
  age: number;
}

async function personPromise() {
  return { name: "Semlinker", age: 30 } as Person;
}

type PromiseType<T> = (args: any[]) => Promise<T>;
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

type extractStringPromise = UnPromisify<typeof stringPromise>; // string
type extractPersonPromise = UnPromisify<typeof personPromise>; // Person

// 七、泛型工具类型
// 7.1 Partial:Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// 7.2 Record:Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
// 7.3 Pick:Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// 7.4 Exclude:Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

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
class FirstClass {
  id: number | undefined;
}

class SecondClass {
  name: string | undefined;
}

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
class GenericCreator1<T> {
  create<T>(c: { new (): T }): T {
    return new c();
  }
}

const creatorA = new GenericCreator1<FirstClass>();
const firstClassA: FirstClass = creatorA.create(FirstClass);

const creatorB = new GenericCreator1<SecondClass>();
const secondClassB: SecondClass = creatorB.create(SecondClass);

class Animal<T> {
  create<T>(c: { new (): T }): T {
    return new c();
  }
}
let animal = new Animal<FirstClass>();
let firstClass1: FirstClass = animal.create(FirstClass);
// console.log(firstClass1);
