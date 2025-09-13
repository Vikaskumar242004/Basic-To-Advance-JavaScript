console.log("Hello Vikas")


//  this is the method for choosing a particular element and style and change them 
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"


//  but we can choode it by their ID name easily 
// by using the ID's method we can easily target the paritcular element and chnge it to another form 

document.getElementById("sher").style.backgroundColor = "red"

//  and the other method is by using queryselectors
//  but it can only select the first element which means first selector
document.querySelector(".box").style.backgroundColor = "green" 

// we can use this tag to change all the HTML elements but we cannot directly applu=y CSS on it we use loops to apply CSS
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})


//  and many more topics in documentation