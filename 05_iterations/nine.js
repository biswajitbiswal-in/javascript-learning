const myNums = [1,2,3]

const total = myNums.reduce(function(accumulator,currentValue)  {
    // console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue
},0)
// console.log(total);
// const total = myNums.reduce((accumulator,currentValue)=>{
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     return accumulator + currentValue
// },0)
console.log(total);

const ShopingCart = [
    {
        itemName:"shirt",
        price:1000,
        quantity:2
    },
    {
        itemName:"pants",
        price:2000,
        quantity:1
    },
    {
        itemName:"shoes",
        price:3000,
        quantity:1
    },
    {
        itemName:"belt",
        price:200,
        quantity:3
    }
]  


const totalPrice = ShopingCart.reduce((acc,item)=>{
    return acc + item.price * item.quantity
},0)
console.log(`Yor total price is ${totalPrice}`);

    