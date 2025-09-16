function createCard(title, cname, views, monthsold, duration, thumbnail) {


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}">
                   <div class = "capsule">${duration}</div>
            </div>
         
            <div class="text">
                <h1>${title} </h1>
                <p>${cname} . ${views} views . ${monthsold} months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
         
} 

createCard("Introducton to Backend | Vikas web development ","CodeWithVikas", "727K", "7", "31:22", "v.jpg")


