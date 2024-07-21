let myname ="saurav";
let age = 20;

//console.log(myname +" " +age +" year's"); // old once

// use back ticks called string interpolation

//console.log(`My name is ${myname} and i am ${age} year's.`);


// Another way to create string

let newName = new String("Sumit");
// console.log(newName[0]);//S
// console.log(newName.__proto__);// object
// console.log(newName.charAt(4));// t
// console.log(newName.length);// 5
// console.log(newName.toUpperCase());//SUMIT
// console.log(newName.indexOf("i"));//3

const newString =newName.substring(0,3);
console.log(newString);//Sum

const anotherString=newName.slice(-3,4);
console.log(anotherString);//mi

const newStringOne = "   hello   ";
console.log(newStringOne);// hello  
console.log(newStringOne.trim());//hello

const url= " https://saurav.com/saurav%20kumar";
console.log(url.replace("%20","-"));//https://saurav.com/saurav-kumar


console.log(url.includes('saurav'));//true
console.log(url.includes('hello'));//false

const oldString= new String("saurav-hello-kumar");
console.log(oldString.split('-'));// create an array [ 'saurav', 'hello', 'kumar' ]