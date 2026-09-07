// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // true , apne app "2" ko number me convert kar dega
// console.log("02" > 1); // true, apne app "02" ko number me convert kar dega

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
//avoid such things, because it can lead to confusion and unexpected results.

// JavaScript me: == aur:> < >= <= , null ko 0 me convert kar deta hai, lekin undefined ko 0 me convert nahi karta hai.

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); //false
//avoid such things, because it can lead to confusion and unexpected results.

// ye undefined nan me ban jata hai 

// note undefined == null // true


// === check is a strict equality operator, it checks both value and type
console.log(2 === 2); // true
console.log(2 === "2"); // false, because the types are different