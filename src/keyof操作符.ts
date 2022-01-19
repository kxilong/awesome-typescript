class People {
  name: string = "JIM";
}

let sname: keyof People;
sname = "name";

type P1 = Person["name"];
type P2 = Person["name" | "age"];

type TodoList = {
  id: number;
  text: string;
  done: boolean;
};
const todoList: TodoList = {
  id: 1,
  text: "111",
  done: false,
};

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const id = prop(todoList, "id");

enum Currency {
  CNY = 6,
  EUR = 8,
  USD = 10,
}

const CurrencyName = {
  [Currency.CNY]: "人民币",
  [Currency.EUR]: "欧元",
  [Currency.USD]: "美元",
};

function getCurrencyName<T, K extends keyof T>(key: K, map: T): T[K] {
  return map[key];
}
