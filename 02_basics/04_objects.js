// const tinderUser = new Object() // singleton object answer is {}
const tinderUser = {} // non singleton 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "mohit@gmail.com",
    fullName : {
        userfullName : {
            firstName : "mohit",
            lastName : "Thakkar"
        }
    }
}

console.log(regularUser["fullName"]["userfullName"]["firstName"])
console.log(regularUser["fullName"]["userfullName"]["lastName"])

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = Object.assign(obj1,obj2)
//console.log(obj3)
//console.log(obj1)//matlab obj1 me obj2 daal diya not better approch

// better approch
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)
console.log(obj1)

// more better approch
const obj5 = {...obj1,...obj2}
console.log(obj5)

// list of object 

const users = [
    {
        id : "001",
        name : "Mohit",
        age : 23,
        email : "mohit@gmail.com"
    },
    {
        id : "001",
        name : "Mohit",
        age : 23,
        email : "mohit@gmail.com"
    },
    {
        id : "001",
        name : "Mohit",
        age : 23,
        email : "mohit@gmail.com"
    },
    {
        id : "001",
        name : "Mohit",
        age : 23,
        email : "mohit@gmail.com"
    },
    {
        id : "001",
        name : "Mohit",
        age : 23,
        email : "mohit@gmail.com"
    }
]

console.log(users[1].id)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


// ************destructuring*****************8

const objDest = {
    name: "Mohit",
    age: 23,
    city: "Ahmedabad"
};

const {age : umar, city ,name} = objDest;

console.log(name); // Mohit
console.log(umar);  // 23
console.log(city); // Ahmedabad

