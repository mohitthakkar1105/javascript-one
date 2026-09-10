const user = {
    userName : "mohit",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.userName}, Welcome to MyApp`)
        console.log(this)
    }
}

// user.welcomeMessage()
// console.log(this)// {} empty aaya

function hey(){
    console.log(this) // ab empty nahi ayega 
}
// hey()


// ********************************arrow function******************************

const arrow = ()=>{
    let name = "mohit thakkar"
    console.log(this)//isme empty aaya bhai but simple wale me aaya
    console.log(this.name)//undefined
}
arrow()

// implicity return

const add = (a,b) => a+b // sun jab bhi{}hua to {return a+b} return jaruri nut (a+b) nahi .
console.log(`5 + 6 : ${add(5,6)}`)

// object ko return karna hua to () ye zaruri
const returnObject = () => ({name : "mohit",surname : "Thakkar"})

console.log(returnObject())