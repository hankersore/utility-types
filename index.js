"use strict";
// UTILITY TYPES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Awaited<Type>
// The Awaited type in TypeScript is a utility type that allows you to unwrap the value type that a Promise resolves to.
// 1. One of the key features of the Awaited type is its ability to handle nested Promise values. 
// 2. Awaited can be particularly useful in generic contexts where the exact type wrapped in a Promise might be unknown.
// !!! It's worth noting that the Awaited type does not account for potential rejections of a promise. It assumes the promise will resolve successfully. !!!
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return "Data fetched successfully";
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetchData();
        console.log(result);
    });
}
main();
