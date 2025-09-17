let button = document.getElementById("btn")

// eventlistner means that we can do tha task by click , doubleclick , hover and many more things on a button or a text etc.

// for ex we use click so when we click on the button the text will be change of box class 
button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "hey i am vikas"

})
