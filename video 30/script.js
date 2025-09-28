// Question number 1

// let students = ["Vikas", "Kartik","Harsh","Robin", "Sonu", "Sonal", "Sherr", "Tanishk",
//                  "Aaditya", "Shubham", "Khushi"]


// let houses = []

// for (const student of students) {
//     if(student.length <6){
//         houses.push("Gryffindor")
//     } else if(student.length > 6 && student.length <8){
//         houses.push("Hufflepuff")
//     }else if(student.length >8 && student.length < 12){
//         houses.push("Ravenclaw")
//     }else{
//         houses.push("Slytherin")
//     } 
// }             

// console.log(houses)








// Question number 2 

/* The Password validator : 
:- create a function that checks :
     at least 8 characters
     contains both upper and lower case letters
     and includes at least one digit */



   function validatepassword(Password){

    let isvalid = true;

    if(Password.length < 8){
        console.log("Password must be at least 8 characters long.")
         isvalid= false
    }

    if(!/[A-Z]/.test(Password)){
        console.log("Password must contain at least one uppercase character.")
        isvalid= false
    }
 
    if(!/[a-z]/.test(Password)){
        console.log("Password must contain at least one lowercase character.")
        isvalid= false
    }

    if(!/\d/.test(Password)){
        console.log("Password must contain at least one numeric digit")
        isvalid= false
    }

    if(isvalid){
        console.log("password is valid.")
    }
   }

const password = "Vikas783"
validatepassword(password)





//  next question is in the HTML file