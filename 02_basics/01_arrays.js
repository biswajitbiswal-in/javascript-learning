//Arrays

const myArray = [0,1,2,3,4,5,6]
const myR2 = ["RAHUL","RAJESH"]

const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr2[0]);

//Array Methodes
myArr2.push(7)
myArr2.pop()


// myArr2.unshift(8)
// myArr2.shift()
// console.log(myArr2)
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(8));

const mynewArray = myArr2.join()
// console.log(myArr2);

// console.log(typeof mynewArray);

//slic,splice

console.log("A",myArr2);

const myar1 = myArr2.slice(1,3)
console.log(myar1);


console.log("B",myArr2);
const myar2 = myArr2.splice(1,3)//it manipulates the original array
console.log(myar2);

console.log("C",myArr2);



