const userEmail = []

if(userEmail){
    console.log(`Got user email ${userEmail}`);
    
}else{
    console.log("Don't have user email");
    
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

if (Object.keys(emptyObj).length ===0) {
    console.log("object is empty");
}
