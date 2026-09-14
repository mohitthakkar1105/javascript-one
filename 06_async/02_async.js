// setInterval()
// Har specified interval par baar-baar callback chalata hai.

const fun = (str) => {
  console.log(str);
}

const intervalRef = setInterval(fun, 2000, "hello");

setTimeout(()=>{
    clearInterval(intervalRef)
},10000)

