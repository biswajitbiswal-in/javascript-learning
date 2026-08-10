//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


// let myCreatedDates = new Date(2025,1,28)in //js month starts from 0=>january,11=>December
// let myCreatedDates = new Date(2025,1,28,8,7)
let myCreatedDates = new Date("2003-02-7")
console.log(myCreatedDates.toLocaleString());

let myTimeStamp = Date.now()//it is used to get current time stamp
console.log(myTimeStamp);
console.log(myCreatedDates.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    day:"numeric",
    weekday:"long"
})
