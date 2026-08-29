//for of loop
const Arr = [1,2,3,4,5,6,7]
for (const element of Arr) {
    // console.log(element);
    
}
const string = "Hello world!"
for (const greet of string) {
    // console.log(`Each word ${greet}`);
    
}


//maps
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('IN',"INDIA")

console.log(map.get("USA"));
console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value);
    
}


const myObject = {
    'game1':'spiderman',
    'game2':'dicerolling'
}
// for (const [key,value] of myObject) {
//     console.log(key,":-",value);
    
// }

