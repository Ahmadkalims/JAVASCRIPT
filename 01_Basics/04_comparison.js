console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


//comparison in different datatype. the datatypes are converted
console.log("2" > 1); // true
console.log( "02" > 1);


//confusion comparisons do not use these
console.log( null > 1); // false
console.log( null == 1); // false
console.log( null >= 1); // true

console.log(undefined == 0); //false



//strict check === it checks comparison along with datatype
console.log("2" === 2) //false