function sayMyName () {
    console.log("R");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log("l");
    }
// sayMyName()
//                     //parameter
//                    //    |
// function addTwoNum(num1,num2){
//     console.log(num1+num2);
    
// }

function addTwoNum(num1,num2){
    // let result = num1+num2
    // console.log("Rahul");
    // return result
    // console.log("Rahul");//After return this is the unreacheble code
    return num1+num2    

}

// const result = addTwoNum(3,7)//arguments
// console.log("Result:",result);

function userLoginMessage(userName="sam"){
    if(!userName){
        console.log("Please enter a user name ");
        return
    }
    return `${userName} just logged in`
}

console.log(userLoginMessage("Rahul"))


