"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var prompt = require('prompt-sync')();
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.prototype.AskQuestion = function (question) {
        return prompt(question);
    };
    return Console;
}());
exports.Console = Console;
//# sourceMappingURL=Console.js.map