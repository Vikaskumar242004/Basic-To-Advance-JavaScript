console.log("hey we are the VIKAHARO's");

//  var is a global element isme stating ka element hi print hoga.
/*var a = 5;*/  let a = 5;
var b = 9;
var c = "vikas";
var _d = "kartik";

// var 88h = "akdfh"; not allowed in js

// console.log(a + b + 8);
// console.log(typeof a , typeof b, typeof c);

{
    // let is block element so they used to print a particular element in a block.
    // let a = 66;
    console.log(a);
}

console.log(a);
const a1 = 6;
// a1 = a1 + 6;   not allowed because  a1 is const and we cannot change the value of const.


// there are 7 primitive data types in javascript which are as follows : 

// 1. Null : nothing
// 2. Number : numbers
// 3. String  : double quotes ke andar jo bhi likh diya wo string
// 4. Symbol : symbol baad me pdhenge
// 5. Undefined : variable  declare krne ke baad value nahi di
// 6. Boolean :  iski do value hoti he true  or  false
// 7. Bigint : badi integer values ko store karta he

let x = "vikas bhai";
let y = 22;
let z = 3.55;
const p = true;
let  q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);


// objects
//  here we declare the bjects 
let o = {
       name : "vikas",
       "job code" : 9000,
       "is_handsome" : true
}

console.log(o);
o.salary = "100 crore";
console.log(o);
o.salary = "500 crore"; // in this line we update the salary from 100 cr to 500 cr
console.log(o);
