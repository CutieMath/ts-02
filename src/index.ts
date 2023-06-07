class User {
    email: string;
    name: string;
    readonly city: string = "Melbourne"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

// Create the object
const cutie = new User( "123@email.com","Cutie");