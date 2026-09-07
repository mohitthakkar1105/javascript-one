"use strict"; // treat all JS code as newer version

let name = "Mohit"//String
let age = 23//Number
let isLoggedIn = false//Boolean
let state;//undefined

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique value

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof isLoggedIn); // boolean

let bigNumber = 12345678901234567890;
let number = 12345678901234567890n;

console.log(typeof bigNumber);
console.log(typeof number);