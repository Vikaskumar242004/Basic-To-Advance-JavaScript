/* 
In this we can study about callbacks  and promise()

means that :-  once a function executes and then we call it 

*/



//  before we read about callbacks we read about the asynchronius nature of the JS 

// so when the JS found an asynchronious function it runs on the last no matter it will be on first to another
console.log("sonu")
console.log("vikas")

setTimeout(() => {
   console.log("sherr")
}, 2000);

console.log("sonal")


//  now we read about callbacks 

const fn = () => {
    console.log("nothing")
}

const callback = (arg) => {
console.log(arg)
fn()
}

const loadScript = (src, callback) =>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("TaTa",fn)
    document.head.append(sc)
}

loadScript("link", callback)
