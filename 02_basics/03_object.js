//singleTon
//if we create in literals  then singleton is not created

//object literals

const mySym = Symbol("key1")
const jsUser = {
    name :"Biswajit",
    "full name":"Biswajit Biswal",
    [mySym]:"key1",
    age:18,
    location:"Kolkata",
    Email:"biswajitbiswal.in@google.com",
    iSLoggedIn:false,
    lastLoggedIn:["Friday","Sunday"]
}

console.log(jsUser.name);
console.log(jsUser["Email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);

jsUser.Email = "biswajit@google.com"
console.log(jsUser.Email);

// Object.freeze(jsUser)
jsUser.Email = "biswajit@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
    
}

jsUser.greetingTwo = function(){
    console.log(`hello user ${this.Email}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

