//imedieatly invoke function ->global scope se bachne ke liye .
// ()->function()->execution code

//named iife
(
    function myFun(){
        console.log("hello")
    }
)();//semi colon imp hai 

// ab arrow function ke form me ->
(
    ()=>{
        console.log("helloooo")
    }
)();

// parameter pass
(
    (parameter)=>{
        console.log(`parameter is : ${parameter}`)
    }
)("mohit");