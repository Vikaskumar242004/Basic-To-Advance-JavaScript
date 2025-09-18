console.log("ASYNC AWAIT")

//  here we make the function async so the js engine runs it on the background
//  async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000)
//     })
// }


//  this is fetch API which takes two await first for return the promise and second for parse 
async function getdata() {
  let x = await fetch("https://google.com")
  let data = await x.json()
  console.log(data)
}


//  here we are make a main function to run the async function 
async function main(){
console.log("Loading Modules")
console.log("Do something else")
console.log("Load Data")

//  here we give an await to the getdata function it means the js engine waits for the few seconds
//  and runs the async function for given time and then runs the code which is given below the await 
let data = await getdata()
//  this is a callback funciton method which is not used mostly
    // let data = getdata()
    // data.then((v) => {
    //     console.log("Get Data")
    //     console.log("Process Data")
    // })

    console.log("Get Data")
    console.log("Process Data")

}

main()