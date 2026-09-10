//global scope - > scope ke bhar likha hua variables
//block scope -> scope ke andar likha variables

function one(){
    const userName = "Mohit thakkar"

    function two(){
        const age = 23
        console.log(userName)
    }
    // console.log(age)
    two()
}

// one()

addone(5) // sahi hai ye ais e kar sakte hai 
function addone(num){
    return num + 1
}

// but but but , Cannot access 'addTwo' before initialization

addTwo(5) // ye ais anahi kar sakte since addTwo hamne niche define kar diya hai.
const addTwo = function(num){
    return num + 1
}




