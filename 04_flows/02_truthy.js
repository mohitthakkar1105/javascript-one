// const name ="mohit" //truthy
// const name ="" //falsely
const name =[] //truthy

if(name){
    console.log("got a name")
}else{
    console.log("not got a name")
}

// falsely values - >false, 0,-0,BigInt 0n ,"", null , nan , undefined
// thruthy -->all value except falsely are truthy , ex - > "0","false"," ",{},function(){}

// to check object is empty or not
const obj = {}
if(Object.keys(obj).length===0){
    console.log("object is empty")
} 