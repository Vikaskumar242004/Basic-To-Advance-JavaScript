console.log("script is initialiazing")

// Math.ceil is used to neglect the decimal value and give an intger value

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

function getrandomcolor(){

    // here we are do some things which can be define step by step
    /*
    1.  make three variables because the rgb value is defined in three different digits
    2.  math.ceil which converts the decimal value into the integer value
    3. (0+math.random() * 255) means that the startin index of rgb's is 0 and then we generate a random value between the 0 and 255 */
    let val1 = Math.ceil(0 + Math.random() * 255)
    let val2 = Math.ceil(0 + Math.random() * 255)
    let val3 = Math.ceil(0 + Math.random() * 255)
    
    //  print the generated values into the colors
    return `rgb(${val1}, ${val2}, ${val3})`
}

// using for each loop for random colors
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
});