const score = 400;
console.log(score);//400
  

const balance = new Number(100);
//console.log(balance);//[Number:100] and also get prototype
//console.log(balance.toString().length);//3
//console.log(balance.toFixed(2));//100.00 
const otherNumber = 23.8966;
//console.log(otherNumber.toPrecision(2));//24 // pre=>3:-23
 const hundereds = 100000;
 //console.log(hundereds.toLocaleString('en-IN'));//1,00,000 but it returns string


 //++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++

//  console.log(Math);//object [Math]{}
//  console.log(Math.round(4.5));// 5
//  console.log(Math.abs(-4));//4
//  console.log(Math.ceil(4.2));//5
//  console.log(Math.floor(4.3));//4
//  console.log(Math.min(2,3,4,3,1));//1
//  console.log(Math.max(2,3,45,67,));//67
//  console.log(Math.sqrt(4));//2
//  console.log(Math.pow(3,2));//9

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));
const min = 10;
const max = 20;
console.log(Math.floor((Math.random()*(max-min +1))+min));
