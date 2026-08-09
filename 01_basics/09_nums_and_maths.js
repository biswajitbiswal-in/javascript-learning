const score = 567;
console.log(score);


const balance = new Number(499535553);//this is the way where we can only add the numbers
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2))//it will give the after decimal value

const otherNumber = 200.5

console.log(otherNumber.toPrecision(4));// toPrecision() controls the total number of significant digits in a number.it returns the string

const number = 1000000
console.log(number.toLocaleString());



//+++++++++++++++++ Maths ++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.9));
console.log(Math.ceil(3.1));
console.log(Math.floor(5.9));
console.log(Math.min(1,2,3,4,5,34,2,1,2));
console.log(Math.max(45,2,4,556,3,6,));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max=20;
console.log(Math.floor(Math.random()*(max-min)+1)+min);


