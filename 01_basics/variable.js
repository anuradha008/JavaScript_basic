const accountId = 144552
let accountEmail ="anuradha@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  Not Allowed 
accountEmail = "hcl@gmail.com"
accountPassword ="21212212"
accountCity = "Amravati"

/*
Prefer not to use var
because of issue in block scope and functional scope

*/


console.log(accountId);
console.table([accountEmail , accountCity, accountPassword , accountId, accountState]);