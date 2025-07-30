// string to number conversion

let score = "33";

console.log(typeof (score));

let valueInNumber = Number (score);

console.log(typeof (valueInNumber));

console.log(valueInNumber);

//Nan = not a number


// "33" can be easily converted into number 33
// "33abd" cannot be converted into numbe it will be NaN
// true => 1; false => 0




//boolean conversion

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn)


// 0 and empty is false
// 1 and anything string is true


// number to string
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);

console.log(typeof stringNumber);


//**************** Operations ***************** */


//negation of a number
let value = 3;
let negValue = -value;
console.log(negValue);

//arithemetic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

// string concatenation
let str1="Hello"
let str2 = " Ahmad"

let str = str1+str2;
console.log(str3);


// operation behavior in console.log inline
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32 
// use parenthesis to make more sense
console.log( (3 + 4) *5 % 3)


//tricky conversions

console.log(+true) // 1
console.log(+"") // 0

//assignment operator
let num1, num2, num3
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
//101









