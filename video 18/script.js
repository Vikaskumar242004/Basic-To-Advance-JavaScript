console.log("hello vikas")


// so by using the .innerHTML tag we can get the inner HTML of the element
document.querySelector(".container").innerHTML

// show all the text of container and that part which is given in the queryselector
document.querySelector(".container").innerText

// it shows all the HTML inlcuding the element which is given in the queryselector
document.querySelector(".container").outerHTML

// it shows the type of the element like it is div , nav and etc. 
// but it only applicable for elements 
document.querySelector(".container").tagName

// it works same as .tagName but it contain text or comment lines 
document.querySelector(".container").nodeName

// it hides the given element in the queryselector like here it hides the container element 
document.querySelector(".container").hidden = true

// it changes the text of the given element tag in the HTML
// but we can confirm that we  know the actual address of the text like
// right class or it can change only the first element 
document.querySelector(".box").innerHTML = "i am a sher"

// check that the element have the  attribute  or not
// like : here we are check that the box element has style attribute or not
document.querySelector(".box").hasAttribute("style")

// it give the attribute of that element
document.querySelector(".box").getAttribute("style")

// we can set the attribute of the particular element 
document.querySelector(".box").setAttribute("style","display : inline")

//  give all the attributes used in the given element 
document.querySelector(".container").attributes

// it remove the attributes in the given element
document.querySelector(".container").removeAttribute("style")

// by using this method we can change anything on the website but only in our PC
document.designMode = "on"

// by using this tag we can know the name of the data which is given in the HTML 
document.querySelector(".box").dataset

// by using this tag we can get all the class in the given element tag
// like here we access the class of the  container part
document.querySelector(".container").classList

// by using this tag we can get the name of the class which is given 
document.querySelector(".container").className

// we can add a new name in the class like here we are add a new class name which is vikas
document.querySelector(".container").classList.add("vikas")

// remove the class name
document.querySelector(".container").classList.remove("vikas")

// it is a very important tag that means if we have no class so it can add it 
// and if we have the class so they delete it
document.querySelector(".container").classList.toggle("vikas")
