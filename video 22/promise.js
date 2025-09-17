// console.log("hello world")


/* it takes two functions first one is resolve and the other is reject
   when we done our task we can resolve it with a new function value */

//  the main thing in the promises is that we don't have to make the promises
// we have already promises so we use two methods which is 

// 1 :-  promise.then()
// 2 :-  promise.catch()

//    here we
   let prom1 = new Promise((resolve, reject)=>{

    let a = Math.random();
        if(a < 0.5){
             reject("no random number is not supporting you ")
        }
        else{
            setTimeout(() =>{
                console.log("yes i am done")
                resolve("vikas")
               }, 3000);
            }
           })
  
        //    (.then) => means that if our promises works then it shows on the webpage 
// (.catch) => means that if some error is comes in our code so we type some things like our site is under maintenance 
//   and they print it and don't show an error
   prom1.then((a) =>{
    console.log(a)
   }).catch((err) =>{
    console.log(err)
   }) 