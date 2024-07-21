//Stack(primitive) and  Heap (Non-Primitive )

let myName= "saurav";
let anotherName=myName;
anotherName="Sumit";
console.log(myName);
console.log(anotherName);
// it does not affect original value

// Heap (Non- primitive)
// it affects the original value

let userOne ={
    email : "ajjbkdskd@gmail.com",
    upi : "ksjk@yrl"
}
let userTwo = userOne;
userTwo.email="hello@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);