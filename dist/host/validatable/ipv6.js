var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/validatable/callback", "../boolean/ipv6", "./string/ipv6"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = __importDefault(require("@dikac/t-string/validatable/callback"));
    const ipv6_1 = __importDefault(require("../boolean/ipv6"));
    const ipv6_2 = __importDefault(require("./string/ipv6"));
    function Ipv6(string, message = ipv6_2.default) {
        return new callback_1.default(string, ipv6_1.default, message);
    }
    exports.default = Ipv6;
});
//# sourceMappingURL=ipv6.js.map