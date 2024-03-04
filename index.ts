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
