const accountId = 144533
let accountEmail = "hitesh@hb.com"
var accountPassword = "123456"
accountCity = 'Jaipur'
let accountState

// accountId = 2 //Not Allowed

accountEmail = "hb@hc.com"
accountPassword = "1234"
accountCity = "Bangluru"

console.log(accountEmail);

/*
    Prefer not to use var
    Because of the issues related to block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])