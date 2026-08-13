// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "12qw"
tinderUser.name = "Gautam"
tinderUser.loggedIn = true
// console.log(tinderUser);

const regularUser = {
    Email:"biswajit@gamil.com",
    fullName : {
        userFullName :{
            firstName : "Biswajit",
            lastName : "Biswal"
        }
    }
    
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

// const obj3 = {obj1,obj2}
// const obj3  = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}//spread operator
// console.log(obj3);
const user = [
    {
        name: "basu",
        id:"ba23"
    },
    {
        name : "kasu",
        id:"ka23"
    }
]
console.log(user[0].id);
 
 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty("loggedIn"));



