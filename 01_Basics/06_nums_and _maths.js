const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length) //3
console.log(balance.toFixed(1))// 100.0

const otherNumber = 123.23423
console.log(otherNumber.toPrecision(3)) // be careful with toprecision

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // 10,000,000 Int Standard
console.log(hundreds.toLocaleString('en_IN')); // 1,00,00,000 Indian

const a = Number.MAX_VALUE
const b = Number.MIN_VALUE

// +++++++++++++++++ Maths +++++++++++++++++

//maths library

//it includes PI, abs, cos, sin, tan, power, sqrt, etc

console.log(Math)
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.2)) //4
console.log(Math.min(4, 2, 56, 1)) //1
console.log(Math.max(4, 2, 56, 1)) //56

console.log(Math.random()) //Random values between 0-1
console.log(Math.random()*10) //Random values between 0-10
console.log((Math.random()*10) + 1) //Random values between 1-10
console.log(Math.floor(Math.random()*10) + 1) //removes decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min)) // 10-20