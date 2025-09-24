//  here we define a class
class Animal {
    // here we define a constructor
    constructor(name){
        this.name = name;
        console.log("Object is created")
    }

    // a function
    eats(){
        console.log("eats the food")
    }
    // also a function
    jumps(){
        console.log("jumping on the ground")
    }
}

//  here we declare a second class which extends the properties of the first class
class Lion extends Animal{
    // again declare a constructor
    constructor(name){
        // define a super keyword because we used the same constuctor name again but different value
        super(name)
        console.log("she is a Lion")
    }
}

// give a variable and give the value to parameter of the constuctor and print them
let a = new Animal("Bunny")
console.log(a);

// give a variable and give the value to parameter of the second constuctor and print them
let l = new Lion("shera")
console.log(l)



//  method overriding 

//  suppose on the  above code we define eats function to the lion class and then if we write 
//  a.eats so it print 

