//  IIFE FUNCTION IN JAVASCRIPT

async function sleep(){
    // here is a async main function but fot immediate we can define an IIFE function 
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(45)
        },3000);      
    })
}

// here we are declaring a new immediate function which is known as IIFE
   
  (async function main(){
        let a = await sleep()
        console.log(a)
        let b = await sleep()
        console.log(b)
    })()

// DESTRUCTING FUNCTION IN JAVA SCRIPT

//  here the first two value is assigned to the first two variables and the other remaining values assigned to the rest 
let [x,y, ...rest] = [1,5,7,8,9,2]
console.log(x,y,rest)

//  we can also destructor the objects 
//  main motive is in big programs we have too much values but we want some of it so we use it 
// here we have three values in the object and we want only two so we destruct it 
let obj = {
    a : 1,
    b : 2,
    c : 3
}
//  getting only two values
let {a,b} = obj
console.log(a,b)

//  here we are define aboyt SHARED SYNTAX
// declare a function
function sum(a,b,c){
    return(a+b+c)
}

let arr = [1,4,6]
// it is the simple method to add the numbers by their index number 
console.log(arr[0] + arr[1] + arr[2])
// by using the ... dotes we solve the operation
// (...) is known as spread operator 
console.log(sum(...arr)) 


// GLOBAL , LOCAL and BLOCKS SCOPES 

//  three types of scopes 
// BLOCK
// FUNCTION
// GLOBAL


// for ex

{
    // it is the example of block that means it's value is only for a particular block
    let a = 1;
}



// HOISTING 

/* suppose we have a variable a1 and it declare at the last of the block and it have a value 
but it shows undefined so it means that we use only var a1 at the top of the block elements but 
not use its value 

defination :- Hoisting refers to the process where the interpreter appears to move the declarations to 
the top of the code before execution 

variables can thus be referenced before they are declared in JS
*/

var a1 = 1; 
