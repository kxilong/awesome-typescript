interface Demo1 {
  x: string;
  d: string;
}

interface Demo2 {
  x: number;
  c: string;
}

type XY = Demo1 & Demo2;
let p: XY;
p = { x: 1 as never, d: "1", c: "1" };

interface D {
  d: boolean;
}

interface E {
  e: string;
}

interface F {
  f: number;
}

interface A {
  x: D;
}

interface B {
  x: E;
}

interface C {
  x: F;
}

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: "semlinker",
    f: 666,
  },
};

console.log("abc:", abc);
