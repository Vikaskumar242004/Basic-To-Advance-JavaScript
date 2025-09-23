//  this code gives value like  4 + 7 = 47 because it adds the string not number because we using prompt 
// which is used to for taking the input of strings 

// let a = prompt("Enter the first number : ")

// let b = prompt("Enter the second number : ")

// let sum = a + b;

// console.log("The sum is  ",sum)



//  now it give right answer but when we give string in the input so due to the forgive nature of the js
// it doesn't give the error and give that the sum is naN means not a number so for removing the forgiveness of 
// the js we using error handling 

let a = prompt("Enter the first number : ")

let b = prompt("Enter the second number : ")

//  this is pre-defined function to check ha nan
if(isNaN(a) || isNaN(b)){
    // this is the error type which are follows :
    throw SyntaxError("this is not allowed.")
}
let sum = parseInt(a) + parseInt(b);


// for handling the error we use try or catch block

try {
    // phle hum use chlane ki try krenge or agar nahi chalta he to use catch block ko de denge
    console.log("The sum is  ",sum * x)
} catch (error) {
    // or yha pr bata denge ki error aa gya he fix it
    console.log("error aaya he")
}