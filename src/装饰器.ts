// 类装饰器
function Greeter1(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      // console.log(greeting);
    };
  };
}
// 属性装饰器
function logProperty(target: any, key: string) {
  console.log(target, key);
}

// 方法装饰器
function log(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target, propertyKey, descriptor);
}

// 参数装饰器
function Log(target: Function, key: string, parameterIndex: number) {
  console.log(key, parameterIndex);
}

@Greeter1("Hello TS!")
class Greeting {
  @logProperty
  public name: string;
  constructor(@Log name: string) {
    // 内部实现
    this.name = name;
  }
  @log
  runTask(arg: any): any {
    console.log("runTask invoked, args: " + arg);
    return "finished";
  }
}

let myGreeting = new Greeting("semlinker");
// console.log(myGreeting);

(myGreeting as any).greet(); // console output: 'Hello Semlinker!';
