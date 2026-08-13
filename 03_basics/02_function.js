function calculateCartPrice(vak1,val2,val3,...num1){
    console.log(num1)
}
// calculateCartPrice(100,12,21,24,4,45,4)
const user = {
    name:"Biswajit",
    price:100
}
function handleObject(anyObject){
  console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    name:"biswajit",
    price:499
})

const myNewArray = [100,200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,283,35,678,4674]));
