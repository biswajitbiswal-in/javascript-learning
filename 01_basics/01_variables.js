const accountId = 123454;
let accountEmail = "biswajit@google.edu.in";
var accountPassword = "123454";
accountCity = "Bhubaneswar";
let accountState;

// accountId = 123456; not allowed because accountId is a constant variable
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope. It is better to use let and const instead of var.
*/

accountEmail = "rahul@microsoft.com";
accountPassword = "154789";
accountCity = "Bangalore";
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
