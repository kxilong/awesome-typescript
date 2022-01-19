function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray;
let myFunc: Func = (x: number): Array<number> => {
  return [1];
};

let x1 = "hello" as const;
type X = typeof x1;

let y = [10, 20] as const;
type Y = typeof y;
type Data = typeof y[number];

const locales = [
  {
    locale: "ZH-CN",
    language: "中文",
  },
  {
    locale: "en",
    language: "English",
  },
] as const;

type Locale = typeof locales[number]["locale"];
