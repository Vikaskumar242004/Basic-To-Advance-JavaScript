let a = 6

// ye function bnaya he 
function factorial(number){
    // yha pr array creat kra jo ki 0 include nahi krega kyuki number me + 1 kr diya he 
    // or keys ka mtlb hr ek element ko lega 
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    // yha pr array 1 se leke given eleement tk jayga
    // using for each loop
   let c = arr.slice(1,).reduce((a,b) =>{
    return a*b
   })
return c;
}


//  using simple for loop  

function facfor(number){
    let fac = 1;
    for(let i =1; i<= number; i++){
        fac = fac *i;
    }
return fac
}

console.log(facfor(a))
console.log(factorial(a))