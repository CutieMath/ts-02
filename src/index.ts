// ==============
// Verbose way
// ==============
// class User {
//     public email: string; // public is the default if not declared
//     public name: string;
//     private readonly city: string = "Melbourne" // only accessible within the class
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }


// ==============
// Short way
// ==============
class User {
    private readonly city: string = "Melbourne" // only accessible within the class
    constructor(
        public email: string, public name: string
    ){}
}


// Create the object
const cutie = new User( "123@email.com","Cutie");
