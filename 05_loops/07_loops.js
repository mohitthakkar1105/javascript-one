//reduces

const nums = [1,2,3];

const initValue = 0;

const total = nums.reduce(
    (accumulator,currentValue)=>{
        console.log(`accumulator : ${accumulator}    |     currentValue : ${currentValue}`);
        return accumulator + currentValue;
    },initValue
)

console.log(total);

// Real backend example :->

const shoppingCart = [
    {
        name : "Bugati",
        price : 1000000
    },
    {
        name : "mercedies",
        price : 1000000
    },
    {
        name : "nascar",
        price : 2000000
    },
    {
        name : "zen estilo",
        price : 2000000
    }
]

const totalCarPrice = shoppingCart.reduce(
    (acc,curr)=>acc+curr.price,0
)

console.log(`price of total car is : ${totalCarPrice}`);
