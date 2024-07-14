const accountId=1234;
let accountEmail="saurav12@gmail.com";
var  accountPassword="124444";
let accountState;// undefined
accountCity="Jaipur";
// trying to assign new values in variable
//accountId=22222;// not allow
accountEmail="ram@gmail.com";
accountPassword="232323";
accountCity="Delhi";

/*
prefer not to use var
Because of issue in block scope {} and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
