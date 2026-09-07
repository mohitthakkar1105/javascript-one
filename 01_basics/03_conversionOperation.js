// let score = "33"
// let score = "33a" 
// let score = undefined;
// let score = null
// let score = true
let score = false

// console.log(score, typeof score,typeof score); 
// console.log(typeof (score)); 

let valueInNumber = Number(score); 
console.log(valueInNumber, typeof valueInNumber); 
//(NaN, number) for 33a , (0, number) for null , (0, number) for undefined , (33, number) for 33
//(1, number) for true , (0, number) for false

// "33" -> 33
// "33a" -> NaN(not a number)
// undefined -> NaN
// null -> 0
// true -> 1 , false -> 0
// false -> 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn); 
// 1 -> true , 0 -> false , ""-> false , "Mohit" -> true , null -> false , undefined -> false

let someValue = true;
let stringValue = String(someValue);
console.log(stringValue, typeof stringValue); 
// 33 -> "33" , null -> "null" , undefined -> "undefined" , true -> "true" , false -> "false"


// ****************************operation****************************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + (2 + 2)); // 14
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);