//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// data type of null is object.
// data type of undefined is undefined
// data type of symbol is symbol
// data type of bigint is bigint
// data type of function is function
// data type of array is object
// data type of object is object
// data type of string is string
// data type of number is number
// data type of boolean is boolean


// *****************stack and heap memory*****************

// Primitive data types are stored in stack memory, and reference data types are stored in heap memory.
// stack (primitives) is faster than heap (reference types) because stack memory is smaller and more efficient to access, while heap memory is larger and slower to access.
