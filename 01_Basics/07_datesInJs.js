//Dates

let myDate = new Date()

console.log(myDate); //025-07-31T06:35:42.894Z
console.log(myDate.toString()); //Thu Jul 31 2025 06:35:42 GM+0000
console.log(myDate.toISOString());//2025-07-31T06:35:42.894Z
console.log(myDate.toJSON());//2025-07-31T06:35:42.894Z
console.log(myDate.toLocaleDateString());//7/31/2025
console.log(myDate.toLocaleString());//7/31/2025, 6:35:42 AM
console.log(myDate.toTimeString());//06:35:42 GMT+0000 (CUT)
console.log(myDate.toUTCString());//Thu, 31 Jul 2025 06:35:42 GMT



console.assert(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23)
console.log(myCreatedDate.toDateString()); //Thu Jan 23 2025



//TImestamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getDate);
console.log(newDate.getFullYear);
console.log(newDate.getDay);
console.log(newDate.getHours);
console.log(newDate.getMilliseconds);
console.log(newDate.getMonth);
console.log(newDate.getMinutes);


lnewDate.toLocaleDateString('default', {

    weekday: "long"
})
