// 一、! 非空断言操作符:断定不是undefined或null类型
function myFunction(maybeString: string | undefined | null) {
  const onlyString: string = maybeString; // error
  const ignoreUndefinedAndNull: string = maybeString!; //okay
  console.log(ignoreUndefinedAndNull);
}

myFunction(undefined);

// 二、?. 运算符
const obj = undefined;
// obj?.b:如果obj为null或undefined直接返回undefined，否则返回值
// obj === null || obj === void 0 ? void 0 : obj.b
console.log(obj?.b); //undefined
console.log(void 0); // undefined

// 三、?? 空值合并运算符
// 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数
// 注：1)不能与 && 或 || 操作符共用,但可有在有优先级的情况下共用

const foo = null ?? "default string";
console.log(foo);

// 四、?: 可选属性
interface Person {
  name: string;
  Age?: number;
}
