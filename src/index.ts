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
    private _courseCount = 1;
    private readonly city: string = "Melbourne" // only accessible within the class
    constructor(
        public email: string, public name: string
    ){}

    // private methods, only accessible within the class
    private deleteToken(){
        console.log("Token deleted");
    }

    // variable edits
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    // Expose private variables
    get courseCount(): number {
        return this._courseCount;
    }

    // no return types for setters
    set courseCount(count: number) {
        if(count <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = count;
    }
}


// Create the object
const cutie = new User( "123@email.com","Cutie");
