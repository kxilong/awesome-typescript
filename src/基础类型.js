// 布尔值
var isDone = false;
// 数字：支持整数，浮点数，进制
var decLiteral = 6;
var hexLiteral = 0xf00d;
// 字符串
var sentence = "\u6211\u662F\u5C0FT\uFF0C\u4F60\u597D\u554A";
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3]; //泛型
// 元组(Tuple):已知元素数量和类型的数组，各元素类型不必相同
var x;
x = [1, "2"];
// 枚举:默认从0开始为元素编号,可修改开始元素编号
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Fail"] = 2] = "Fail";
})(Status || (Status = {}));
var s = Status.Success;
//任意值：当你知道部分值
var anyList = [1, "2"];
// 空值
function warnUser() {
    console.log("this is warn message");
}
var u = undefined;
var n = null;
// Never:表示那些永远不存在的值得类型
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("this is error message");
}
function infiniteLoop() {
    while (true) { }
}
// 类型断言：写代码的人比typescript更懂
var str = "this is str";
var strLength = str.length;
console.log(strLength);
