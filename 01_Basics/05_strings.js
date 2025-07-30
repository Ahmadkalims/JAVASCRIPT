const name = 'ahmad'
const repoCount = 50

//old way
console.log(name + repoCount + 'Value');


//updated way which includes strings along with values
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('Aklipse');

console.log(gameName[0]);
console.log(gameName.__proto__);
    
    
console.log(gameName.length); //7
console.log(gameName.toUpperCase); //AKLIPSE
console.log(gameName.charAt(2)); //l
console.log(gameName.indexOf('i')); //3

const newString = gameName.substring(0,4)
console.log(newString); // Akli
//substrings cannot take negative values

const anotherString = gameName.slice(-8, 4)
console.log(anotherString) //Akl

const newStringOne = "     ahmad    "
console.log(newStringOne)
console.log(newStringOne.trim()); //removes empty spaces

const url = "https;//aklipse.com/aklipse%20vision"
console.log(url.replace('%20', '-'));// replaces %20 with -
console.log(url.includes('aklipse'))//true












