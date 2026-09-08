const array = [1, 2, 3, 4, 5];
console.log(array);

// shallow copy means if mene ek array ko dusre variable me assign kiya to dono variable same reference ko point karenge, 
// agar ek me change kiya to dusre me bhi change hoga.

//deep copy means agar mene ek array ko dusre variable me assign kiya to dono variable alag reference ko point karenge,
// agar ek me change kiya to dusre me change nahi hoga.

const anime = ["Naruto", "One Piece", "Dragon Ball Z", "Attack on Titan"];
const myArr = new Array("Naruto", "One Piece", "Dragon Ball Z", "Attack on Titan");
console.log(anime);
console.log(myArr);
console.log(anime[0]); // Naruto
console.log(anime[1]);

// Array methods
anime.push("Demon Slayer"); // add at the end
console.log(anime);
anime.pop(); // remove from the end
console.log(anime);
anime.unshift("Black Clover"); // add at the beginning , unshift accha nahi hai 
console.log(anime);
anime.shift(); // remove from the beginning , shift accha nahi hai
console.log(anime);

console.log(anime.includes("Naruto")); // true
console.log(anime.indexOf("Bleach")); // -1 , agar element exist nahi karta to -1 return karega

const newAnime = anime.join(", "); // join array elements into a string
console.log(newAnime); // Naruto, One Piece, Dragon Ball Z, Attack on Titan
console.log(typeof newAnime); // string


// slice and splice 

// slice
console.log("A ",anime)
const mya1 = anime.slice(1, 3); // slice(start, end) , end is not included
console.log(mya1);

console.log("B ",anime)

// splice
const mya2 = anime.splice(1, 3); // splice(start, deleteCount) , deleteCount is the number of elements to be removed
console.log(mya2);
console.log("C ",anime); // original array is modified