const name = "mohit thakkar";
const repoCount = "8";

// for concatination
console.log("Hello I am " + name + " and I have " + repoCount + " repos"); // not recommended

// using backtick string (recommended)
console.log(`Hello I am ${name} and I have ${repoCount} repos`);

// new way of defining string

const name2 = new String("mohit thakkar");
console.log(typeof name2); // object
console.log(name2); 

console.log(name2[3]); // i
console.log(name2.__proto__);  //{}

console.log(name2.length);  //13
console.log(name2.toUpperCase()); // MOHIT THAKKAR
console.log(name2); // bcoz toUpperCase() method does not change the original string, it returns a new string in uppercase.
console.log(name2.charAt(3)); 
console.log(name2.indexOf("t"));

const newString = name2.substring(0, 5);
console.log(newString); // mohit

const otherString = name2.slice(-5, 5);
console.log(`otherString is: ${otherString}`); // mohit
// m(0), o(1), h(2), i(3), t(4) ,(5), t(6), h(7), a(8), k(9), k(10), a(11), r(12) , length = 13 -5 = 8, 8 to 5 = -3, so it will return empty string

const oneMoreString = "   mohit thakkar   ";
console.log(oneMoreString.trim()); // mohit thakkar

const url = "https://mohitthakkar.com/";
console.log(url.replace("/", "")); // https:/mohitthakkar.com/ it will replace only the first occurence of /.
console.log(url.replaceAll("/", "")); // https:mohitthakkar.com it will replace all the occurences of /.

console.log(url.includes("mohit")); // true

const url2 = "https://mohitthakkar.com/";
console.log(url2.split("/")); // [ 'https:', '', 'mohitthakkar.com', '' ]