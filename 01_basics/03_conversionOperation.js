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
