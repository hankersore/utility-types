// UTILITY TYPES

// Awaited<Type>
// The Awaited type in TypeScript is a utility type that allows you to unwrap the value type that a Promise resolves to.

// 1. One of the key features of the Awaited type is its ability to handle nested Promise values. 

// 2. Awaited can be particularly useful in generic contexts where the exact type wrapped in a Promise might be unknown.

// !!! It's worth noting that the Awaited type does not account for potential rejections of a promise. It assumes the promise will resolve successfully. !!!

async function fetchData() {
    return "Data fetched successfully";
}

async function main() {
    const result: Awaited<Promise<string>> = await fetchData();
    console.log(result); 
}

main(); // Data fetched successfully

// ***************************************

//  Partial<Type> 

// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

interface IStudent {
    id: string;
    name: string;
    age: number;
}

type OptionalStudent = Partial<IStudent>;

const a: OptionalStudent = {
    name: 'Dilshoda'
} 

// ***************************************

// Required<Type>

// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

type RequiredStudent = Required<IStudent>;

// const a: RequiredStudent = {
//     name: 'Dilshoda'
// } throws error Type '{ name: string; }' is missing the following properties from type 'Required<IStudent>': id, age.

// ***************************************

// Readonly<Type>

// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

type ReadonlyStudent = Readonly<IStudent>;

// ***************************************

// Record<Keys, Type>

// Record<Keys, Type> constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

// In TypeScript, the Record type simply allows us to define dictionaries, also referred to as key-value pairs, with a fixed type for the keys and a fixed type for the values.

// The power of Record type is that we can use it to model dictionaries with a fixed number of keys.

type Course = "Computer Science" | "Mathematics" | "Literature";

interface CourseInfo {
    professor: string
    tel: number
}

const courses: Record<Course, CourseInfo> = {
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
}

// ***************************************

// Pick<Type, Keys>

// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

type PickStudent = Pick<IStudent, 'id'|'age'>;

// ***************************************

// Omit<Type, Keys>

// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.

type OmitStudent = Omit<IStudent, 'id'>;

// ***************************************

// Exclude<UnionType, ExcludedMembers>

// The Exclude utility type lets us exclude certain members from an already defined union type. That means we can take an existing type, and remove items from it for specific situations.

type Union = 'red' | 'blue' | 'yellow';

type b = Exclude<Union, 'blue'>;

// ***************************************

// Extract<Type, Union>

// Extract is a utitly type in Typescript that allows you to create a new type by extracting a subset of an existing type.

type Animal = "cat" | "dog" | "bird" | "fish";

type ExtractType = Extract<Animal, "cat" | "dog">; 

// ***************************************

// NonNullable<Type>

// Constructs a type by excluding null and undefined from Type.

type C = null | string | number | undefined;

type NonNull = NonNullable<C>;

// ***************************************

// Parameters<Type>

// Parameters Type is used take the parameters or arguments of a function and create a new type based off them.
// tuple with function arguments

const myFunction = (a: string, b: string) => {
    return a + b;
}

type myType = Parameters<typeof myFunction>; 
// Equivalent to a tuple type of:
// type myType = [ a: string, b: string ];

let myArray:myType = [ 'hello ', 'world' ];

myFunction(...myArray);

// ***************************************

// ConstructorParameters<Type>

// ConstructorParameters<Type> is a TypeScript utility type that extracts the parameter types from the constructor of a class or a constructor function.
// In simpler terms, it helps you figure out the types of parameters that a constructor function takes. 

class Student {
    constructor(name: string, age: number) {
       
    }
}

const params: ConstructorParameters<typeof Student> = ['John', 30];
const student = new Student(...params);
// Equivalent to: const person = new Person('John', 30);

// ***************************************

// ReturnType<Type>

// Constructs a type consisting of the return type of function Type.

// The ReturnType utility type is very useful in situations where the output of a specific function needs to be taken in by another function. In that scenario, you might create a new, custom type, that the output of a function constrains itself to.

function sendData(a: number, b: number) {
    return {
        a: `${a}`,
        b: `${b}`
    }
}
type Data = ReturnType<typeof sendData>;
// The same as writing:
// type Data = {
//     a: string,
//     b: string
// }

// ***************************************

// InstanceType<Type>

// Constructs a type consisting of the instance type of a constructor function in Type.

class Person { 
	constructor(public name: string, public age: number) { } 
} 

type PersonInstance = InstanceType<typeof Person>; 

const person: PersonInstance = new Person("Alice", 30); 

console.log(person.name); // "Alice" 
console.log(person.age); // 30

// ***************************************

// ThisParameterType<Type>

// Extracts the type of the 'this' parameter for a function type, or 'unknown' if the function type has no 'this' parameter.

function logName(this: { name: string }): void {
    console.log(this.name);
}

type ThisTypeOfLogName = ThisParameterType<typeof logName>;

// ***************************************

// OmitThisParameter<Type>

// Removes the 'this' parameter from Type. If Type has no explicitly declared 'this' parameter, the result is simply Type. Otherwise, a new function type with no 'this' parameter is created from Type. Generics are erased and only the last overload signature is propagated into the new function type.

function toHex(this: Number) {
    return this.toString(16);
}
   
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
   
console.log(fiveToHex());

// ***************************************

// ThisType<Type>

// This utility does not return a transformed type. Instead, it serves as a marker for a contextual 'this' type. Note that the noImplicitThis flag must be enabled to use this utility.

// If you add & ThisType<WhateverYouWantThisToBe> to the type of an object, the functions within that object will have WhateverYouWantThisToBe as the type used for 'this'.

// ***************************************

// Intrinsic String Manipulation Types

// Uppercase<StringType>

// Converts each character in the string to the uppercase version.

type Greeting = "Hello, world";

type ShoutyGreeting = Uppercase<Greeting>;

// Lowercase<StringType>

// Converts each character in the string to the lowercase equivalent.

type QuietGreeting = Lowercase<Greeting>;

// Capitalize<StringType>

// Converts the first character in the string to an uppercase equivalent.

type LowercaseGreeting = "hello, world";

type CapGreeting = Capitalize<LowercaseGreeting>;

// Uncapitalize<StringType>

// Converts the first character in the string to a lowercase equivalent.

type UppercaseGreeting = "HELLO WORLD";

type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;