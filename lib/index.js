"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleModifier = void 0;
var ConsoleModifier = /** @class */ (function () {
    function ConsoleModifier() {
    }
    ConsoleModifier.success = function (str) {
        console.log("%c ".concat(str), "color:green");
    };
    ConsoleModifier.danger = function (str) {
        console.log("%c ".concat(str), "color:red");
    };
    ConsoleModifier.warning = function (str) {
        console.log("%c ".concat(str), "color:orange");
    };
    ConsoleModifier.genericFormatter = function (str, stylings) {
        console.log("%c ".concat(str), stylings);
    };
    ConsoleModifier.groupConsole = function (obj) {
        console.group(obj.title);
        for (var msg in obj.groupMessages) {
            console.log(msg);
        }
        console.groupEnd();
    };
    return ConsoleModifier;
}());
exports.ConsoleModifier = ConsoleModifier;
;
