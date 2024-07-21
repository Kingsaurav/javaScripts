let score = null;
//console.log(typeof score);// using typeof without bracket
//console.log(typeof(score));// using typeof with bracket

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// type number but return different values
// "33"=> 33
// "33qw"=> NaN
// null=> 0 
//undefined=>NaN
// true=> 1 , false=> 0
// string => NaN


let isLoggedIn =1;
let boolenIsLoggedIn = Boolean(isLoggedIn);
//console.log(boolenIsLoggedIn);

// 1 => true
// "" => false
// 0 => false
// "sfdf"=> true

let someNumber= 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// ******************* Operations******************************

let value = 3;
let negValue = -value;
//console.log(negValue);// output => -3


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);// power operator


let str1 = " hello";
let str2 = " World";
let str3 = str1 + str2;
//console.log(str3);// hello world


// console.log("1" +2);// 12
// console.log(1+ "2");//12
// console.log("1" + 2 +2);//122
// console.log(1 + 2 + "2");// 32


// console.log(+true);// 1
// console.log(true+);// Error
// console.log(+"");//  0


let num1, num2, num3;
num1=num2=num3= 2 + 2;// No need to do such unusual things

let gameCounter = 100;
//gameCounter++;// 101// postfix
++gameCounter;// 101 // prefix
console.log(gameCounter);