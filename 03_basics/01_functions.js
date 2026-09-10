// function addtwoNumber(num1 , num2){ // parameters
//     console.log(num1+num2)
// }

// addtwoNumber(4,"3")//arguments

function addtwoNumber(num1 , num2 = 5){ //by default de sakte hai 
    return num1+num2
}

console.log(`value returned is : ${addtwoNumber(5,6)}`)


// falsy value -->
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN


// *****************************Rest Parameter*************************

function calculateCartPrice(...price){ // ye array me convert kar dete hai 
    return price
}

// console.log(calculateCartPrice(200,300,100)) // ye array deta hai 

function calculateCartPrice(val1,val2,...price){ 
    return `ye val1 hai ${val1} val2 ${val2} price ${price}`
}

console.log(calculateCartPrice(200,300,100,50,300))

