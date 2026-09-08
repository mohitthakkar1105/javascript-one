const score = 100;
console.log(score); // 100

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const num1 = 100.456;
console.log(num1.toPrecision(5)); // 100.46

const hundred = 10000000000000000;
console.log(hundred.toLocaleString("en-IN")); // 10,000,000,000,000,000

// ****************************maths**********************************

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.max(4.6, 5.2, 3.1)); // 5.2
console.log(Math.min(4.6, 5.2, 3.1)); // 3.1

const randomNum = Math.random();
console.log(randomNum); // random number between 0 and 1 , 0 ≤ randomNum < 1
console.log(randomNum * 10);


const min = 10
const max = 20
const randomNumInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumInRange); // random number between 10 and 20, inclusive