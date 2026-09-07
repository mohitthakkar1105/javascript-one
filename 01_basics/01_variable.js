const accountId = 123456789; // compile time constant , ek bar value assigned hogi

// var → Function Scoped

if (true) {
  var name = "Mohit";
}

console.log(name); // bhar bhi print ho raha hai

var name = 25; // infact we can reassign the value of var variable.
console.log(name);

// let → Block Scoped
if (true) {
  let yourName = "Mohit";
  console.log(yourName);//yaha print hoga
}

//console.log(yourName); error , since let is block scoped, it is not accessible outside the block

// general rule of thumb is to use let and const instead of var, since var is function scoped and can lead to unexpected behavior.

city = "Ahmedabad"; // genrally we should not use variables without declaring them, it will create a global variable and can lead to unexpected behavior. 

let state; // declared but not initialized , it will be undefined until we assign a value to it.
console.table([ accountId, name, city, state ]);
