const user={
    userName:"Biswajit",
    price:100,

    welcomMessage : function(){
        console.log(`${this.userName},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomMessage()
// user.userName = "sam"
// user.welcomMessage()


// console.log(this);

// function chai(){
//     let user = "rahul"
//     console.log(this.user);
    
// }
// chai()

const chai = () =>{
    let userName = "Biswajit"
    console.log(this.userName);
    
}
// chai()
// const addTwo=(num)=>{
//     return num+2
// }
// const addTwo=(num)=>  num+2
// const addTwo=(num)=> ( num+2)
const addTwo=(num)=> ({ user:"biswajiy"})


console.log(addTwo(3));


const myArr=[1,2,3,4,5,6]
myArr.forEach(function(){})//syntax
myArr.forEach(()=>{})//syntax
