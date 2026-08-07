let score = 12;
let score1 = "12cd";
console.log(typeof(score))
console.log(typeof(score1))

let valueInNumber = Number(score1);//that is how we can convert string to number in js
console.log(typeof(valueInNumber))
console.log(valueInNumber)

//output
//"33"=> 33
//"33abc"=> NaN
//"abc33"=> NaN
//true=> 1 ,false=> 0
//undefined=> NaN
//"rahul"=> NaN

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);//that is how we can convert number to boolean in js
console.log(booleanLoggedIn)

//output
//1=> true, 0=> false
//""=> false, "rahul"=> true
//null=> false
//undefined=> false

let someNumber = 45;
let stringNumber = String(someNumber);//that is how we can convert number to string in js
console.log(stringNumber)
console.log(typeof stringNumber)

//output
//45=> "45"
//true=> "true", false=> "false"




