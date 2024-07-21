//Stack(primitive) and  Heap (Non-Primitive )

let myName= "saurav";
let anotherName=myName;
anotherName="Sumit";
console.log(myName);//saurav
console.log(anotherName);//Sumit
// it does not affect original value

// Heap (Non- primitive)
// it affects the original value

let userOne ={
    email : "ajjbkdskd@gmail.com",
    upi : "ksjk@yrl"
}
let userTwo = userOne;
userTwo.email="hello@gmail.com";

console.log(userOne.email);//hello@gmail.com
console.log(userTwo.email);//hello@gmail.com