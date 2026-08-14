//Scopes

// var c = 300
let a = 300
if(true){
let a = 5
const b = 10
// var c = 30
// console.log("Inner:",a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
 const username ="Rahul"
    function two(){
        const website = "youtube"
        // console.log(website);
        // console.log(username);
        
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const userName = "Biswajit"
    if (userName === "Biswajit") {
        const website = "youtune"
        // console.log(userName + website);
        
        
    }
    // console.log(website);
    
}
// console.log(userName);


//+++++++++++Intresting++++++++++++++
console.log(addOne(5))
function addOne(num){
    return num + 1
}

addTwo(5)
const addTwo = function addTwo(num){
    return num+2
}

