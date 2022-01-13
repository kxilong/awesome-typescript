// 函数类型
function add(x, y) {
    return x + y;
}
// 可选参数和默认参数
function buildName(firstName, lastName, name) {
    if (name === void 0) { name = "Simit"; }
    return firstName + lastName;
}
// 剩余参数
function concatName(firstName) {
    var resetOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resetOfName[_i - 1] = arguments[_i];
    }
    return firstName + "" + resetOfName.join(",");
}
var employeeName = concatName("kxl", "1", "2");
// this和箭头函数
var deck = {
    suits: [1, 2, 3],
    createCardPicker: function () {
        var _this = this;
        return function () {
            return { suits: _this.suits };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard);
