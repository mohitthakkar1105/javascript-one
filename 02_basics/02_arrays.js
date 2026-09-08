const naruto = ["Naruto", "Sasuke", "Sakura" , "Kakashi"];
const blackClover = ["Asta", "Yuno", "Noelle", "Yami"];
// naruto.push(blackClover); 
console.log(naruto); // ["Naruto", "Sasuke", "Sakura" , "Kakashi", ["Asta", "Yuno", "Noelle", "Yami"]]
// console.log(naruto[4][0]); // Asta

const allCharacters = naruto.concat(blackClover);
console.log(allCharacters); // ["Naruto", "Sasuke", "Sakura" , "Kakashi", "Asta", "Yuno", "Noelle", "Yami"]

// spread operator

const allCharacters2 = [...naruto, ...blackClover];
console.log(allCharacters2); // ["Naruto", "Sasuke", "Sakura" , "Kakashi", "Asta", "Yuno", "Noelle", "Yami"]

// flat , sab nested array ko ek array me

const characters = [naruto, blackClover,["Ichigo", "Rukia", "Renji"],["izuku","shirura",["AllMight","AllforOne"]]];
const new_character = characters.flat(Infinity)
console.log(new_character);

console.log(Array.isArray("mohit")) // false // usefull in backend
console.log(Array.from("mohit")) // [ 'm', 'o', 'h', 'i', 't'] // array banata hai 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]