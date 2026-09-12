const arr = [1,2,3,4,5]

// for of loop
for (const element of arr) {
    // console.log(element)    
}

// map ~ only unique number
const countries = new Map()
countries.set('IN','India')
countries.set('Uk','United Kingdom')
countries.set('Gr','Germany')
countries.set('Af','Africa')
countries.set('Af','Africa')

console.log(countries)

for (const country of countries) {
    console.log(typeof country)
    console.log(`country : ${country}`)
    console.log(`key : ${country[0]}`)
    console.log(`value : ${country[1]}`)
}

for (const [key,value] of countries) {
    console.log(key,"---",value)
}

// can't iterate object , but map , string , array can.
