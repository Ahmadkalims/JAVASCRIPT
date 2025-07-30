// Primitive

// 7 types
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. BigInt

const score = 100;
let userEmail = undefined; // without defining its undefined

const id = Symbol('123')
const anotherId = Symbol ('123')
// Symbol makes it unique

const bigNumber = 23424234234234232342n

// Reference type (Non primitive)

// 1. Array
// 2. Objects
// 3. Functions


// Array
const heros =  ["Spiderman", "Black Panther" , "Ironman"];


// Object
let myObj = {
    name: "Ahmad",
    age: 24,
}


// FUnctions
const myFunction = function (){
    console.log("Hello world");
}

// +++++++++++++++++++++++++++++++++++++++++++++++

// there are two types of memory
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "aklipsedotcom"

let anothername = myYoutubename;
anothername ="chaiaurcode"

console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}

