//if

// const isLoggedIn = true

if(2 =="2"){
    console.log("executed");
    
}
if(2 ==="2"){
    console.log("executed");//this is strict equal
    
}
//<,>,<=,>=,==,!=,===
const temprature = 41
// if(temprature <= 50){
//     console.log("Temprature is lessthan 50");
    
// }else{
//     console.log("Temprature is greater than 50");
    
// }

const score =200

if(score > 100){
    const power = "fly"
    // var power = "fly"
    // console.log(`user power:${power}`);
    
}
    // console.log(`user power:${power}`);
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test 2");//implicit scope


//     if(balance < 500){
//         console.log("less than 500");
        
//     }else if(balance < 750){
//         console.log("less than 750");
        
//     }else{
//         console.log("less that 1200");
        
//     }


    const userLoggedIn = true
    const userDebitCard = true
    const loginFromGoogle  = false
    const loginFromEmail = true
    const guestUser = false

    if(userLoggedIn && userDebitCard){
        console.log("Allowed to buy courses");
        
    }

    if(loginFromEmail || loginFromGoogle || guestUser){
        console.log("user logged in");
        
    }


    // Nullish Coalescing Operator (??): null undefined
    let val1;
    // val1 = 5 ?? 10
    // val1 = null ?? 10
    // val1 = undefined ?? 10
    val1 = null ?? 10 ?? 3
    console.log(val1);
    
//Ternary operator
// consition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("price grater than 80"):console.log("less than 80");


