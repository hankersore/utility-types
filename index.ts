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