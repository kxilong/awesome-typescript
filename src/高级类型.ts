/**
 * 交叉类型
 * @param first
 * @param second
 * @returns
 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    console.log(this);
  }
}

let jim = extend(new Person("jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

/**
 * 联合类型(Union Types)
 */
function padLeft(value: string, padding: number | string | boolean) {}

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Bird | Fish {
  return {
    fly: function () {
      return "fly";
    },
    layEggs: function () {
      return "layEggs";
    },
    swim: function () {
      return "swim";
    },
  };
}

let pet = getSmallPet();
console.log(pet);

// pet.fly();  //errors
pet.layEggs();
// pet.swim(); //errors

/**
 * 类型保护与区分类型
 */

let pet2 = getSmallPet();
if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else {
  (<Bird>pet).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/**
 * typeof类型保护
 */
function padRight(value: string, padding: string | number) {
  if (typeof padding === "string") {
  }
  if (typeof padding === "number") {
  }
}

/**
 * instanceof类型保护
 */
interface Padder {
  getPaddingString(): string;
}
class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

let padder: Padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
  padder.getPaddingString();
}

if (padder instanceof StringPadder) {
  padder.getPaddingString();
}

/**
 * 可以为null的类型
 */
let sn: string | null = "bar";
sn = null;

/**
 * 类型别名
 */
type Tree<T> = {
  value: T;
  left: Tree<T>;
};

/**
 * 字符串字面量类型
 */
type Easing = "ease-in" | "ease-out";

/**
 * 索引类型（Index types）
 */

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Jarid",
  age: 35,
};
let strings: string[] = pluck(person, ["name"]); // ok, string[]

// 联合类型
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission;
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}

// type Vehicle = Motorcycle | Car | Truck;
// const EVALUATION_FACTOR = Math.PI;
// function evaluatePrice(vehicle: Vehicle) {
//   return vehicle.capacity * EVALUATION_FACTOR;
// }

// const myTruck: Truck = { vType: "truck", capacity: 9.5 };
// evaluatePrice(myTruck);
