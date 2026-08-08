//+++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitives) and heap (non-primitives) memory allocation


//stack memory allocation

//in stack memory allocation the primitive data types are stored in stack memory and when we assign a variable to another variable it creates a copy of the value and stores it in another variable. So when we change the value of anotherName it does not affect the value of myYoutubeName because they are stored in different memory locations.


let myYoutubeName = "Biswajit"
let anotherName = myYoutubeName;

anotherName = "Rahul"
console.log(myYoutubeName)


console.log(anotherName)

//heap memory allocation


//in heap memory allocation the non-primitive data types are stored in heap memory and when we assign a variable to another variable it creates a reference to the same memory location. So when we change the value of admin it affects the value of user because they are stored in the same memory location.

let user = {
    email: "user@gmail.com",
    id: 123,
    UPI_ID: "user@upi",
    role: "SDE - II",
}


let admin = user;

admin.email="biswajit@gmail.com"

console.log(user.email)
console.log(admin.email)
