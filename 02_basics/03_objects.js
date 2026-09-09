//singleton ->ye constructor ke through banta hai
// ex->Object.create

// object literals
const jsUser = {
    name : "mohit",
    "full name" : "Mohit Thakkar",
    age : 23,
    location : "Indore",
    email : "mohit.thakkar1105@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon","sat"]
}

// use kese kare
console.log(jsUser.email)
console.log(jsUser["full name"])
console.log(jsUser["email"]) // use this since it will help in dart 


// symbol us ekarna 
const userId = Symbol("id");

const user = {
    name: "Mohit",
    [userId]: 123
};

console.log(user[userId])
user["name"] = "Mohit Thakkar"
console.log(user["name"])

// Object.freeze(user) // isme hum aage or change nahi kar payenge

user["name"] = "Mohit"
console.log(user["name"]) // Mohit Thakkar ayega 

jsUser.greeting = function(){
    console.log(`hello user ${this["full name"]}`)
}
console.log(jsUser.greeting) //[Function (anonymous)]
console.log(jsUser.greeting()) //hello user , undefined
