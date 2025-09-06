console.log("This  is  a String video")

let a = "VIKAHARO"

//  a[0] is used to print the particular word in a string like a[0] only prints V in vikaharo

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);

// agar ek ya jyada index faltu ho gye to output me undefined dega
// console.log(a[8]);

// to find the length
console.log(a.length)


let mname = "vikas"
let friends = "kartik"
// console.log("My name is " + mname + " and my friend name is  " + friends)

//  to avoid this double quotes and + sign again and again we can use
// this is known  as string interpolation
console.log(` my name is ${mname} and my friend name is ${friends}`)

let  b = "vikaharo"

// used to  change the string in uppercase
console.log(b.toUpperCase())
// used to change the string in lowercase
console.log(b.toLowerCase())
console.log(b.length)

// slice  is used to remove the outside value of given index like 1,5
console.log(b.slice(1,5))
console.log(b.slice(1))

// in this we can replace the vi and add the so in the given string
// suppose we have two occurende like vikaharovi so they replace the first occurence
console.log(b.replace("vi","so")) 

// by using concat we can add two strings 
console.log(b.concat(a))

// we can add another string in adding of two string
console.log(b.concat(a, "Pvt. Ltd. "))


// *note : Strings are immutable  
// if we declare a string and after some changes  we can type the console.log(b)
// so the output is original string that we declare in the starting

console.log(b)


// b.charAt(0);

// b.indexOf(4);


// isse hum check kr sakte he ki hmari string vi se start ho rahi he ya nahi agar ha to true return kr dega
b.startsWith(vi);

// isse hum check kr sakte he ki hmari string ro se end ho rahi he ya nahi 
b.endsWith(ro);