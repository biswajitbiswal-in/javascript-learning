// Write a JavaScript program that:

// Stores " javascript learning " in a variable named course.
// Prints the total number of characters in course.
// Converts the string to uppercase and prints it.
// Converts the string to lowercase and prints it.
// Removes the spaces from the beginning and end using trim(), then prints the result.
// Prints the length of the trimmed string.

//1. Stores " javascript learning " in a variable named course.
let course = "    javascript learning"
console.log(course.length);

let uppC = course.toUpperCase()
console.log(uppC);

console.log(uppC.toLowerCase());
console.log(course.trim().length);//in one line we have done both  trimming and finding length

