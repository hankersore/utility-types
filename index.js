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
main(); // Data fetched successfully
const a = {
    name: 'Dilshoda'
};
const courses = {
    "Computer Science": {
        professor: "Mary Jane",
        tel: 12,
    },
    "Mathematics": {
        professor: "John Doe",
        tel: 12,
    },
    "Literature": {
        professor: "Frank Purple",
        tel: 12,
    }
};
// ***************************************
// Parameters<Type>
// Parameters Type is used take the parameters or arguments of a function and create a new type based off them.
// tuple with function arguments
const myFunction = (a, b) => {
    return a + b;
};
// Equivalent to a tuple type of:
// type myType = [ a: string, b: string ];
let myArray = ['hello ', 'world'];
myFunction(...myArray);
// ***************************************
// ConstructorParameters<Type>
// ConstructorParameters<Type> is a TypeScript utility type that extracts the parameter types from the constructor of a class or a constructor function.
// In simpler terms, it helps you figure out the types of parameters that a constructor function takes. 
class Student {
    constructor(name, age) {
    }
}
const params = ['John', 30];
const student = new Student(...params);
// Equivalent to: const person = new Person('John', 30);
// ***************************************
// ReturnType<Type>
// Constructs a type consisting of the return type of function Type.
// The ReturnType utility type is very useful in situations where the output of a specific function needs to be taken in by another function. In that scenario, you might create a new, custom type, that the output of a function constrains itself to.
function sendData(a, b) {
    return {
        a: `${a}`,
        b: `${b}`
    };
}
// The same as writing:
// type Data = {
//     a: string,
//     b: string
// }
// ***************************************
// InstanceType<Type>
// Constructs a type consisting of the instance type of a constructor function in Type.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Alice", 30);
console.log(person.name); // "Alice" 
console.log(person.age); // 30
// ***************************************
// ThisParameterType<Type>
// Extracts the type of the 'this' parameter for a function type, or 'unknown' if the function type has no 'this' parameter.
function logName() {
    console.log(this.name);
}
// ***************************************
// OmitThisParameter<Type>
// Removes the 'this' parameter from Type. If Type has no explicitly declared 'this' parameter, the result is simply Type. Otherwise, a new function type with no 'this' parameter is created from Type. Generics are erased and only the last overload signature is propagated into the new function type.
function toHex() {
    return this.toString(16);
}
const fiveToHex = toHex.bind(5);
console.log(fiveToHex());
