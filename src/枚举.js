"use strict";
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["Read"] = 4] = "Read";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
