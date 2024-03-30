// How data stored into memory and how it access on the base of that there are 2 Types of Datatypes
// 1. Primitive DataType
// 2. Refrensed Type DataType


// Primitive => they are call by Value
// 7 Types = > String , number , Boolean , Null , Undefined(declared not defined),Symbol(Used to make unique) ,BigInt
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);




// Reference(Non Primitive)
// Array , Objects , Functions

const heros = ["Anuradha" ,"Radha" ,"Anu"]

let myobj = {
    nameObj : "Anuradha",
    age :20
}

let myFunction= function(){
    console.log("Hello Anuradha");
}

// console.log(typeof heros)  //object
// console.log(typeof myobj) //object
// console.log(typeof myFunction) //function

// Javascript is Dynamically typed Language

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory : Stack and Heap

// Heap (Non - Primitive)

let myYoutubeName = "Anuradhadotcom"
let anothername = myYoutubeName
myYoutubeName = "changeddotcom"

console.log(myYoutubeName);
console.log(anothername);


// Stack (Primitive)

let userOne ={
    email :"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userOne.email="userChanged@gmail.com"
console.log(userOne);
console.log(userTwo);