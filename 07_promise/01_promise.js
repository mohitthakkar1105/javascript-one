// promise has 3 state :->
// pending ~
// fulfilled ~
// rejected ~

// syntax
// const promise = new Promise((resolve, reject) => {

//     // koi asynchronous kaam

// });

// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("promise me huu");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("In then");
// });

new Promise((res,rej)=>{
setTimeout(()=>{
        res({
            userName : "Mohit",
            age : 23
        })
    },1000)
}).then((resolvedData)=>{
    console.log(resolvedData);
})
