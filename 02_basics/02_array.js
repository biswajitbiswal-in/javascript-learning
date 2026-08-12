const marvelHeros = ["spiderman","thor","ironman"]
const dcHeros = ["superman","flash","batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const heros = marvelHeros.concat(dcHeros)
// console.log(heros);

const newHeros = [...marvelHeros,...dcHeros]//spread operator
console.log(newHeros);

const anotherArr =[1,2,3,4,[5,6,7],8,9,[6,7],[4,5]] 
const usableArray = anotherArr.flat(Infinity)
console.log(usableArray);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"))
console.log(Array.from({name:"rahul"}))//intresting//output:object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

